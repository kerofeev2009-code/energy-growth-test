// components.js
import React from 'https://unpkg.com/react@18/umd/react.development.js';

export const ProgressBar = ({ value, max, color = 'primary', size = 'md' }) => {
  const percent = max > 0 ? Math.min((value / max) * 100, 100) : 0;
  const height = size === 'sm' ? 'h-2' : size === 'lg' ? 'h-4' : 'h-3';
  const colors = { primary: 'bg-primary-500', accent: 'bg-accent-500', yellow: 'bg-yellow-500' };
  
  return (
    <div className={`w-full bg-gray-200 rounded-full ${height} overflow-hidden`}>
      <div className={`${height} ${colors[color]} rounded-full transition-all duration-700`} style={{ width: `${percent}%` }} />
    </div>
  );
};

export const Card = ({ children, className = '', onClick, hover = true }) => (
  <div 
    onClick={onClick} 
    className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 ${hover ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer' : ''} ${className}`}
  >
    {children}
  </div>
);

export const Badge = ({ icon, title, desc, unlocked, earned }) => (
  <div className={`flex flex-col items-center p-4 rounded-xl border-2 transition ${unlocked || earned ? 'border-accent-400 bg-accent-50' : 'border-gray-200 bg-gray-50 opacity-50'}`}>
    <span className={`text-3xl mb-2 ${unlocked || earned ? '' : 'grayscale'}`}>{icon}</span>
    <span className="font-semibold text-sm text-center">{title}</span>
    <span className="text-xs text-gray-500 text-center mt-1">{desc}</span>
    {earned && <span className="mt-2 text-xs font-bold text-accent-600">✓ {earned}</span>}
  </div>
);

export const Header = ({ lang, onLangChange, onNavigate, currentPage, accessibility, onToggleAccessibility, t, progress }) => {
  const totalLessons = Object.values(progress || {}).reduce((a, c) => a + (c.completedLessons?.length || 0), 0);
  
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <span className="font-bold text-xl text-primary-700 hidden sm:block">{t('heroTitle')}</span>
          </button>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => onNavigate('home')} className={`text-sm font-medium transition ${currentPage === 'home' ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}>{t('home')}</button>
            <button onClick={() => onNavigate('courses')} className={`text-sm font-medium transition ${currentPage.includes('course') || currentPage === 'lesson' ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}>{t('courses')}</button>
            <button onClick={() => onNavigate('achievements')} className={`text-sm font-medium transition ${currentPage === 'achievements' ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}>{t('achievements')}</button>
            {totalLessons > 0 && (
              <div className="flex items-center gap-1 bg-primary-50 px-3 py-1 rounded-full">
                <span className="text-sm">📚</span>
                <span className="text-sm font-medium text-primary-700">{totalLessons}</span>
              </div>
            )}
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={onToggleAccessibility} className="p-2 rounded-lg hover:bg-gray-100 transition" title={t('accessibility')}>♿</button>
            <button onClick={() => onLangChange(lang === 'ru' ? 'en' : 'ru')} className="px-3 py-1 rounded-lg bg-gray-100 text-sm font-medium hover:bg-gray-200 transition">
              {lang === 'ru' ? '🇷 RU' : '🇧 EN'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export const Footer = ({ lang, t }) => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p className="text-gray-400 text-sm">{t('footerText')}</p>
      <p className="text-gray-500 text-xs mt-2">{t('footerNote')}</p>
    </div>
  </footer>
);

export const AccessibilityPanel = ({ settings, onChange, onClose, t }) => (
  <div className="fixed top-16 right-4 z-40 bg-white rounded-xl shadow-xl border border-gray-200 p-4 w-64 animate-fade-in">
    <div className="flex justify-between items-center mb-3">
      <span className="font-semibold text-sm">{t('accessibility')}</span>
      <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
    </div>
    <label className="flex items-center justify-between py-2 cursor-pointer">
      <span className="text-sm">{t('highContrast')}</span>
      <input type="checkbox" checked={settings.highContrast} onChange={e => onChange({ ...settings, highContrast: e.target.checked })} className="w-5 h-5 rounded accent-primary-600" />
    </label>
    <label className="flex items-center justify-between py-2 cursor-pointer">
      <span className="text-sm">{t('largeFont')}</span>
      <input type="checkbox" checked={settings.largeFont} onChange={e => onChange({ ...settings, largeFont: e.target.checked })} className="w-5 h-5 rounded accent-primary-600" />
    </label>
  </div>
);

export const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl p-6 max-w-md w-full animate-fade-in" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-lg">{children}</span>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg">✕</button>
        </div>
      </div>
    </div>
  );
};
