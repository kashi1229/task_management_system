
# Taskflow

A modern task management app with priorities, categories, search, filter, dark mode, and localStorage persistence.

Built with **React 19**, **Vite 8**, and **Tailwind CSS v4**.

## Features

- **CRUD Operations** — Create, read, update, and delete tasks
- **Task Completion** — Toggle tasks as complete/incomplete with visual feedback
- **Priority Levels** — High, Medium, Low with color-coded badges
- **Categories** — Work, Personal, School, Health, Other with distinct colors
- **Due Dates** — Set due dates with automatic overdue detection
- **Search** — Search tasks by title or description
- **Filter** — Filter tasks by priority level
- **Dark Mode** — Toggle between light and dark themes (persisted)
- **Local Storage** — All data persists in the browser
- **Responsive** — Mobile-first responsive grid layout
- **Keyboard Friendly** — Escape to close modals, accessible controls

## Tech Stack

| Tool | Purpose |
|------|---------|
| [React 19](https://react.dev/) | UI framework |
| [Vite 8](https://vite.dev/) | Build tool and dev server |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [React Router v7](https://reactrouter.com/) | Client-side routing |
| [date-fns](https://date-fns.org/) | Date formatting utilities |
| [Lucide React](https://lucide.dev/) | Icon library |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | Lint source code with ESLint |

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── ConfirmModal.jsx
│   ├── EmptyState.jsx
│   ├── FilterBar.jsx
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   ├── TaskCard.jsx
│   └── TaskForm.jsx
├── context/        # React context (state management)
│   └── TaskContext.jsx
├── hooks/          # Custom React hooks
│   └── useLocalStorage.js
├── pages/          # Route-level page components
│   ├── AddTask.jsx
│   ├── EditTask.jsx
│   └── TaskList.jsx
├── utils/          # Constants and helpers
│   └── constants.js
├── App.jsx
├── main.jsx
└── index.css
```

## License

MIT
