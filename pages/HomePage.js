// pages/HomePage.jsx

import React from 'https://unpkg.com/react@18/umd/react.development.js';
// Импортируем данные и компоненты по мере необходимости
import { translations } from '../data/data.js';
// import { CourseCard } from '../components/components.jsx';
// import { VideoCard } from '../components/components.jsx';
// import { FIN_COURSE } from '../data/data.js';
// import { VIDEOS } from '../data/data.js';

export const HomePage = ({ onNavigate }) => {
    // Здесь только логика и рендер конкретной страницы.
    // Данные берутся из импортов выше.
    
    const t = translations.ru;
    
    return (
        <div className="pt-20 md:pt-24 pb-16 md:pb-12 space-y-12 md:space-y-16 lg:space-y-24 animate-fadeIn">
            {/* Блок Hero */}
            <section className="relative rounded-xl md:rounded-[2rem] overflow-hidden min-h-[300px] md:min-h-[400px] flex items-center bg-slate-900 shadow-[0_32px_64px_rgba(0,0,0,0.2)]">
                {/* ... содержимое ... */}
            </section>
            
            {/* Блок Рекомендуемый курс */}
            {/* <CourseCard course={FIN_COURSE} onEnroll={() => onNavigate('fin')} /> */}
            
            {/* Блок AI Navigator */}
            {/* ... */}
        </div>
    );
};