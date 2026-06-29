import { useState } from 'react';
import { PRIORITIES, CATEGORIES } from '../utils/constants';

function getInitialForm(initialData) {
  if (initialData) {
    return {
      title: initialData.title || '',
      description: initialData.description || '',
      priority: initialData.priority || 'Medium',
      category: initialData.category || 'Other',
      dueDate: initialData.dueDate || '',
    };
  }
  return { title: '', description: '', priority: 'Medium', category: 'Other', dueDate: '' };
}

export default function TaskForm({ initialData, onSubmit, submitLabel }) {
  const [form, setForm] = useState(() => getInitialForm(initialData));
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.title.trim()) {
      newErrors.title = 'Title is required';
    } else if (form.title.trim().length < 2) {
      newErrors.title = 'Title must be at least 2 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({
        ...form,
        title: form.title.trim(),
        description: form.description.trim(),
      });
    }
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          id="title"
          type="text"
          value={form.title}
          onChange={(e) => handleChange('title', e.target.value)}
          placeholder="e.g., Finish homework"
          className={`w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm transition-all duration-200 ${
            errors.title
              ? 'border-red-500 dark:border-red-400 focus:ring-red-500/20 focus:border-red-500'
              : 'border-slate-200 dark:border-slate-700'
          }`}
        />
        {errors.title && (
          <p className="text-red-500 text-xs mt-2 font-medium">{errors.title}</p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Description
        </label>
        <textarea
          id="description"
          value={form.description}
          onChange={(e) => handleChange('description', e.target.value)}
          placeholder="Optional details..."
          rows={3}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm resize-none transition-all duration-200"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="priority" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Priority
          </label>
          <select
            id="priority"
            value={form.priority}
            onChange={(e) => handleChange('priority', e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm transition-all duration-200"
          >
            {PRIORITIES.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Category
          </label>
          <select
            id="category"
            value={form.category}
            onChange={(e) => handleChange('category', e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm transition-all duration-200"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="dueDate" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Due Date
          </label>
          <input
            id="dueDate"
            type="date"
            value={form.dueDate}
            onChange={(e) => handleChange('dueDate', e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm transition-all duration-200"
          />
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl text-sm shadow-sm shadow-blue-600/25 hover:shadow-blue-600/40 active:scale-[0.98] transition-all duration-200"
        >
          {submitLabel || 'Save Task'}
        </button>
      </div>
    </form>
  );
}
