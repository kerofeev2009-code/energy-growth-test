// components/components.jsx

import { CourseLevel } from '../data/data.js';
import { translations } from '../data/data.js'; // Если переводы там, иначе создать отдельный файл

export const ProgressBar = ({ current, total, isAccessible }) => {
    const percentage = Math.round((current / total) * 100);
    return (
        <div className="w-full">
            <div className="flex justify-between text-sm font-black uppercase tracking-widest mb-2 opacity-60">
                <span>Прогресс</span>
                <span>{percentage}%</span>
            </div>
            <div className={`h-4 rounded-full overflow-hidden ${isAccessible ? 'bg-white border-2 border-white' : 'bg-slate-200'}`}>
                <div className={`h-full bg-gradient-to-r from-indigo-500 to-emerald-500 progress-bar rounded-full`} style={{ width: `${percentage}%` }} />
            </div>
        </div>
    );
};

// Остальные компоненты (Navbar, Footer, CourseCard, AuthModal и т.д.) выносятся сюда...
// Например:
export const CourseCard = ({ course, onEnroll, lang = 'ru', isAccessible }) => {
    // Логика карточки курса
};
