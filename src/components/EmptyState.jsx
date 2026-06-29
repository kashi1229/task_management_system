import { ClipboardList, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EmptyState({ message, showCreateButton }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-5">
        <ClipboardList size={32} className="text-slate-300 dark:text-slate-600" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1.5">
        No tasks found
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs mb-6">
        {message || 'Create a new task to get started.'}
      </p>
      {showCreateButton && (
        <Link
          to="/add"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl text-sm shadow-sm shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-200 no-underline"
        >
          <Plus size={16} strokeWidth={2.5} />
          New Task
        </Link>
      )}
    </div>
  );
}
