export const PRIORITIES = ['High', 'Medium', 'Low'];

export const CATEGORIES = ['Work', 'Personal', 'School', 'Health', 'Other'];

export const PRIORITY_COLORS = {
  High: { light: 'bg-red-100 text-red-700', dark: 'dark:bg-red-900/40 dark:text-red-300' },
  Medium: { light: 'bg-yellow-100 text-yellow-700', dark: 'dark:bg-yellow-900/40 dark:text-yellow-300' },
  Low: { light: 'bg-green-100 text-green-700', dark: 'dark:bg-green-900/40 dark:text-green-300' },
};

export const CATEGORY_COLORS = {
  Work: { light: 'bg-blue-100 text-blue-700', dark: 'dark:bg-blue-900/40 dark:text-blue-300' },
  Personal: { light: 'bg-purple-100 text-purple-700', dark: 'dark:bg-purple-900/40 dark:text-purple-300' },
  School: { light: 'bg-indigo-100 text-indigo-700', dark: 'dark:bg-indigo-900/40 dark:text-indigo-300' },
  Health: { light: 'bg-teal-100 text-teal-700', dark: 'dark:bg-teal-900/40 dark:text-teal-300' },
  Other: { light: 'bg-gray-100 text-gray-700', dark: 'dark:bg-gray-700 dark:text-gray-300' },
};

export const STORAGE_KEYS = {
  TASKS: 'task-manager-tasks',
  THEME: 'task-manager-theme',
};

export const DEFAULT_TASK = {
  title: '',
  description: '',
  priority: 'Medium',
  category: 'Other',
  dueDate: '',
  completed: false,
};
