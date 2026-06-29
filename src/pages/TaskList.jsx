import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import ConfirmModal from '../components/ConfirmModal';
import EmptyState from '../components/EmptyState';
import { Plus } from 'lucide-react';

export default function TaskList() {
  const { tasks, deleteTask } = useTasks();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [deleteId, setDeleteId] = useState(null);

  const filteredTasks = useMemo(() => tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase()) ||
      (task.description && task.description.toLowerCase().includes(search.toLowerCase()));
    const matchesFilter = filter === 'All' || task.priority === filter;
    return matchesSearch && matchesFilter;
  }), [tasks, search, filter]);

  const handleDelete = () => {
    if (deleteId) {
      deleteTask(deleteId);
      setDeleteId(null);
    }
  };

  const taskToDelete = tasks.find((t) => t.id === deleteId);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            My Tasks
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {tasks.length} task{tasks.length !== 1 ? 's' : ''} total
          </p>
        </div>
        <Link
          to="/add"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl text-sm shadow-sm shadow-blue-600/25 hover:shadow-blue-600/40 active:scale-[0.98] transition-all duration-200 no-underline"
        >
          <Plus size={18} strokeWidth={2.5} />
          New Task
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8">
        <div className="flex-1 w-full sm:w-auto">
          <SearchBar value={search} onChange={setSearch} />
        </div>
        <FilterBar activeFilter={filter} onFilterChange={setFilter} />
      </div>

      {filteredTasks.length === 0 ? (
        <EmptyState
          showCreateButton={tasks.length === 0}
          message={
            tasks.length === 0
              ? 'Create a new task to get started.'
              : 'No tasks match your search or filter.'
          }
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredTasks.map((task) => (
            <TaskCard key={task.id} task={task} onDelete={setDeleteId} />
          ))}
        </div>
      )}

      {deleteId && (
        <ConfirmModal
          title="Delete Task"
          message={`Are you sure you want to delete "${taskToDelete?.title}"? This action cannot be undone.`}
          onConfirm={handleDelete}
          onCancel={() => setDeleteId(null)}
        />
      )}
    </div>
  );
}
