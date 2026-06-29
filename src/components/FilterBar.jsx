import { PRIORITIES } from '../utils/constants';

const FILTER_OPTIONS = ['All', ...PRIORITIES];

export default function FilterBar({ activeFilter, onFilterChange }) {
  return (
    <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800/50 rounded-xl">
      {FILTER_OPTIONS.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
            activeFilter === filter
              ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
          }`}
          aria-pressed={activeFilter === filter}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
