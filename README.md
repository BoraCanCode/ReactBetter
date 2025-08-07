# TodoContext - React Todo Application

A modern React todo application built with Vite, React Context API, and Tailwind CSS for state management and styling.

## Features

- ✅ Add new todos
- ✅ Update existing todos
- ✅ Delete todos
- ✅ Toggle todo completion status
- ✅ Modern UI with Tailwind CSS
- ✅ React Context API for state management
- ✅ Responsive design

## Tech Stack

- **React 19** - Latest React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Context API** - State management
- **ESLint** - Code linting

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd todoContext
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
todoContext/
├── src/
│   ├── context/
│   │   └── todoContext.jsx    # React Context for todo state
│   ├── App.jsx                # Main application component
│   ├── App.css                # Application styles
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles
├── public/                    # Static assets
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

## Context API Usage

The application uses React Context API for state management:

```jsx
import { useTodo } from './context/todoContext';

const { todos, addTodo, updateTodo, deleteTodo, toggleComplete } = useTodo();
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit and push to your branch
5. Create a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
