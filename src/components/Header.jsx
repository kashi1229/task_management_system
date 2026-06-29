import { Link } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';
import { Sun, Moon, CheckSquare } from 'lucide-react';

export default function Header() {
  const { theme, toggleTheme } = useTasks();

  return (
    <header className="sticky top-0 z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-700/60 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 no-underline group">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm shadow-blue-600/25 group-hover:shadow-blue-600/40 transition-shadow">
            <CheckSquare size={18} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
            Taskflow
          </span>
        </Link>

        <button
          onClick={toggleTheme}
          className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-700 dark:hover:text-slate-200 transition-all duration-200"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <Moon size={18} strokeWidth={2} />
          ) : (
            <Sun size={18} strokeWidth={2} />
          )}
        </button>
      </div>
    </header>
  );
}
