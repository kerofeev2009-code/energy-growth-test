// main.js - Точка входа приложения

import { storage } from '../utils/storage.js';

// Состояние приложения
const state = {
    currentPage: 'home',
    lang: 'ru',
    accessibility: {
        highContrast: false,
        largeFont: false
    }
};

// Тексты интерфейса
const translations = {
    ru: {
        heroTitle: 'Энергия Роста',
        heroSubtitle: 'Образовательная платформа для твоего развития',
        home: 'Главная',
        courses: 'Курсы',
        lessons: 'Уроки',
        achievements: 'Достижения',
        about: 'О проекте',
        welcomeTitle: 'Добро пожаловать!',
        welcomeText: 'Здесь ты найдёшь качественные курсы и уроки, которые помогут тебе расти в разных направлениях: саморазвитие, навыки, знания и энергия.',
        coursesTitle: 'Курсы',
        coursesDesc: 'Структурированные программы обучения с практическими заданиями.',
        lessonsTitle: 'Уроки',
        lessonsDesc: 'Короткие и ёмкие уроки по важным темам. Учись в удобном темпе.',
        achievementsTitle: 'Достижения',
        achievementsDesc: 'Отслеживай свой прогресс и получай награды за выполненные задания.',
        whyUsTitle: 'Почему выбирают нас?',
        whyUsList: [
            'Практические знания, которые можно сразу применять',
            'Удобный формат обучения',
            'Система прогресса и мотивации',
            'Регулярное обновление материалов'
        ],
        footerText: '© 2026 Энергия Роста. Все права защищены.',
        footerNote: 'Сделано с ❤️ для твоего роста',
        startButton: 'Начать',
        accessibility: 'Спец. возможности',
        highContrast: 'Высокий контраст',
        largeFont: 'Крупный шрифт'
    },
    en: {
        heroTitle: 'Energy of Growth',
        heroSubtitle: 'Educational platform for your development',
        home: 'Home',
        courses: 'Courses',
        lessons: 'Lessons',
        achievements: 'Achievements',
        about: 'About',
        welcomeTitle: 'Welcome!',
        welcomeText: 'Here you will find quality courses and lessons that will help you grow in different areas: self-development, skills, knowledge and energy.',
        coursesTitle: 'Courses',
        coursesDesc: 'Structured training programs with practical assignments.',
        lessonsTitle: 'Lessons',
        lessonsDesc: 'Short and concise lessons on important topics. Learn at your own pace.',
        achievementsTitle: 'Achievements',
        achievementsDesc: 'Track your progress and get rewards for completed tasks.',
        whyUsTitle: 'Why choose us?',
        whyUsList: [
            'Practical knowledge that can be applied immediately',
            'Convenient learning format',
            'Progress and motivation system',
            'Regular content updates'
        ],
        footerText: '© 2026 Energy of Growth. All rights reserved.',
        footerNote: 'Made with ❤️ for your growth',
        startButton: 'Start',
        accessibility: 'Accessibility',
        highContrast: 'High contrast',
        largeFont: 'Large font'
    }
};

// Рендер главной страницы
function renderHomePage() {
    const t = translations[state.lang];
    return `
        <div class="section animate-fadeIn">
            <h2>${t.welcomeTitle}</h2>
            <p>${t.welcomeText}</p>
            
            <div class="cards">
                <div class="card">
                    <h3>📚 ${t.coursesTitle}</h3>
                    <p>${t.coursesDesc}</p>
                    <button onclick="app.navigate('courses')">${t.startButton}</button>
                </div>
                <div class="card">
                    <h3>🎯 ${t.lessonsTitle}</h3>
                    <p>${t.lessonsDesc}</p>
                    <button onclick="app.navigate('lessons')">${t.startButton}</button>
                </div>
                <div class="card">
                    <h3>🏆 ${t.achievementsTitle}</h3>
                    <p>${t.achievementsDesc}</p>
                    <button onclick="app.navigate('achievements')">${t.startButton}</button>
                </div>
            </div>
        </div>
        
        <div class="section animate-fadeIn">
            <h2>${t.whyUsTitle}</h2>
            <ul>
                ${t.whyUsList.map(item => `<li>✅ ${item}</li>`).join('')}
            </ul>
        </div>
    `;
}

// Рендер страницы курсов
function renderCoursesPage() {
    const t = translations[state.lang];
    return `
        <div class="section animate-fadeIn">
            <h2>${t.coursesTitle}</h2>
            <p>Здесь будут представлены все доступные курсы платформы.</p>
            <div class="cards">
                <div class="card">
                    <h3>💰 Финансовая Грамотность</h3>
                    <p>Курс финансовой грамотности: 24 темы, тесты, бейджи и отслеживание прогресса.</p>
                    <button onclick="app.navigate('course-detail')">Подробнее</button>
                </div>
            </div>
        </div>
    `;
}

// Рендер страницы достижений
function renderAchievementsPage() {
    const t = translations[state.lang];
    const totalCompleted = storage.getTotalCompleted();
    const totalScore = storage.getTotalScore();
    
    return `
        <div class="section animate-fadeIn">
            <h2>${t.achievementsTitle}</h2>
            <p>Твой прогресс: ${totalCompleted} завершённых уроков | Средний балл: ${totalScore}</p>
            <div class="cards">
                <div class="card">
                    <h3>🌟 Первый шаг</h3>
                    <p>Завершить первый урок</p>
                </div>
                <div class="card">
                    <h3>🔥 Серия побед</h3>
                    <p>Завершить 5 уроков подряд</p>
                </div>
                <div class="card">
                    <h3>🎓 Эксперт</h3>
                    <p>Пройти полный курс</p>
                </div>
            </div>
        </div>
    `;
}

// Рендер страницы уроков
function renderLessonsPage() {
    const t = translations[state.lang];
    return `
        <div class="section animate-fadeIn">
            <h2>${t.lessonsTitle}</h2>
            <p>Здесь будут представлены все доступные уроки платформы.</p>
        </div>
    `;
}

// Рендер страницы о проекте
function renderAboutPage() {
    const t = translations[state.lang];
    return `
        <div class="section animate-fadeIn">
            <h2>${t.about}</h2>
            <p>Энергия Роста — это образовательная платформа, созданная для твоего развития.</p>
            <p>Мы верим, что качественное образование должно быть доступным, удобным и интересным.</p>
        </div>
    `;
}

// Рендер страницы деталей курса
function renderCourseDetailPage() {
    return `
        <div class="section animate-fadeIn">
            <h2>💰 Финансовая Грамотность</h2>
            <p>Курс финансовой грамотности: 24 темы, тесты, бейджи и отслеживание прогресса.</p>
            <button onclick="app.navigate('home')">Назад</button>
        </div>
    `;
}

// Основное приложение
const app = {
    init() {
        this.bindEvents();
        this.navigate('home');
    },
    
    bindEvents() {
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.getAttribute('href').substring(1);
                this.navigate(page);
            });
        });
    },
    
    navigate(page) {
        state.currentPage = page;
        const appElement = document.getElementById('app');
        
        switch(page) {
            case 'home':
                appElement.innerHTML = renderHomePage();
                break;
            case 'courses':
                appElement.innerHTML = renderCoursesPage();
                break;
            case 'lessons':
                appElement.innerHTML = renderLessonsPage();
                break;
            case 'achievements':
                appElement.innerHTML = renderAchievementsPage();
                break;
            case 'about':
                appElement.innerHTML = renderAboutPage();
                break;
            case 'course-detail':
                appElement.innerHTML = renderCourseDetailPage();
                break;
            default:
                appElement.innerHTML = renderHomePage();
        }
        
        // Обновляем активный класс в навигации
        document.querySelectorAll('nav a').forEach(link => {
            link.style.color = link.getAttribute('href') === `#${page}` ? '#00ff9d' : '#fff';
        });
    }
};

// Запуск приложения
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});

// Экспортируем для доступа из HTML
window.app = app;
