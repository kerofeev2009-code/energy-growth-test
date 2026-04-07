import React from 'react';
import { Card } from '../components.jsx';

const FinCoursePage = ({ lang, t, lesson, course, score, navigate }) => {
  const grade = score >= 80 ? t('excellent') : score >= 50 ? t('good') : t('tryAgain');
  const emoji = score >= 80 ? '🎉' : score >= 50 ? '👍' : '💪';

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center animate-fade-in">
      <span className="text-6xl block mb-4">{emoji}</span>
      <h1 className="text-3xl font-bold mb-2">{t('congratulations')}</h1>
      <p className="text-gray-500 mb-8">{lesson?.title[lang]}</p>

      <Card hover={false} className="max-w-md mx-auto">
        <div className="py-6">
          <p className="text-5xl font-bold text-primary-600 mb-2">{score}%</p>
          <p className="text-lg font-medium text-gray-700">{grade}</p>
          <p className="text-sm text-gray-400 mt-2">{t('yourScore')}</p>
        </div>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
        <button onClick={() => navigate('course-detail', { course })} className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition">
          {t('backToCourse')}
        </button>
        <button onClick={() => navigate('courses')} className="px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition">
          {t('courses')}
        </button>
      </div>
    </div>
  );
};

export default FinCoursePage;
