import { Link } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';
import { Sun, Moon, CheckSquare } from 'lucide-react';

export default function Header() {
  const { theme, toggleTheme } = useTasks();

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-gray-900 dark:text-white no-underline">
          <CheckSquare size={24} className="text-blue-600 dark:text-blue-400" />
          <span className="text-xl font-bold">Task Manager</span>
        </Link>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </header>
  );
}
