import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTasks } from './context/TaskContext';
import Header from './components/Header';
import TaskList from './pages/TaskList';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';

function AppContent() {
  const { theme } = useTasks();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-925 transition-colors duration-300">
      <Header />
      <main className="transition-colors duration-300">
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/edit/:id" element={<EditTask />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
