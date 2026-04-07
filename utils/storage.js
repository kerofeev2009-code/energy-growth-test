export const storage = {
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      console.warn('localStorage недоступен');
      return false;
    }
  },
  remove(key) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  },
  getProgress(courseId) {
    return this.get('progress', {})[courseId] || { completedLessons: [], scores: {} };
  },
  getTotalCompleted() {
    const progress = this.get('progress', {});
    return Object.values(progress).reduce((acc, c) => acc + c.completedLessons.length, 0);
  },
  getTotalScore() {
    const progress = this.get('progress', {});
    let total = 0, count = 0;
    Object.values(progress).forEach(c => {
      Object.values(c.scores || {}).forEach(s => { total += s; count++; });
    });
    return count > 0 ? Math.round(total / count) : 0;
  }
};