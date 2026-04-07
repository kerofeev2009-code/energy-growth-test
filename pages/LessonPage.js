import React, { useState } from 'react';
import { Card, ProgressBar } from '../components.jsx';

const LessonPage = ({ lang, t, lesson, course, onComplete, navigate }) => {
  const [tab, setTab] = useState('theory');
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);

  if (!lesson) return null;

  const tabs = [
    { id: 'theory', label: t('theory'), icon: '📖' },
    { id: 'infographic', label: t('infographic'), icon: '📊' },
    { id: 'practice', label: t('practice'), icon: '✏️' },
    { id: 'test', label: t('test'), icon: '📝' }
  ];

  const questions = lesson.questions || [];
  const currentQuestion = questions[currentQ];
  const totalQ = questions.length;

  const handleAnswer = (qIdx, aIdx) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qIdx]: aIdx }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < totalQ) return;
    setSubmitted(true);
    let correct = 0;
    questions.forEach((q, i) => { if (answers[i] === q.correct) correct++; });
    const score = Math.round((correct / totalQ) * 100);
    setTimeout(() => onComplete(score), 1500);
  };

  const score = submitted ? Math.round((Object.entries(answers).filter(([i, a]) => a === questions[i]?.correct).length / totalQ) * 100) : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 animate-fade-in">
      <button onClick={() => navigate('course-detail', { course })} className="text-sm text-gray-500 hover:text-primary-600 mb-4 inline-block">← {course?.title[lang]}</button>
      <h1 className="text-2xl font-bold mb-2">{lesson.title[lang]}</h1>

      {/* TABS */}
      <div className="flex gap-1 bg-gray-100 p-1 rounded-xl mb-6 overflow-x-auto">
        {tabs.map(tab => (
          <button key={tab.id} onClick={() => setTab(tab.id)}
            className={`flex-1 min-w-[80px] py-2 px-3 rounded-lg text-sm font-medium transition whitespace-nowrap ${tab.id === tab ? 'bg-white shadow text-primary-700' : 'text-gray-500 hover:text-gray-700'}`}>
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <Card hover={false} className="min-h-[400px]">
        {tab === 'theory' && <div dangerouslySetInnerHTML={{ __html: lesson.theory[lang] }} className="prose max-w-none" />}
        {tab === 'infographic' && <div dangerouslySetInnerHTML={{ __html: lesson.infographic[lang] }} className="prose max-w-none" />}
        {tab === 'practice' && <div dangerouslySetInnerHTML={{ __html: lesson.practice[lang] }} className="prose max-w-none" />}

        {tab === 'test' && (
          <div>
            {totalQ === 0 ? <p className="text-gray-400">{t('noLessons')}</p> : (
              <>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>{t('question')} {currentQ + 1} {t('of')} {totalQ}</span>
                  <ProgressBar value={currentQ + 1} max={totalQ} size="sm" />
                </div>
                <p className="font-semibold mb-4">{currentQuestion?.[lang]}</p>
                <div className="space-y-2 mb-6">
                  {currentQuestion?.answers?.map((ans, i) => {
                    const isSelected = answers[currentQ] === i;
                    const isCorrect = submitted && i === currentQuestion.correct;
                    const isWrong = submitted && isSelected && i !== currentQuestion.correct;
                    return (
                      <button key={i} onClick={() => handleAnswer(currentQ, i)}
                        className={`w-full text-left p-4 rounded-xl border-2 transition ${isCorrect ? 'border-accent-500 bg-accent-50' : isWrong ? 'border-red-400 bg-red-50' : isSelected ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-primary-300'}`}>
                        <span className="font-medium">{ans}</span>
                        {isCorrect && <span className="float-right text-accent-600">✓</span>}
                        {isWrong && <span className="float-right text-red-500">✕</span>}
                      </button>
                    );
                  })}
                </div>
                <div className="flex gap-3">
                  {currentQ < totalQ - 1 && !submitted && (
                    <button onClick={() => setCurrentQ(c => c + 1)} className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition">
                      {t('nextLesson')} →
                    </button>
                  )}
                  {currentQ > 0 && !submitted && (
                    <button onClick={() => setCurrentQ(c => c - 1)} className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                      ← {t('previousLesson')}
                    </button>
                  )}
                  {!submitted && Object.keys(answers).length === totalQ && (
                    <button onClick={handleSubmit} className="px-6 py-2 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition font-medium">
                      {t('submit')}
                    </button>
                  )}
                </div>
                {submitted && (
                  <div className="mt-6 p-4 bg-primary-50 rounded-xl text-center animate-fade-in">
                    <p className="text-2xl font-bold text-primary-700">{t('yourScore')}: {score}%</p>
                    <p className="text-primary-600 mt-1">{score >= 80 ? t('excellent') : score >= 50 ? t('good') : t('tryAgain')}</p>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </Card>
    </div>
  );
};

export default LessonPage;