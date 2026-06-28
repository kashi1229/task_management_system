import { Link } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';
import { PRIORITY_COLORS, CATEGORY_COLORS } from '../utils/constants';
import { format } from 'date-fns';
import { Pencil, Trash2, CheckCircle, Circle, Calendar } from 'lucide-react';

export default function TaskCard({ task, onDelete }) {
  const { toggleComplete } = useTasks();

  const priorityStyle = PRIORITY_COLORS[task.priority];
  const categoryStyle = CATEGORY_COLORS[task.category];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <button
          onClick={() => toggleComplete(task.id)}
          className="mt-0.5 flex-shrink-0 text-gray-400 hover:text-blue-500 transition-colors"
          aria-label={task.completed ? 'Mark incomplete' : 'Mark complete'}
        >
          {task.completed ? (
            <CheckCircle size={22} className="text-green-500" />
          ) : (
            <Circle size={22} />
          )}
        </button>

        <div className="flex-1 min-w-0">
          <h3
            className={`font-semibold text-gray-900 dark:text-white ${
              task.completed ? 'line-through text-gray-400 dark:text-gray-500' : ''
            }`}
          >
            {task.title}
          </h3>
          {task.description && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
              {task.description}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${priorityStyle.light} ${priorityStyle.dark}`}>
              {task.priority}
            </span>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryStyle.light} ${categoryStyle.dark}`}>
              {task.category}
            </span>
            {task.dueDate && (
              <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <Calendar size={12} />
                {format(new Date(task.dueDate), 'MMM d, yyyy')}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1 flex-shrink-0">
          <Link
            to={`/edit/${task.id}`}
            className="p-2 rounded-lg text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            aria-label="Edit task"
          >
            <Pencil size={16} />
          </Link>
          <button
            onClick={() => onDelete(task.id)}
            className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            aria-label="Delete task"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
