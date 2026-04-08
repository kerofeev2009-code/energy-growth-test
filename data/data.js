// data/data.js

export const CourseLevel = {
  BEGINNER: 'Начальный',
  INTERMEDIATE: 'Средний',
  ADVANCED: 'Продвинутый'
};

export const VideoType = {
  TUTORIAL: 'Видеоурок',
  WEBINAR: 'Вебинар',
  LIFEHACK: 'Лайфхак',
  INTERVIEW: 'Интервью'
};

export const FIN_COURSE = {
  id: 'c7',
  title: 'Финансовая Грамотность',
  category: 'Финансы',
  level: CourseLevel.BEGINNER,
  duration: 24,
  popularity: 100,
  description: 'Курс финансовой грамотности: 24 темы, тесты, бейджи и отслеживание прогресса.',
  rating: 4.9,
  completionRate: 0,
  accentColor: 'indigo',
};

export const COURSES = [
  FIN_COURSE
];

export const VIDEOS = [];

export const FIN_COURSE_DATA = {
  lessons: []
};

export const FIN_BADGES = [];
