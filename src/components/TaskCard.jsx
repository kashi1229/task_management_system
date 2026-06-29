import { Link } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';
import { PRIORITY_COLORS, CATEGORY_COLORS } from '../utils/constants';
import { format, isPast, parseISO } from 'date-fns';
import { Pencil, Trash2, CheckCircle2, Circle, Calendar } from 'lucide-react';

export default function TaskCard({ task, onDelete }) {
  const { toggleComplete } = useTasks();

  const priorityStyle = PRIORITY_COLORS[task.priority];
  const categoryStyle = CATEGORY_COLORS[task.category];
  const isOverdue = task.dueDate && !task.completed && isPast(parseISO(task.dueDate));

  return (
    <div className="group bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200/80 dark:border-slate-700/50 p-5 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 hover:border-slate-300 dark:hover:border-slate-600/50 hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex items-start gap-3.5">
        <button
          onClick={() => toggleComplete(task.id)}
          className="mt-0.5 flex-shrink-0 text-slate-300 dark:text-slate-600 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
          aria-label={task.completed ? 'Mark incomplete' : 'Mark complete'}
        >
          {task.completed ? (
            <CheckCircle2 size={22} className="text-emerald-500" strokeWidth={2} />
          ) : (
            <Circle size={22} strokeWidth={2} />
          )}
        </button>

        <div className="flex-1 min-w-0">
          <h3 className={`font-semibold text-sm leading-snug ${
            task.completed
              ? 'text-slate-400 dark:text-slate-500 line-through'
              : 'text-slate-900 dark:text-white'
          }`}>
            {task.title}
          </h3>

          {task.description && (
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
              {task.description}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-2 mt-3">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-lg ${priorityStyle.light} ${priorityStyle.dark}`}>
              {task.priority}
            </span>
            <span className={`text-xs font-medium px-2.5 py-1 rounded-lg ${categoryStyle.light} ${categoryStyle.dark}`}>
              {task.category}
            </span>
            {task.dueDate && (
              <span className={`text-xs font-medium flex items-center gap-1 px-2.5 py-1 rounded-lg ${
                isOverdue
                  ? 'bg-red-50 text-red-600 border border-red-200 dark:bg-red-950/50 dark:text-red-400 dark:border-red-800/50'
                  : 'bg-slate-50 text-slate-500 border border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'
              }`}>
                <Calendar size={12} />
                {format(parseISO(task.dueDate), 'MMM d, yyyy')}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-0.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Link
            to={`/edit/${task.id}`}
            className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/50 dark:hover:text-blue-400 transition-colors duration-200"
            aria-label="Edit task"
          >
            <Pencil size={15} strokeWidth={2} />
          </Link>
          <button
            onClick={() => onDelete(task.id)}
            className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50 dark:hover:text-red-400 transition-colors duration-200"
            aria-label="Delete task"
          >
            <Trash2 size={15} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}
