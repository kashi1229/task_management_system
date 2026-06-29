import { useNavigate } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';
import TaskForm from '../components/TaskForm';
import { ArrowLeft } from 'lucide-react';

export default function AddTask() {
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    addTask(data);
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <button
        onClick={() => navigate('/')}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 mb-8 transition-colors duration-200"
      >
        <ArrowLeft size={16} strokeWidth={2} />
        Back to tasks
      </button>
      <div className="bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200/80 dark:border-slate-700/50 p-6 sm:p-8 shadow-sm">
          <h1 className="text-xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Add New Task
          </h1>
          <TaskForm onSubmit={handleSubmit} submitLabel="Create Task" />
      </div>
    </div>
  );
}
