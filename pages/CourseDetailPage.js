import React from 'https://unpkg.com/react@18/umd/react.development.js';
import { Card, ProgressBar } from './components.js';

const CourseDetailPage = ({ lang, t, progress, course, lessons, onSelectLesson, navigate }) => {
  if (!course) return <div className="text-center py-20 text-gray-400">Курс не найден</div>;
  
  const p = progress[course.id] || {};
  const completed = p.completedLessons?.length || 0;
  const total = lessons.length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in">
      <button onClick={() => navigate('courses')} className="text-sm text-gray-500 hover:text-primary-600 mb-4 inline-block">
        ← {t('backToCourse')}
      </button>
      
      <div className="flex items-start gap-4 mb-8">
        <span className="text-5xl">{course.icon}</span>
        <div>
          <h1 className="text-3xl font-bold">{course.title[lang]}</h1>
          <p className="text-gray-500 mt-1">{course.description[lang]}</p>
          <div className="flex gap-4 mt-3 text-sm text-gray-400">
            <span>{course.level[lang]}</span>
            <span>•</span>
            <span>{course.duration[lang]}</span>
            <span>•</span>
            <span>{total} {t('lessons')}</span>
          </div>
        </div>
      </div>

      {completed > 0 && (
        <Card className="mb-8" hover={false}>
          <div className="flex justify-between text-sm mb-2">
            <span>{t('yourProgress')}</span>
            <span className="font-bold">{completed}/{total} ({Math.round((completed/total)*100)}%)</span>
          </div>
          <ProgressBar value={completed} max={total} size="lg" />
        </Card>
      )}

      <h2 className="text-xl font-bold mb-4">{t('lessons')}</h2>
      <div className="space-y-3">
        {lessons.map((lesson, idx) => {
          const isCompleted = p.completedLessons?.includes(lesson.id);
          const score = p.scores?.[lesson.id];
          return (
            <Card key={lesson.id} onClick={() => onSelectLesson(lesson)} className="flex items-center gap-4 cursor-pointer">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${isCompleted ? 'bg-accent-500 text-white' : 'bg-gray-100 text-gray-500'}`}>
                {isCompleted ? '✓' : idx + 1}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold truncate">{lesson.title[lang]}</h3>
                {isCompleted && score !== undefined && (
                  <span className={`text-xs font-medium ${score >= 80 ? 'text-accent-600' : score >= 50 ? 'text-yellow-600' : 'text-red-500'}`}>
                    {score}% {score >= 80 ? t('excellent') : score >= 50 ? t('good') : t('tryAgain')}
                  </span>
                )}
              </div>
              <span className="text-gray-400 shrink-0">{isCompleted ? '✅' : '→'}</span>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CourseDetailPage;
