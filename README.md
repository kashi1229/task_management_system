# Taskflow — Task Manager

A modern, responsive task management application built with **React 19**, **Vite 8**, and **Tailwind CSS v4**. Manage your tasks with priorities, categories, due dates, search, filtering, and dark mode — all persisted in your browser's local storage.

> **Note:** This project was built using AI-driven development following the Six-File Context System methodology. See [`read/README.md`](read/README.md) for the methodology guide.

---

## Features

- **Create Tasks** — Add tasks with title, description, priority (High/Medium/Low), category (Work/Personal/School/Health/Other), and due date
- **Edit Tasks** — Update any task field after creation
- **Delete Tasks** — Remove tasks with a confirmation modal
- **Mark Complete** — Toggle task completion status with visual feedback
- **Search** — Filter tasks by title or description in real time
- **Filter by Priority** — Show all tasks or filter by High/Medium/Low
- **Dark Mode** — Toggle between light and dark themes (persisted)
- **Persistent Storage** — All data saved to `localStorage` across sessions
- **Responsive Design** — Optimized for mobile, tablet, and desktop

---

## Tech Stack

| Layer       | Technology                          | Role                        |
|-------------|-------------------------------------|-----------------------------|
| Framework   | React 19                            | UI component library        |
| Bundler     | Vite 8                              | Dev server & build tool     |
| Styling     | Tailwind CSS v4 (`@tailwindcss/vite`) | Utility-first CSS          |
| Routing     | React Router DOM v7                 | Client-side navigation      |
| Icons       | lucide-react                        | Icon library                |
| Dates       | date-fns                            | Date formatting & parsing   |
| Linting     | ESLint 10 + react-hooks + react-refresh | Code quality             |
| Persistence | Browser localStorage                | Client-side data storage    |

---

## Quick Start

### Prerequisites

- **Node.js** >= 18
- **npm** >= 9

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd usman

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Production Build

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
usman/
├── context/              # Project context files (for AI-driven development)
│   ├── project-overview.md
│   ├── architecture.md
│   ├── ui-context.md
│   ├── code-standards.md
│   ├── ai-workflow-rules.md
│   └── progress-tracker.md
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/           # Static assets
│   ├── components/       # Reusable UI components
│   │   ├── ConfirmModal.jsx
│   │   ├── EmptyState.jsx
│   │   ├── FilterBar.jsx
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── TaskCard.jsx
│   │   └── TaskForm.jsx
│   ├── context/
│   │   └── TaskContext.jsx    # Global state (tasks, theme)
│   ├── hooks/
│   │   └── useLocalStorage.js # LocalStorage persistence hook
│   ├── pages/
│   │   ├── AddTask.jsx    # /add — Create new task
│   │   ├── EditTask.jsx   # /edit/:id — Edit existing task
│   │   └── TaskList.jsx   # / — Main task list view
│   ├── utils/
│   │   └── constants.js   # Priority/category definitions & colors
│   ├── App.jsx            # Root component with router & theme
│   ├── index.css          # Global styles + Tailwind imports
│   └── main.jsx           # Application entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Routes

| Path         | Page      | Description              |
|--------------|-----------|--------------------------|
| `/`          | TaskList  | View, search, filter tasks |
| `/add`       | AddTask   | Create a new task        |
| `/edit/:id`  | EditTask  | Edit an existing task    |

---

## Configuration

### Environment Variables

No environment variables are required. The app runs entirely on the client side.

### Constants (`src/utils/constants.js`)

- **Priorities:** `High`, `Medium`, `Low`
- **Categories:** `Work`, `Personal`, `School`, `Health`, `Other`
- **Storage Keys:** `task-manager-tasks`, `task-manager-theme`

---

## Architecture

The application follows a simple React architecture:

1. **State Management** — React Context API (`TaskContext`) provides global access to tasks and theme
2. **Persistence** — Custom `useLocalStorage` hook syncs state to `localStorage`
3. **Routing** — React Router v7 handles three client-side routes
4. **Styling** — Tailwind CSS v4 with custom `dark:` variant support

See [`context/architecture.md`](context/architecture.md) for detailed architecture documentation.

---

## Scripts

| Script     | Command             | Description              |
|------------|---------------------|--------------------------|
| `dev`      | `vite`              | Start dev server         |
| `build`    | `vite build`        | Production build         |
| `preview`  | `vite preview`      | Preview production build |
| `lint`     | `eslint .`          | Run ESLint               |

---

## License

Private project.
