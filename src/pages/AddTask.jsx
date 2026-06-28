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
    <div className="max-w-2xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/')}
        className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 mb-6 transition-colors"
      >
        <ArrowLeft size={16} />
        Back to tasks
      </button>
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Add New Task
        </h1>
        <TaskForm onSubmit={handleSubmit} submitLabel="Create Task" />
      </div>
    </div>
  );
}
