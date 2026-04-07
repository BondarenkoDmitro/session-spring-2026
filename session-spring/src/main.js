import './style.css';

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

// State
let state = {
  days: [],
  currentWeek: 1,
  filteredDays: []
};

// Initialize
function init() {
  // Создаём main-content контейнер если его нет
  let mainContent = document.getElementById('mainContent');
  if (!mainContent) {
    const container = document.querySelector('.container');
    mainContent = document.createElement('div');
    mainContent.id = 'mainContent';
    mainContent.className = 'main-content';
    container.appendChild(mainContent);
  }
  
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

// Filter by week
function filterByWeek(week) {
  state.currentWeek = week;
  state.filteredDays = state.days.filter(d => d.week === week);
  
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
}

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
  const maxWeek = Math.max(...state.days.map(d => d.week || 1), 1);
  
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

  // Add task form
  const addTaskForm = document.createElement('div');
  addTaskForm.className = 'add-task-form';
  addTaskForm.innerHTML = `
    <div class="add-task-input-group">
      <input type="text" placeholder="Описание новой задачи" class="new-task-input" id="input-${day.id}">
      <button class="btn btn-add-task" onclick="addTask('${day.id}')" title="Добавить задачу">➕ Добавить</button>
    </div>
  `;

  card.appendChild(header);
  card.appendChild(tasksContainer);
  card.appendChild(addTaskForm);

  return card;
}

function createTaskElement(dayId, task) {
  const item = document.createElement('div');
  item.className = `task-item ${task.status}`;

  const progress = task.progress || 0;
  const progressColor = task.status === 'done' ? '#4caf50' : 
                        task.status === 'in-progress' ? '#ff9800' : '#f44336';

  item.innerHTML = `
    <div class="task-content">
      <div class="task-text">${task.text}</div>
      <div class="task-controls">
        <div class="task-status-buttons">
          <button class="btn-status ${task.status === 'done' ? 'done' : ''}" 
                  onclick="updateTaskStatus('${dayId}', '${task.id}', 'done')"
                  title="Отметить как сделано">
            ✅ Сделано
          </button>
          <button class="btn-status ${task.status === 'in-progress' ? 'in-progress' : ''}" 
                  onclick="updateTaskStatus('${dayId}', '${task.id}', 'in-progress')"
                  title="В работе">
            ⏳ В работе
          </button>
          <button class="btn-status ${task.status === 'not-started' ? 'not-started' : ''}" 
                  onclick="updateTaskStatus('${dayId}', '${task.id}', 'not-started')"
                  title="Не начато">
            ❌ Не начато
          </button>
        </div>
        <div class="progress-container">
          <div class="progress-label">Прогресс: ${progress}%</div>
          <div class="progress-bar" onclick="setProgress(event, '${dayId}', '${task.id}')">
            <div class="progress-fill" style="width: ${progress}%; background: ${progressColor}">
              ${progress > 10 ? progress + '%' : ''}
            </div>
          </div>
        </div>
        <button class="btn-delete-task" onclick="deleteTask('${dayId}', '${task.id}')" title="Удалить задачу">🗑️</button>
      </div>
    </div>
  `;

  return item;
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

function addTask(dayId) {
  const day = state.days.find(d => d.id === dayId);
  if (!day) return;

  const input = document.getElementById(`input-${dayId}`);
  const text = input.value.trim();

  if (!text) {
    alert('📝 Введите описание задачи!');
    return;
  }

  const newTask = {
    id: 'task-' + Date.now(),
    text: text,
    status: 'not-started',
    progress: 0
  };

  day.tasks.push(newTask);
  input.value = '';

  saveToLocalStorage();
  renderDays();
  updateStats();
}

function deleteTask(dayId, taskId) {
  if (!confirm('❌ Удалить эту задачу?')) return;

  const day = state.days.find(d => d.id === dayId);
  if (!day) return;

  day.tasks = day.tasks.filter(t => t.id !== taskId);

  saveToLocalStorage();
  renderDays();
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

function addDay() {
  const dateInput = document.getElementById('dayDate');
  const nameInput = document.getElementById('dayName');

  const date = dateInput.value;
  const name = nameInput.value.trim();

  if (!date || !name) {
    alert('📝 Заполните все поля!');
    return;
  }

  if (state.days.some(d => d.id === date)) {
    alert('⚠️ Этот день уже существует!');
    return;
  }

  const newDay = {
    id: date,
    name: name,
    date: date,
    week: state.currentWeek,
    tasks: []
  };

  state.days.push(newDay);
  state.days.sort((a, b) => new Date(a.date) - new Date(b.date));

  dateInput.value = '';
  nameInput.value = '';

  saveToLocalStorage();
  filterByWeek(state.currentWeek);
  updateStats();
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
  const addDayBtn = document.getElementById('addDayBtn');
  if (addDayBtn) {
    addDayBtn.addEventListener('click', addDay);
    document.getElementById('dayDate').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addDay();
    });
    document.getElementById('dayName').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addDay();
    });
  }
}

// Make functions global
window.updateTaskStatus = updateTaskStatus;
window.setProgress = setProgress;
window.addTask = addTask;
window.deleteTask = deleteTask;
window.deleteDay = deleteDay;
window.addDay = addDay;
window.filterByWeek = filterByWeek;

// Start app
init();

