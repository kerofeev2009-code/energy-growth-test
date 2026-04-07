import React, { useState } from 'react';
import { Card, ProgressBar } from '../components.jsx';

const CoursesPage = ({ lang, t, progress, courses, onSelectCourse }) => {
  const [filter, setFilter] = useState('all');
  const levels = ['all', { ru: 'Начинающий', en: 'Beginner' }, { ru: 'Средний', en: 'Intermediate' }, { ru: 'Продвинутый', en: 'Advanced' }];

  const filtered = filter === 'all' ? courses : courses.filter(c => c.level[lang] === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-3xl font-bold mb-2">{t('courses')}</h1>
      <p className="text-gray-500 mb-6">{t('viewAll')} — {courses.length}</p>

      {/* FILTERS */}
      <div className="flex flex-wrap gap-2 mb-8">
        {['all', 'Начинающий', 'Средний', 'Продвинутый'].map(l => (
          <button key={l} onClick={() => setFilter(l === 'all' ? 'all' : l)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${filter === l ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
            {l === 'all' ? (lang === 'ru' ? 'Все' : 'All') : t('level') === l ? l : l}
          </button>
        ))}
      </div>

      {/* COURSE GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(course => {
          const p = progress[course.id];
          const completed = p?.completedLessons?.length || 0;
          const total = course.lessons?.length || 0;
          const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
          return (
            <Card key={course.id} onClick={() => onSelectCourse(course)}>
              <div className="flex items-start justify-between">
                <span className="text-4xl">{course.icon}</span>
                <span className="px-2 py-1 bg-gray-100 text-xs rounded-full font-medium">{course.level[lang]}</span>
              </div>
              <h3 className="text-lg font-bold mt-4">{course.title[lang]}</h3>
              <p className="text-sm text-gray-500 mt-1">{course.description[lang]}</p>
              <div className="flex items-center gap-4 mt-4 text-xs text-gray-400">
                <span>⏱ {course.duration[lang]}</span>
                <span>📝 {total} {t('lessons')}</span>
              </div>
              {completed > 0 && (
                <div className="mt-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span>{t('progress')}</span>
                    <span className="font-medium">{pct}%</span>
                  </div>
                  <ProgressBar value={completed} max={total} size="sm" />
                </div>
              )}
              <button className="mt-4 w-full py-2 bg-primary-50 text-primary-700 font-medium rounded-lg hover:bg-primary-100 transition text-sm">
                {completed > 0 ? t('continueLearning') : t('startLearning')}
              </button>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CoursesPage;