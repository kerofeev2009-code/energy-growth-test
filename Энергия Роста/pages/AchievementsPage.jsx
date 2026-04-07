import React from 'react';
import { Badge, Card } from '../components.jsx';
import { storage } from '../utils/storage.js';

const AchievementsPage = ({ lang, t, badges, achievements, navigate }) => {
  const totalLessons = storage.getTotalCompleted();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-3xl font-bold mb-2">{t('myAchievements')}</h1>
      <p className="text-gray-500 mb-8">{totalLessons} {t('lessonsCompleted')}</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {badges.map(badge => {
          const earned = achievements?.[badge.id];
          return <Badge key={badge.id} icon={badge.icon} title={badge.title[lang]} desc={badge.desc[lang]} earned={earned} unlocked={!!earned} />;
        })}
      </div>

      {Object.keys(achievements || {}).filter(k => achievements[k]).length === 0 && (
        <Card className="text-center py-12 mt-8" hover={false}>
          <span className="text-4xl">🔒</span>
          <p className="text-gray-400 mt-3">{t('noAchievements')}</p>
          <button onClick={() => navigate('courses')} className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition">
            {t('startLearning')}
          </button>
        </Card>
      )}
    </div>
  );
};

export default AchievementsPage;