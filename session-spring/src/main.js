import './style.scss';

// НОВЫЙ УПРОЩЕННЫЙ ПЛАН - ПО ОДНОЙ ЗАДАЧЕ НА ДЕНЬ
const INITIAL_DAYS = [
  // ========== НЕДЕЛЯ 1: 07.04 - 12.04 ==========
  { id: '2026-04-07', name: 'ВТ 07.04 (4-5 ч)', date: '2026-04-07', week: 1, tasks: [
    { id: 't1', text: 'ООП Лаб 3', status: 'not-started', progress: 0 },
  ]},
  { id: '2026-04-08', name: 'СР 08.04 (4-5 ч)', date: '2026-04-08', week: 1, tasks: [
    { id: 't2', text: 'Дискретна мат Лаб 2', status: 'not-started', progress: 0 },
  ]},
  { id: '2026-04-09', name: 'ЧТ 09.04 (4-5 ч)', date: '2026-04-09', week: 1, tasks: [
    { id: 't3', text: 'Вища мат Лаб 2', status: 'not-started', progress: 0 },
  ]},
  { id: '2026-04-10', name: 'ПТ 10.04 (4-5 ч)', date: '2026-04-10', week: 1, tasks: [
    { id: 't4', text: 'Soft Skills Лаб 2', status: 'not-started', progress: 0 },
  ]},
  { id: '2026-04-11', name: 'СБ 11.04 (4-5 ч)', date: '2026-04-11', week: 1, tasks: [
    { id: 't5', text: 'ООП Лаб 4', status: 'not-started', progress: 0 },
  ]},
  { id: '2026-04-12', name: 'ВС 12.04 (4-5 ч)', date: '2026-04-12', week: 1, tasks: [
    { id: 't6', text: 'Архітектура Лаб 4', status: 'not-started', progress: 0 },
  ]},

  // ========== НЕДЕЛЯ 2: 13.04 - 19.04 ==========
  { id: '2026-04-13', name: 'ПН 13.04 (4-5 ч)', date: '2026-04-13', week: 2, tasks: [
    { id: 't7', text: '🇬🇧 Підготовка доповіді', status: 'not-started', progress: 0 },
  ]},
  { id: '2026-04-14', name: 'ВТ 14.04 (4-5 ч)', date: '2026-04-14', week: 2, tasks: [
    { id: 't8', text: '🔴 Англійська доповідь', status: 'not-started', progress: 0 },
  ]},
  { id: '2026-04-15', name: 'СР 15.04 (4-5 ч)', date: '2026-04-15', week: 2, tasks: [
    { id: 't9', text: 'Дискретна мат Лаб 3', status: 'not-started', progress: 0 },
  ]},
  { id: '2026-04-16', name: 'ЧТ 16.04 (4-5 ч)', date: '2026-04-16', week: 2, tasks: [
    { id: 't10', text: 'Вища мат Лаб 3', status: 'not-started', progress: 0 },
  ]},
  { id: '2026-04-17', name: 'ПТ 17.04 (4-5 ч)', date: '2026-04-17', week: 2, tasks: [
    { id: 't11', text: 'Soft Skills Лаб 3', status: 'not-started', progress: 0 },
  ]},
  { id: '2026-04-18', name: 'СБ 18.04 (4-5 ч)', date: '2026-04-18', week: 2, tasks: [
    { id: 't12', text: 'ООП Лаб 5', status: 'not-started', progress: 0 },
  ]},
  { id: '2026-04-19', name: 'ВС 19.04 (4-5 ч)', date: '2026-04-19', week: 2, tasks: [
    { id: 't13', text: '📊 Підготовка (мат доповідь)', status: 'not-started', progress: 0 },
  ]},

  // ========== НЕДЕЛЯ 3: 20.04 - 26.04 ==========
  { id: '2026-04-20', name: 'ПН 20.04 (4-5 ч)', date: '2026-04-20', week: 3, tasks: [
    { id: 't14', text: '📊 Підготовка (мат доповідь)', status: 'not-started', progress: 0 },
  ]},
  { id: '2026-04-21', name: 'ВТ 21.04 (4-5 ч)', date: '2026-04-21', week: 3, tasks: [
    { id: 't15', text: '🔴 Вища мат доповідь', status: 'not-started', progress: 0 },
  ]},
  { id: '2026-04-22', name: 'СР 22.04 (4-5 ч)', date: '2026-04-22', week: 3, tasks: [
    { id: 't16', text: 'Дискретна мат Лаб 4', status: 'not-started', progress: 0 },
  ]},
  { id: '2026-04-23', name: 'ЧТ 23.04 (4-5 ч)', date: '2026-04-23', week: 3, tasks: [
    { id: 't17', text: 'Вища мат Лаб 4', status: 'not-started', progress: 0 },
  ]},
  { id: '2026-04-24', name: 'ПТ 24.04 (4-5 ч)', date: '2026-04-24', week: 3, tasks: [
    { id: 't18', text: 'Soft Skills Лаб 4', status: 'not-started', progress: 0 },
  ]},
  { id: '2026-04-25', name: 'СБ 25.04 (4-5 ч)', date: '2026-04-25', week: 3, tasks: [
    { id: 't19', text: 'ООП Лаб 6', status: 'not-started', progress: 0 },
  ]},
  { id: '2026-04-26', name: 'ВС 26.04 (4-5 ч)', date: '2026-04-26', week: 3, tasks: [
    { id: 't20', text: 'Архітектура Лаб 5', status: 'not-started', progress: 0 },
  ]},

  // ========== НЕДЕЛЯ 4: 27.04 - 29.04 ==========
  { id: '2026-04-27', name: 'ПН 27.04 (4-5 ч)', date: '2026-04-27', week: 4, tasks: [
    { id: 't21', text: 'Soft Skills Самостійна 1', status: 'not-started', progress: 0 },
  ]},
  { id: '2026-04-28', name: 'ВТ 28.04 (4-5 ч)', date: '2026-04-28', week: 4, tasks: [
    { id: 't22', text: 'ООП Лаб 7', status: 'not-started', progress: 0 },
  ]},
  { id: '2026-04-29', name: 'СР 29.04 (4-5 ч)', date: '2026-04-29', week: 4, tasks: [
    { id: 't23', text: 'Soft Skills Самостійна 2', status: 'not-started', progress: 0 },
  ]},

  // ========== СПЕЦІАЛЬНІ ДАТИ ==========
  { id: '2026-05-03', name: 'ВС 03.05 (4-5 ч)', date: '2026-05-03', week: 5, tasks: [
    { id: 't24', text: 'Архітектура Лаб 6', status: 'not-started', progress: 0 },
  ]},
  { id: '2026-05-10', name: 'ВС 10.05 (4-5 ч)', date: '2026-05-10', week: 5, tasks: [
    { id: 't25', text: 'Архітектура Лаб 7', status: 'not-started', progress: 0 },
  ]},
];

const SUBJECTS = [
  'ООП',
  'Дискретна мат',
  'Вища мат',
  'Soft Skills',
  'Архітектура',
  'Англійська'
];

// State
let state = {
  days: [],
  currentWeek: 1,
  filteredDays: [],
  selectedDayId: null
};

// Runtime-only countdown state for Done button
const doneCountdowns = {};
const doneCountdownTimers = {};

function countdownKey(dayId, taskId) {
  return `${dayId}::${taskId}`;
}

function clearDoneCountdown(dayId, taskId) {
  const key = countdownKey(dayId, taskId);
  if (doneCountdownTimers[key]) {
    clearInterval(doneCountdownTimers[key]);
    delete doneCountdownTimers[key];
  }
  delete doneCountdowns[key];
}

// Initialize
function init() {
  loadFromLocalStorage();
  filterByWeek(1);
  updateStats();
  setupEventListeners();
  renderWeekSelector();
}

// Local Storage
function loadFromLocalStorage() {
  const saved = localStorage.getItem('plannerData_v2');
  if (saved) {
    state.days = JSON.parse(saved);
  } else {
    state.days = JSON.parse(JSON.stringify(INITIAL_DAYS));
    saveToLocalStorage();
  }
}

function saveToLocalStorage() {
  localStorage.setItem('plannerData_v2', JSON.stringify(state.days));
}

function getMaxWeek() {
  return Math.max(...state.days.map(d => d.week || 1), 1);
}

function updateNextWeekButtonState() {
  const btn = document.getElementById('nextWeekBtn');
  if (!btn) return;

  const maxWeek = getMaxWeek();
  const hasNext = state.currentWeek < maxWeek;
  btn.disabled = !hasNext;
  btn.textContent = hasNext
    ? `Неделя ${state.currentWeek + 1}`
    : `Неделя ${state.currentWeek}`;
}

function goToNextWeek() {
  const maxWeek = getMaxWeek();
  if (state.currentWeek >= maxWeek) return;
  filterByWeek(state.currentWeek + 1);
}

// Filter by week
function filterByWeek(week) {
  state.currentWeek = week;
  state.filteredDays = state.days.filter(d => d.week === week);

  // Refresh selector so active button reflects the current week.
  renderWeekSelector();
  
  // Меняем палитру в зависимости от недели
  const root = document.documentElement;
  const paletteIndex = (week - 1) % 5; // 5 разных палитр
  const palettes = [
    { // Неделя 1 (классическая зелёная)
      primary: '#1DB954',
      secondary: '#2ECC71',
      dark: '#0B0F0C',
      light: '#E6F4EA'
    },
    { // Неделя 2 (более светлая)
      primary: '#27AE60',
      secondary: '#2ECC71',
      dark: '#1a2a22',
      light: '#E6F4EA'
    },
    { // Неделя 3 
      primary: '#16A34A',
      secondary: '#22C55E',
      dark: '#0F1A14',
      light: '#F0FDF4'
    },
    { // Неделя 4
      primary: '#059669',
      secondary: '#10B981',
      dark: '#0D1117',
      light: '#F0FDF4'
    },
    { // Неделя 5
      primary: '#047857',
      secondary: '#14B8A6',
      dark: '#0A1628',
      light: '#F0FDF4'
    }
  ];
  
  const palette = palettes[paletteIndex];
  document.body.style.setProperty('--primary', palette.primary);
  document.body.style.setProperty('--secondary', palette.secondary);
  document.body.style.setProperty('--dark', palette.dark);
  document.body.style.setProperty('--light', palette.light);
  
  // Добавляем визуальный эффект переключения
  const container = document.getElementById('daysContainer');
  container.style.opacity = '0';
  container.style.transform = 'translateY(20px)';
  
  setTimeout(() => {
    renderDays();
    container.style.opacity = '1';
    container.style.transform = 'translateY(0)';
  }, 300);
  
  updateStats();
  updateNextWeekButtonState();
}

// Показать модальное окно с задачами
function showTasksModal(filterType) {
  let modal = document.getElementById('tasksModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'tasksModal';
    modal.className = 'modal';
    document.body.appendChild(modal);
  }

  let allTasks = [];
  state.days.forEach(day => {
    day.tasks.forEach(task => {
      allTasks.push({ ...task, dayId: day.id, dayName: day.name });
    });
  });

  let filteredTasks = allTasks;
  let title = '';

  switch(filterType) {
    case 'all':
      title = `Всего задач: ${allTasks.length}`;
      break;
    case 'done':
      filteredTasks = allTasks.filter(t => t.status === 'done');
      title = `✅ Выполнено: ${filteredTasks.length}`;
      break;
    case 'in-progress':
      filteredTasks = allTasks.filter(t => t.status === 'in-progress');
      title = `⏳ В работе: ${filteredTasks.length}`;
      break;
    case 'not-started':
      filteredTasks = allTasks.filter(t => t.status === 'not-started');
      title = `❌ Не начато: ${filteredTasks.length}`;
      break;
  }

  let html = `
    <div class="modal-content">
      <div class="modal-header">
        <h2>${title}</h2>
        <button class="modal-close" onclick="closeTasksModal()">✕</button>
      </div>
      <div class="modal-body">
  `;

  if (filteredTasks.length === 0) {
    html += '<p class="empty-tasks">Нет задач</p>';
  } else {
    filteredTasks.forEach(task => {
      const progressColor = task.status === 'done' ? '#4caf50' : 
                           task.status === 'in-progress' ? '#ff9800' : '#f44336';
      
      if (filterType === 'in-progress') {
        // Горизонтальный ползунок для задач в работе (как в карточках)
        html += `
          <div class="task-modal-item">
            <div class="task-modal-info">
              <div class="task-modal-text">${task.text}</div>
              <div class="task-modal-day">${task.dayName}</div>
            </div>
            <div class="progress-bar-modal">
              <div class="progress-bar">
                <div class="progress-fill" style="width: ${task.progress}%; background: ${progressColor}"></div>
                <div class="progress-overlay-text">${task.progress}%</div>
              </div>
            </div>
          </div>
        `;
      } else {
        html += `
          <div class="task-modal-item">
            <div class="task-modal-text">${task.text}</div>
            <div class="task-modal-day">${task.dayName}</div>
          </div>
        `;
      }
    });
  }

  html += `
      </div>
      ${filterType === 'all' ? `
      <div class="modal-footer">
        <button class="btn btn-primary" onclick="openTaskCreatorFromModal()">Сделать задачу</button>
      </div>
      ` : ''}
    </div>
  `;

  modal.innerHTML = html;
  modal.style.display = 'flex';
}

function closeTasksModal() {
  const modal = document.getElementById('tasksModal');
  if (modal) modal.style.display = 'none';
}

function openTaskCreatorFromModal() {
  closeTasksModal();
  openTaskCreateModal();
}

function openTaskCreatorForDay(dayId) {
  state.selectedDayId = dayId;
  openTaskCreateModal(dayId);
}

function openTaskCreateModal(dayId = null) {
  let modal = document.getElementById('taskCreateModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'taskCreateModal';
    modal.className = 'modal';
    document.body.appendChild(modal);
  }

  const selectedDayId = dayId || state.selectedDayId || '';
  const dayObj = selectedDayId ? state.days.find((d) => d.id === selectedDayId) : null;
  const dayLabel = dayObj ? `Выбран день: ${dayObj.name}` : 'Выбран день: по дате дедлайна';

  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const hh = String(now.getHours()).padStart(2, '0');
  const mi = String(now.getMinutes()).padStart(2, '0');
  const defaultDeadlineDate = selectedDayId || `${yyyy}-${mm}-${dd}`;
  const defaultDeadlineTime = `${hh}:${mi}`;

  modal.innerHTML = `
    <div class="modal-content task-create-modal-content">
      <div class="modal-header">
        <h2>✅ Сделать задачу</h2>
        <button class="modal-close" onclick="closeTaskCreateModal()">✕</button>
      </div>
      <div class="modal-body">
        <p class="task-target-day" id="selectedDayLabel">${dayLabel}</p>
        <input type="hidden" id="taskTargetDay" value="${selectedDayId}">
        <div class="task-creator-form">
          <div class="form-group">
            <label for="taskDescription">Описание:</label>
            <input type="text" id="taskDescription" placeholder="Например: Лаба 3, подготовка отчета">
          </div>
          <div class="form-group">
            <label for="taskDeadlineDate">Дедлайн (дата):</label>
            <input type="date" id="taskDeadlineDate" value="${defaultDeadlineDate}">
          </div>
          <div class="form-group">
            <label for="taskDeadlineTime">Время дедлайна:</label>
            <input type="time" id="taskDeadlineTime" value="${defaultDeadlineTime}">
          </div>
          <div class="form-group">
            <label for="taskHours">Время на работу (часы):</label>
            <div class="number-field">
              <input type="number" id="taskHours" min="1" max="12" step="1" value="2">
              <div class="number-arrows">
                <button type="button" class="arrow-btn" onclick="adjustTaskHours(1)" title="Больше">▲</button>
                <button type="button" class="arrow-btn" onclick="adjustTaskHours(-1)" title="Меньше">▼</button>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="taskSubject">Предмет:</label>
            <select id="taskSubject"></select>
          </div>
          <button id="createTaskBtn" class="btn btn-primary" onclick="createTaskFromForm()">Сделать задачу</button>
        </div>
      </div>
    </div>
  `;

  initTaskCreatorForm();
  modal.style.display = 'flex';
  const descriptionInput = document.getElementById('taskDescription');
  if (descriptionInput) descriptionInput.focus();
}

function closeTaskCreateModal() {
  const modal = document.getElementById('taskCreateModal');
  if (modal) modal.style.display = 'none';
}

// Обработчик для закрытия модали при клике вне контента
document.addEventListener('click', (e) => {
  const modal = document.getElementById('tasksModal');
  if (modal && e.target === modal) {
    modal.style.display = 'none';
  }

  const taskCreateModal = document.getElementById('taskCreateModal');
  if (taskCreateModal && e.target === taskCreateModal) {
    taskCreateModal.style.display = 'none';
  }
});

// Render week header
function renderWeekHeader() {
  let header = document.getElementById('weekHeader');
  if (!header) {
    const mainContent = document.querySelector('.main-content');
    header = document.createElement('div');
    header.id = 'weekHeader';
    header.className = 'week-header';
    mainContent.insertBefore(header, mainContent.firstChild);
  }

  const week = state.currentWeek;
  const weekDays = state.filteredDays;
  
  if (weekDays.length === 0) {
    header.innerHTML = `<h2>📭 Неделя ${week} - пусто</h2>`;
    return;
  }

  // Определяем дату начала и конца недели
  const firstDay = new Date(weekDays[0].date + 'T00:00:00');
  const lastDay = new Date(weekDays[weekDays.length - 1].date + 'T00:00:00');
  
  const startDate = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
  }).format(firstDay);
  
  const endDate = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(lastDay);

  header.innerHTML = `
    <div class="week-header-content">
      <h2 class="week-number">📅 Неделя <span class="number">${week}</span></h2>
      <p class="week-dates">${startDate} — ${endDate}</p>
      <div class="week-counter">${weekDays.length} дней / ${state.filteredDays.reduce((sum, day) => sum + day.tasks.length, 0)} задач</div>
    </div>
  `;
}

// Render week selector
function renderWeekSelector() {
  let selector = document.getElementById('weekSelector');
  if (!selector) {
    const header = document.querySelector('.header');
    const statsDiv = header.querySelector('.stats');
    selector = document.createElement('div');
    selector.id = 'weekSelector';
    selector.className = 'week-selector';
    header.insertBefore(selector, statsDiv);
  }

  selector.innerHTML = '';
  
  // Определяем максимальную неделю из данных
  const maxWeek = getMaxWeek();
  
  // Создаём кнопки только для существующих недель
  for (let i = 1; i <= maxWeek; i++) {
    const btn = document.createElement('button');
    btn.className = `week-btn ${state.currentWeek === i ? 'active' : ''}`;
    btn.textContent = `Неделя ${i}`;
    btn.onclick = () => filterByWeek(i);
    selector.appendChild(btn);
  }
}

// Render days
function renderDays() {
  const container = document.getElementById('daysContainer');
  container.innerHTML = '';

  if (state.filteredDays.length === 0) {
    container.innerHTML = '<div class="empty-state"><p>📭 Нет дней. Добавьте первый день!</p></div>';
    return;
  }

  state.filteredDays.forEach(day => {
    const dayCard = createDayCard(day);
    container.appendChild(dayCard);
  });
  
  // Добавляем заголовок недели
  renderWeekHeader();
}

function createDayCard(day) {
  const card = document.createElement('div');
  card.className = 'day-card';

  const header = document.createElement('div');
  header.className = 'day-header';
  header.innerHTML = `
    <div>
      <div class="day-title">${day.name}</div>
      <div class="day-date">${formatDate(day.date)}</div>
    </div>
    <div class="day-actions">
      <button class="btn-delete-day" title="Удалить день" onclick="deleteDay('${day.id}')">🗑️ Удалить</button>
    </div>
  `;

  const tasksContainer = document.createElement('div');
  tasksContainer.className = 'tasks-list';

  day.tasks.forEach(task => {
    const taskElement = createTaskElement(day.id, task);
    tasksContainer.appendChild(taskElement);
  });

  // Переход к отдельному окну создания задачи
  const addTaskCta = document.createElement('div');
  addTaskCta.className = 'day-add-task-cta';
  addTaskCta.innerHTML = `
    <button class="btn btn-add-task" onclick="openTaskCreatorForDay('${day.id}')" title="Открыть окно добавления задачи">➕ Добавить задачу</button>
  `;

  card.appendChild(header);
  card.appendChild(tasksContainer);
  card.appendChild(addTaskCta);

  return card;
}

function createTaskElement(dayId, task) {
  const item = document.createElement('div');
  item.className = `task-item ${task.status}`;

  const progress = task.progress || 0;
  const progressColor = task.status === 'done' ? '#4caf50' : 
                        task.status === 'in-progress' ? '#ff9800' : '#f44336';

  const key = countdownKey(dayId, task.id);
  const countdown = doneCountdowns[key];
  const doneLabel = typeof countdown === 'number' ? `⏳ ${countdown}` : '✅ Сделано';

  item.innerHTML = `
    <div class="task-content">
      <div class="task-text">${task.text}</div>
      <div class="task-controls">
        <div class="progress-layout">
          <button class="btn-not-started-left" 
                  onclick="updateTaskStatus('${dayId}', '${task.id}', 'not-started')"
                  title="Не начато">
            ❌ Не начато
          </button>
          <div class="progress-center">
            <div class="progress-bar-wrapper" onclick="setProgress(event, '${dayId}', '${task.id}')">
              <div class="progress-bar">
                <div class="progress-fill" style="width: ${progress}%; background: ${progressColor}"></div>
                <div class="progress-overlay-text">${progress}%</div>
              </div>
            </div>
          </div>
          <button class="btn-done-right" 
                  onclick="startDoneTimer('${dayId}', '${task.id}')"
                  title="Отметить как сделано">
            ${doneLabel}
          </button>
        </div>
        <button class="btn-delete-task" onclick="deleteTask('${dayId}', '${task.id}')" title="Удалить задачу">🗑️</button>
      </div>
    </div>
  `;

  return item;
}

function startDoneTimer(dayId, taskId) {
  const key = countdownKey(dayId, taskId);
  if (doneCountdownTimers[key]) return;

  updateTaskStatus(dayId, taskId, 'done');

  doneCountdowns[key] = 3;
  renderDays();

  doneCountdownTimers[key] = setInterval(() => {
    doneCountdowns[key] -= 1;

    if (doneCountdowns[key] > 0) {
      renderDays();
      return;
    }

    clearDoneCountdown(dayId, taskId);
    renderDays();

    const shouldDelete = confirm('Хотите ли вы удалить задание?');
    if (shouldDelete) {
      deleteTaskWithCleanup(dayId, taskId, false);
    }
  }, 1000);
}

// Task functions
function updateTaskStatus(dayId, taskId, status) {
  const day = state.days.find(d => d.id === dayId);
  if (!day) return;

  const task = day.tasks.find(t => t.id === taskId);
  if (!task) return;

  task.status = status;

  if (status === 'done') {
    task.progress = 100;
    playSuccessSound();
  } else if (status === 'in-progress' && task.progress === 0) {
    task.progress = 50;
    playClickSound();
  } else if (status === 'not-started') {
    task.progress = 0;
    playClickSound();
  }

  saveToLocalStorage();
  renderDays();
  updateStats();
}

function setProgress(event, dayId, taskId) {
  const day = state.days.find(d => d.id === dayId);
  if (!day) return;

  const task = day.tasks.find(t => t.id === taskId);
  if (!task) return;

  const bar = event.currentTarget;
  const rect = bar.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const percentage = Math.max(0, Math.min(100, Math.round((x / rect.width) * 100 / 5) * 5));

  task.progress = percentage;

  if (percentage === 0) {
    task.status = 'not-started';
  } else if (percentage === 100) {
    task.status = 'done';
  } else {
    task.status = 'in-progress';
  }

  saveToLocalStorage();
  renderDays();
  updateStats();
}

function deleteTask(dayId, taskId) {
  if (!confirm('❌ Удалить эту задачу?')) return;

  deleteTaskWithCleanup(dayId, taskId, true);
}

function deleteTaskWithCleanup(dayId, taskId, askWhenDayEmpty) {
  clearDoneCountdown(dayId, taskId);

  const day = state.days.find(d => d.id === dayId);
  if (!day) return;

  day.tasks = day.tasks.filter(t => t.id !== taskId);

  if (day.tasks.length === 0) {
    const shouldDeleteDay = askWhenDayEmpty
      ? confirm('В этом дне не осталось задач. Удалить день?')
      : true;

    if (shouldDeleteDay) {
      state.days = state.days.filter(d => d.id !== dayId);
    }
  }

  saveToLocalStorage();
  filterByWeek(state.currentWeek);
  updateStats();
}

// Day functions
function deleteDay(dayId) {
  if (!confirm('❌ Удалить этот день и все его задачи?')) return;

  state.days = state.days.filter(d => d.id !== dayId);

  saveToLocalStorage();
  filterByWeek(state.currentWeek);
  updateStats();
}

function createTaskFromForm() {
  const descriptionInput = document.getElementById('taskDescription');
  const targetDayInput = document.getElementById('taskTargetDay');
  const deadlineDateInput = document.getElementById('taskDeadlineDate');
  const deadlineTimeInput = document.getElementById('taskDeadlineTime');
  const hoursInput = document.getElementById('taskHours');
  const subjectInput = document.getElementById('taskSubject');

  const description = (descriptionInput?.value || '').trim();
  const deadlineDate = deadlineDateInput?.value;
  const deadlineTime = deadlineTimeInput?.value;
  const hours = Number(hoursInput?.value || 0);
  const subject = subjectInput?.value;
  const deadline = (deadlineDate && deadlineTime) ? `${deadlineDate}T${deadlineTime}` : '';

  if (!description || !deadline || !hours || !subject) {
    alert('Заполните: описание, дату дедлайна, время дедлайна, время и предмет.');
    return;
  }

  const targetDate = (targetDayInput?.value || '').trim() || deadline.slice(0, 10);

  let targetDay = state.days.find((d) => d.id === targetDate);
  if (!targetDay) {
    const dateObj = new Date(targetDate + 'T00:00:00');
    const weekdayShort = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'][dateObj.getDay()];
    const dd = String(dateObj.getDate()).padStart(2, '0');
    const mm = String(dateObj.getMonth() + 1).padStart(2, '0');

    targetDay = {
      id: targetDate,
      name: `${weekdayShort} ${dd}.${mm} (4-5 ч)`,
      date: targetDate,
      week: state.currentWeek,
      tasks: []
    };
    state.days.push(targetDay);
    state.days.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  const deadlineDateObj = new Date(deadline);
  const d = String(deadlineDateObj.getDate()).padStart(2, '0');
  const m = String(deadlineDateObj.getMonth() + 1).padStart(2, '0');
  const hh = String(deadlineDateObj.getHours()).padStart(2, '0');
  const min = String(deadlineDateObj.getMinutes()).padStart(2, '0');

  const newTask = {
    id: 'task-' + Date.now(),
    text: `${subject} | ${description} | дедлайн ${d}.${m} ${hh}:${min} | ${hours}ч`,
    status: 'not-started',
    progress: 0
  };

  targetDay.tasks.push(newTask);

  saveToLocalStorage();
  filterByWeek(state.currentWeek);
  updateStats();

  if (descriptionInput) descriptionInput.value = '';
  if (targetDayInput) targetDayInput.value = '';
  const selectedDayLabel = document.getElementById('selectedDayLabel');
  if (selectedDayLabel) selectedDayLabel.textContent = 'Выбран день: по дате дедлайна';
  state.selectedDayId = null;
  if (deadlineDateInput) deadlineDateInput.value = '';
  if (deadlineTimeInput) deadlineTimeInput.value = '';
  if (hoursInput) hoursInput.value = '2';
  if (subjectInput) subjectInput.selectedIndex = 0;

  closeTaskCreateModal();
}

function adjustTaskHours(delta) {
  const hoursInput = document.getElementById('taskHours');
  if (!hoursInput) return;
  const current = Number(hoursInput.value || 2);
  const next = Math.max(1, Math.min(12, current + delta));
  hoursInput.value = String(next);
}

function initTaskCreatorForm() {
  const subjectSelect = document.getElementById('taskSubject');
  if (!subjectSelect) return;
  subjectSelect.innerHTML = SUBJECTS.map((s) => `<option value="${s}">${s}</option>`).join('');

  // Дедлайн по умолчанию: сегодня + текущее время
  const deadlineDateInput = document.getElementById('taskDeadlineDate');
  const deadlineTimeInput = document.getElementById('taskDeadlineTime');
  if ((deadlineDateInput && !deadlineDateInput.value) || (deadlineTimeInput && !deadlineTimeInput.value)) {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const hh = String(now.getHours()).padStart(2, '0');
    const mi = String(now.getMinutes()).padStart(2, '0');
    if (deadlineDateInput && !deadlineDateInput.value) {
      deadlineDateInput.value = `${yyyy}-${mm}-${dd}`;
    }
    if (deadlineTimeInput && !deadlineTimeInput.value) {
      deadlineTimeInput.value = `${hh}:${mi}`;
    }
  }
}

// Stats update
function updateStats() {
  let totalTasks = 0;
  let completedTasks = 0;
  let inProgressTasks = 0;
  let notStartedTasks = 0;

  state.days.forEach(day => {
    day.tasks.forEach(task => {
      totalTasks++;
      if (task.status === 'done') completedTasks++;
      else if (task.status === 'in-progress') inProgressTasks++;
      else notStartedTasks++;
    });
  });

  document.getElementById('totalTasks').textContent = totalTasks;
  document.getElementById('completedTasks').textContent = completedTasks;
  document.getElementById('inProgressTasks').textContent = inProgressTasks;
  document.getElementById('notStartedTasks').textContent = notStartedTasks;
  
  // Добавляем обработчики клика
  document.getElementById('totalTasksItem').onclick = () => showTasksModal('all');
  document.getElementById('completedTasksItem').onclick = () => showTasksModal('done');
  document.getElementById('inProgressTasksItem').onclick = () => showTasksModal('in-progress');
  document.getElementById('notStartedTasksItem').onclick = () => showTasksModal('not-started');
}

// Utility functions
function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  return new Intl.DateTimeFormat('ru-RU', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

// Sound feedback
function playClickSound() {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gain.gain.setValueAtTime(0.3, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  } catch (e) {
    // Audio context not supported
  }
}

function playSuccessSound() {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const now = audioContext.currentTime;
    
    const frequencies = [800, 1000, 1200];
    frequencies.forEach((freq, index) => {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      
      oscillator.connect(gain);
      gain.connect(audioContext.destination);
      
      oscillator.frequency.value = freq;
      oscillator.type = 'sine';
      
      const startTime = now + (index * 0.05);
      gain.gain.setValueAtTime(0.3, startTime);
      gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.1);
      
      oscillator.start(startTime);
      oscillator.stop(startTime + 0.1);
    });
  } catch (e) {
    // Audio context not supported
  }
}

// Event listeners
function setupEventListeners() {
  const nextWeekBtn = document.getElementById('nextWeekBtn');
  if (nextWeekBtn) {
    nextWeekBtn.addEventListener('click', goToNextWeek);
  }

}

// Make functions global
window.updateTaskStatus = updateTaskStatus;
window.setProgress = setProgress;
window.deleteTask = deleteTask;
window.deleteDay = deleteDay;
window.filterByWeek = filterByWeek;
window.goToNextWeek = goToNextWeek;
window.showTasksModal = showTasksModal;
window.closeTasksModal = closeTasksModal;
window.openTaskCreatorFromModal = openTaskCreatorFromModal;
window.openTaskCreatorForDay = openTaskCreatorForDay;
window.closeTaskCreateModal = closeTaskCreateModal;
window.adjustTaskHours = adjustTaskHours;
window.createTaskFromForm = createTaskFromForm;
window.startDoneTimer = startDoneTimer;

// Start app
initTaskCreatorForm();
init();

