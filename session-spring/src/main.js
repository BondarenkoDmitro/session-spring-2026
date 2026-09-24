// Начальная дата 1-й недели (Понедельник, 28 сентября 2026 года)
const START_DATE = new Date(2026, 8, 28); // Месяцы в JS 0-indexed (8 = Сентябрь)

const daysMap = {
  "Понедельник": 0,
  "Вторник": 1,
  "Среда": 2,
  "Четверг": 3,
  "Пятница": 4,
  "Суббота": 5,
  "Воскресенье": 6
};

// Функция расчета даты для любой недели и дня
function calculateTaskDate(week, dayName) {
  const dayOffset = daysMap[dayName] !== undefined ? daysMap[dayName] : 0;
  const targetDate = new Date(START_DATE);
  targetDate.setDate(START_DATE.getDate() + (week - 1) * 7 + dayOffset);

  const dd = String(targetDate.getDate()).padStart(2, '0');
  const mm = String(targetDate.getMonth() + 1).padStart(2, '0');
  const yyyy = targetDate.getFullYear();

  return `${dd}.${mm}.${yyyy}`;
}

// План задач под расписание сдачи пар
const defaultTasks = [
  // Неделя 1
  { id: 1, week: 1, day: "Понедельник", subject: "ОПИ", title: "Доделать ОПИ №2 (осталось 10%)", hours: 0.5, completed: true },
  { id: 2, week: 1, day: "Суббота", subject: "Веб-технологии", title: "Сделать Веб №4 и №5 (Дизайн)", hours: 2, completed: false },
  { id: 3, week: 1, day: "Воскресенье", subject: "АиСД", title: "Сделать АиСД №1 (6 часов)", hours: 6, completed: false },

  // Неделя 2
  { id: 4, week: 2, day: "Понедельник", subject: "АиСД", title: "СДАЧА НА 3 ПАРЕ: АиСД №1", hours: 0, completed: false },
  { id: 5, week: 2, day: "Понедельник", subject: "Веб-технологии", title: "СДАЧА НА 5 ПАРЕ: Веб №4, №5", hours: 0, completed: false },
  { id: 6, week: 2, day: "Вторник", subject: "ОПИ", title: "СДАЧА НА ПАРЕ: ОПИ №2", hours: 0, completed: false },
  { id: 7, week: 2, day: "Четверг", subject: "ОПИ", title: "Подготовка ОПИ №3 (Часть 1)", hours: 1.5, completed: false },
  { id: 8, week: 2, day: "Пятница", subject: "ОПИ", title: "Подготовка ОПИ №3 (Часть 2)", hours: 1.5, completed: false },
  { id: 9, week: 2, day: "Суббота", subject: "Веб-технологии", title: "Сделать Веб №6 и №7 (Дизайн)", hours: 2, completed: false },
  { id: 10, week: 2, day: "Воскресенье", subject: "АиСД", title: "Сделать АиСД №2 (6 часов)", hours: 6, completed: false },

  // Неделя 3
  { id: 11, week: 3, day: "Понедельник", subject: "АиСД", title: "СДАЧА НА 3 ПАРЕ: АиСД №2", hours: 0, completed: false },
  { id: 12, week: 3, day: "Понедельник", subject: "Веб-технологии", title: "СДАЧА НА 5 ПАРЕ: Веб №6, №7", hours: 0, completed: false },
  { id: 13, week: 3, day: "Вторник", subject: "ОПИ", title: "СДАЧА НА ПАРЕ: ОПИ №3", hours: 0, completed: false },
  { id: 14, week: 3, day: "Четверг", subject: "ОПИ", title: "Подготовка ОПИ №4", hours: 3, completed: false },
  { id: 15, week: 3, day: "Суббота", subject: "Веб-технологии", title: "Сделать Веб №8 (Финал Веб!)", hours: 1, completed: false },
  { id: 16, week: 3, day: "Воскресенье", subject: "АиСД", title: "Сделать АиСД №3 (6 часов)", hours: 6, completed: false },

  // Неделя 4
  { id: 17, week: 4, day: "Понедельник", subject: "АиСД", title: "СДАЧА НА 3 ПАРЕ: АиСД №3", hours: 0, completed: false },
  { id: 18, week: 4, day: "Понедельник", subject: "Веб-технологии", title: "СДАЧА НА 5 ПАРЕ: Веб №8 (Все Веб закрыты!)", hours: 0, completed: false },
  { id: 19, week: 4, day: "Вторник", subject: "ОПИ", title: "СДАЧА НА ПАРЕ: ОПИ №4", hours: 0, completed: false },
  { id: 20, week: 4, day: "Четверг", subject: "ОПИ", title: "Подготовка ОПИ №5, №6, №7", hours: 6, completed: false },
  { id: 21, week: 4, day: "Воскресенье", subject: "АиСД", title: "Сделать АиСД №4", hours: 6, completed: false },

  // Неделя 5
  { id: 22, week: 5, day: "Понедельник", subject: "АиСД", title: "СДАЧА НА 3 ПАРЕ: АиСД №4", hours: 0, completed: false },
  { id: 23, week: 5, day: "Вторник", subject: "ОПИ", title: "СДАЧА НА ПАРЕ: ОПИ №5, №6, №7 (Все ОПИ закрыты!)", hours: 0, completed: false },
  { id: 24, week: 5, day: "Четверг", subject: "АиСД", title: "Сделать АиСД №5", hours: 6, completed: false },
  { id: 25, week: 5, day: "Суббота", subject: "АиСД", title: "Сделать АиСД №6", hours: 6, completed: false },

  // Неделя 6
  { id: 26, week: 6, day: "Понедельник", subject: "АиСД", title: "СДАЧА НА 3 ПАРЕ: АиСД №5, №6", hours: 0, completed: false },
  { id: 27, week: 6, day: "Четверг", subject: "АиСД", title: "Сделать АиСД №7 и №8 (Финал всех 25 лаб!)", hours: 12, completed: false },

  // Неделя 7
  { id: 28, week: 7, day: "Понедельник", subject: "АиСД", title: "СДАЧА НА 3 ПАРЕ: АиСД №7, №8 (Все 25 лаб сданы!)", hours: 0, completed: false },
  { id: 29, week: 7, day: "Среда", subject: "Курсовой проект", title: "Этап 1: ТЗ, архитектура и структуры данных", hours: 8, completed: false },
  { id: 30, week: 7, day: "Пятница", subject: "Курсовой проект", title: "Этап 2: Программирование алгоритмов и интерфейса", hours: 12, completed: false },

  // Неделя 8
  { id: 31, week: 8, day: "Среда", subject: "Курсовой проект", title: "Этап 3: Пояснительная записка и презентация", hours: 10, completed: false },
  { id: 32, week: 8, day: "Пятница", subject: "Курсовой проект", title: "ФИНАЛ: Защита курсового проекта!", hours: 0, completed: false }
];

// Состояние
let tasks = JSON.parse(localStorage.getItem('study_tasks_data')) || defaultTasks;
let currentWeekFilter = 'all';

// DOM элементы
const tasksList = document.getElementById('tasksList');
const weekBtns = document.querySelectorAll('.week-btn');
const currentViewTitle = document.getElementById('currentViewTitle');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const daysLeftText = document.getElementById('daysLeftText');

const addModal = document.getElementById('addModal');
const toggleAddModalBtn = document.getElementById('toggleAddModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const cancelModalBtn = document.getElementById('cancelModalBtn');
const addTaskForm = document.getElementById('addTaskForm');
const resetDataBtn = document.getElementById('resetDataBtn');

// Старт
document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  updateProgress();
  calculateDaysLeft();
});

function saveData() {
  localStorage.setItem('study_tasks_data', JSON.stringify(tasks));
}

// Расчет дней до 21.12.2026
function calculateDaysLeft() {
  const sessionDate = new Date(2026, 11, 21);
  const today = new Date();
  const diffTime = sessionDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays > 0) {
    daysLeftText.textContent = `До сессии осталось: ${diffDays} дн.`;
  } else {
    daysLeftText.textContent = `Сессия уже началась!`;
  }
}

function updateProgress() {
  const total = tasks.length;
  const completedCount = tasks.filter(t => t.completed).length;
  const percentage = total === 0 ? 0 : Math.round((completedCount / total) * 100);

  progressBar.style.width = `${percentage}%`;
  progressText.textContent = `${completedCount} из ${total} задач выполнено (${percentage}%)`;
}

function getSubjectClass(subject) {
  switch (subject) {
    case 'Веб-технологии': return 'subject-web';
    case 'ОПИ': return 'subject-opi';
    case 'АиСД': return 'subject-aisd';
    case 'Курсовой проект': return 'subject-kp';
    default: return 'subject-other';
  }
}

function renderTasks() {
  tasksList.innerHTML = '';

  const filteredTasks = currentWeekFilter === 'all'
      ? tasks
      : tasks.filter(t => t.week === parseInt(currentWeekFilter));

  if (filteredTasks.length === 0) {
    tasksList.innerHTML = `<div class="empty-state">Нет задач для отображения.</div>`;
    return;
  }

  filteredTasks.forEach(task => {
    const card = document.createElement('div');
    card.className = `task-card ${task.completed ? 'completed' : ''}`;

    const subjClass = getSubjectClass(task.subject);
    const dateFormatted = calculateTaskDate(task.week, task.day);
    const hoursText = task.hours > 0 ? `• ~${task.hours} ч.` : '';

    card.innerHTML = `
      <div class="task-left">
        <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} data-id="${task.id}">
        <div class="task-details">
          <div class="task-header">
            <span class="subject-tag ${subjClass}">${task.subject}</span>
            <span class="day-date-tag">${task.day}, ${dateFormatted}</span>
            ${currentWeekFilter === 'all' ? `<span class="week-tag-badge">Неделя ${task.week}</span>` : ''}
          </div>
          <div class="task-title">${task.title}</div>
          <div class="task-meta">${hoursText}</div>
        </div>
      </div>
      <button class="delete-btn" data-id="${task.id}" title="Удалить задачу">&times;</button>
    `;

    tasksList.appendChild(card);
  });

  // Чекбоксы
  document.querySelectorAll('.task-checkbox').forEach(cb => {
    cb.addEventListener('change', (e) => {
      const id = parseInt(e.target.dataset.id);
      const task = tasks.find(t => t.id === id);
      if (task) {
        task.completed = e.target.checked;
        saveData();
        renderTasks();
        updateProgress();
      }
    });
  });

  // Удаление
  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.dataset.id);
      tasks = tasks.filter(t => t.id !== id);
      saveData();
      renderTasks();
      updateProgress();
    });
  });
}

// Переключение кнопок недель
weekBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    weekBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    currentWeekFilter = btn.dataset.week;
    currentViewTitle.textContent = currentWeekFilter === 'all'
        ? 'Все задачи'
        : `Задачи: Неделя ${currentWeekFilter}`;

    renderTasks();
  });
});

// Модалка
toggleAddModalBtn.addEventListener('click', () => addModal.classList.add('active'));
closeModalBtn.addEventListener('click', () => addModal.classList.remove('active'));
cancelModalBtn.addEventListener('click', () => addModal.classList.remove('active'));

// Добавление задачи
addTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newTask = {
    id: Date.now(),
    week: parseInt(document.getElementById('taskWeek').value),
    day: document.getElementById('taskDay').value,
    subject: document.getElementById('taskSubject').value,
    title: document.getElementById('taskTitle').value,
    hours: parseFloat(document.getElementById('taskHours').value) || 0,
    completed: false
  };

  tasks.push(newTask);
  saveData();
  renderTasks();
  updateProgress();

  addTaskForm.reset();
  addModal.classList.remove('active');
});

// Сброс данных
resetDataBtn.addEventListener('click', () => {
  if (confirm('Сбросить весь план к базовому расписанию сдачами на парах?')) {
    tasks = JSON.parse(JSON.stringify(defaultTasks));
    saveData();
    renderTasks();
    updateProgress();
  }
});