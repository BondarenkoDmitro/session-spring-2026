/* ══════════════════════════════════════════
   UTILS
══════════════════════════════════════════ */
const STORAGE_KEY = 'study-planner-v1';

function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function todayStr() {
    return new Date().toISOString().slice(0, 10);
}

/* ══════════════════════════════════════════
   STATE — load from localStorage or seed
══════════════════════════════════════════ */
function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) return JSON.parse(raw);
    } catch (e) {}
    // первый запуск — используем начальные данные
    return JSON.parse(JSON.stringify(window.INITIAL_DATA));
}

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState();

/* ══════════════════════════════════════════
   STATS
══════════════════════════════════════════ */
function updateStats() {
    let totalDays = 0, totalTasks = 0, doneTasks = 0;
    state.forEach(w => {
        w.days.forEach(d => {
            totalDays++;
            d.tasks.forEach(t => {
                totalTasks++;
                if (t.done) doneTasks++;
            });
        });
    });
    document.getElementById('totalDays').textContent  = totalDays;
    document.getElementById('totalTasks').textContent = totalTasks;
    document.getElementById('doneTasks').textContent  = doneTasks;
}

/* ══════════════════════════════════════════
   RENDER
══════════════════════════════════════════ */
function render() {
    const container = document.getElementById('weeksContainer');
    container.innerHTML = '';

    state.forEach(week => {
        container.appendChild(buildWeek(week));
    });

    updateStats();
    populateSelects();
}

/* ── WEEK ── */
function buildWeek(week) {
    const section = document.createElement('section');
    section.className = 'week-block';
    section.dataset.id = week.id;

    const badgeLabels = {
        critical: 'КРИТИЧНА',
        concert:  'КОНЦЕРТ',
        session:  'СЕСІЯ',
        normal:   'ЗВИЧАЙНА',
    };

    section.innerHTML = `
    <div class="week-header">
      <div class="week-num">ТИЖДЕНЬ</div>
      <div class="week-title-wrap">
        <div class="week-title">${week.title}</div>
        <div class="week-dates">${week.dates}</div>
      </div>
      <span class="week-badge ${week.badge}">${badgeLabels[week.badge] || ''}</span>
      <button class="week-delete-btn" data-week="${week.id}">✕ ВИДАЛИТИ ТИЖДЕНЬ</button>
    </div>
    <div class="days-grid" id="days-${week.id}"></div>
  `;

    const grid = section.querySelector(`#days-${week.id}`);
    week.days.forEach(day => grid.appendChild(buildDay(day, week.id)));

    section.querySelector('.week-delete-btn').onclick = () => deleteWeek(week.id);

    return section;
}

/* ── DAY ── */
function buildDay(day, weekId) {
    const today = todayStr();
    const isPast = day.date && day.date < today;
    const isToday = day.date === today;

    const card = document.createElement('div');
    card.className = 'day-card' + (isToday ? ' is-today' : '') + (isPast ? ' is-past' : '');
    card.dataset.id = day.id;

    const todayTag = isToday ? `<span class="day-today-tag">СЬОГОДНІ</span>` : '';
    const holidayTag = day.holiday ? `<span class="day-holiday">СВЯТО</span>` : '';

    card.innerHTML = `
    <div class="day-header">
      <div class="day-dot"></div>
      <div class="day-name">${day.name}</div>
      ${holidayTag}
      ${todayTag}
      <button class="day-delete-btn" title="Видалити день">×</button>
    </div>
    <div class="day-tasks" id="tasks-${day.id}"></div>
  `;

    const tasksList = card.querySelector(`#tasks-${day.id}`);

    // tasks
    day.tasks.forEach(task => tasksList.appendChild(buildTask(task, day.id, weekId)));

    // deadlines
    day.deadlines.forEach(dl => {
        const dlEl = document.createElement('div');
        const cls = dl.type === 'red' ? 'red' : dl.type === 'green' ? 'green' : '';
        dlEl.className = `deadline-item ${cls}`;
        dlEl.textContent = dl.text;
        tasksList.appendChild(dlEl);
    });

    card.querySelector('.day-delete-btn').onclick = () => deleteDay(weekId, day.id);

    return card;
}

/* ── TASK ── */
function buildTask(task, dayId, weekId) {
    const item = document.createElement('div');
    item.className = 'task-item' + (task.done ? ' done' : '');
    item.dataset.id = task.id;

    item.innerHTML = `
    <div class="task-check">${task.done ? '✓' : ''}</div>
    <div class="task-text">${task.text}</div>
    <button class="task-del-btn" title="Видалити">×</button>
  `;

    // toggle done
    item.querySelector('.task-check').onclick = (e) => {
        e.stopPropagation();
        toggleTask(weekId, dayId, task.id);
    };
    item.querySelector('.task-text').onclick = () => toggleTask(weekId, dayId, task.id);

    // delete task
    item.querySelector('.task-del-btn').onclick = (e) => {
        e.stopPropagation();
        deleteTask(weekId, dayId, task.id);
    };

    return item;
}

/* ══════════════════════════════════════════
   MUTATIONS
══════════════════════════════════════════ */
function toggleTask(weekId, dayId, taskId) {
    const task = state
        .find(w => w.id === weekId)?.days
        .find(d => d.id === dayId)?.tasks
        .find(t => t.id === taskId);
    if (task) task.done = !task.done;
    saveState();
    render();
}

function deleteTask(weekId, dayId, taskId) {
    const day = state.find(w => w.id === weekId)?.days.find(d => d.id === dayId);
    if (day) day.tasks = day.tasks.filter(t => t.id !== taskId);
    saveState();
    render();
}

function deleteDay(weekId, dayId) {
    if (!confirm('Видалити цей день?')) return;
    const week = state.find(w => w.id === weekId);
    if (week) week.days = week.days.filter(d => d.id !== dayId);
    saveState();
    render();
}

function deleteWeek(weekId) {
    if (!confirm('Видалити весь тиждень з усіма днями?')) return;
    state = state.filter(w => w.id !== weekId);
    saveState();
    render();
}

/* ══════════════════════════════════════════
   ADD FORM — populate selects
══════════════════════════════════════════ */
function populateSelects() {
    const weekSel = document.getElementById('addWeek');
    const daySel  = document.getElementById('addDay');

    const prevWeek = weekSel.value;
    const prevDay  = daySel.value;

    weekSel.innerHTML = '<option value="new">— Новий тиждень —</option>';
    state.forEach(w => {
        const opt = document.createElement('option');
        opt.value = w.id;
        opt.textContent = w.title + ' (' + w.dates + ')';
        weekSel.appendChild(opt);
    });

    if (prevWeek && weekSel.querySelector(`option[value="${prevWeek}"]`)) {
        weekSel.value = prevWeek;
    }

    updateDaySelect(weekSel.value, prevDay);
}

function updateDaySelect(weekId, restoreVal) {
    const daySel = document.getElementById('addDay');
    daySel.innerHTML = '<option value="new">— Новий день —</option>';

    if (weekId !== 'new') {
        const week = state.find(w => w.id === weekId);
        if (week) {
            week.days.forEach(d => {
                const opt = document.createElement('option');
                opt.value = d.id;
                opt.textContent = d.name;
                daySel.appendChild(opt);
            });
        }
    }

    if (restoreVal && daySel.querySelector(`option[value="${restoreVal}"]`)) {
        daySel.value = restoreVal;
    }

    toggleNewDayField(daySel.value);
}

function toggleNewDayField(dayVal) {
    document.getElementById('newDayFields').style.display = dayVal === 'new' ? '' : 'none';
}

/* ══════════════════════════════════════════
   ADD — event handlers
══════════════════════════════════════════ */
document.getElementById('addWeek').onchange = function () {
    const isNew = this.value === 'new';
    document.getElementById('newWeekFields').style.display = isNew ? '' : 'none';
    updateDaySelect(this.value, null);
};

document.getElementById('addDay').onchange = function () {
    toggleNewDayField(this.value);
};

document.getElementById('addBtn').onclick = addEntry;

function addEntry() {
    const weekSel    = document.getElementById('addWeek');
    const daySel     = document.getElementById('addDay');
    const newWeekInp = document.getElementById('newWeekName');
    const newDayInp  = document.getElementById('newDayName');
    const taskInp    = document.getElementById('newTask');
    const deadInp    = document.getElementById('newDeadline');

    const taskText = taskInp.value.trim();
    if (!taskText) {
        flash(taskInp);
        return;
    }

    let week;

    /* ── resolve or create week ── */
    if (weekSel.value === 'new') {
        const wName = newWeekInp.value.trim() || 'Новий тиждень';
        week = { id: uid(), title: wName, dates: '', badge: 'normal', days: [] };
        state.push(week);
    } else {
        week = state.find(w => w.id === weekSel.value);
    }

    /* ── resolve or create day ── */
    let day;
    if (daySel.value === 'new') {
        const dName = newDayInp.value.trim() || 'Новий день';
        day = { id: uid(), name: dName, date: '', tasks: [], deadlines: [] };
        week.days.push(day);
    } else {
        day = week.days.find(d => d.id === daySel.value);
    }

    /* ── add task ── */
    day.tasks.push({ id: uid(), text: taskText, done: false });

    /* ── add deadline if provided ── */
    const deadText = deadInp.value.trim();
    if (deadText) {
        day.deadlines.push({ text: deadText, type: 'yellow' });
    }

    /* ── reset inputs ── */
    taskInp.value = '';
    deadInp.value = '';
    newWeekInp.value = '';
    newDayInp.value = '';

    saveState();
    render();

    // scroll to the week
    setTimeout(() => {
        const el = document.querySelector(`[data-id="${week.id}"]`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

function flash(el) {
    el.style.borderColor = 'var(--red)';
    el.style.animation = 'none';
    el.offsetHeight; // reflow
    el.style.animation = '';
    el.focus();
    setTimeout(() => el.style.borderColor = '', 800);
}

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
// hide new-week / new-day fields initially
document.getElementById('newWeekFields').style.display = 'none';
document.getElementById('newDayFields').style.display  = 'none';

render();