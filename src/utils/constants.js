export const PRIORITIES = ['High', 'Medium', 'Low'];

export const CATEGORIES = ['Work', 'Personal', 'School', 'Health', 'Other'];

export const PRIORITY_COLORS = {
  High: {
    light: 'bg-red-50 text-red-700 border border-red-200',
    dark: 'dark:bg-red-950/50 dark:text-red-300 dark:border-red-800/50',
  },
  Medium: {
    light: 'bg-amber-50 text-amber-700 border border-amber-200',
    dark: 'dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800/50',
  },
  Low: {
    light: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    dark: 'dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800/50',
  },
};

export const CATEGORY_COLORS = {
  Work: {
    light: 'bg-blue-50 text-blue-700 border border-blue-200',
    dark: 'dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800/50',
  },
  Personal: {
    light: 'bg-violet-50 text-violet-700 border border-violet-200',
    dark: 'dark:bg-violet-950/50 dark:text-violet-300 dark:border-violet-800/50',
  },
  School: {
    light: 'bg-indigo-50 text-indigo-700 border border-indigo-200',
    dark: 'dark:bg-indigo-950/50 dark:text-indigo-300 dark:border-indigo-800/50',
  },
  Health: {
    light: 'bg-teal-50 text-teal-700 border border-teal-200',
    dark: 'dark:bg-teal-950/50 dark:text-teal-300 dark:border-teal-800/50',
  },
  Other: {
    light: 'bg-slate-50 text-slate-600 border border-slate-200',
    dark: 'dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700',
  },
};

export const STORAGE_KEYS = {
  TASKS: 'task-manager-tasks',
  THEME: 'task-manager-theme',
};
