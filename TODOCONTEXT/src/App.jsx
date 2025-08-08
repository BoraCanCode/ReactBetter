import React, { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context/todoContext';
import TodoForm from './components/todoForm';
import TodoItem from './components/todoItem';

function App() {


  const [todos, setTodos] = useState([]);

  // adding the todo
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }
  //updating the todo
  const updateTodo = (todo, id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }
  //deleteing the todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  //toggle Logic
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  //get items from local  storage 
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    setTodos(todos)
  }, [])

  //display items
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, toggleComplete, updateTodo }}>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="backdrop-blur-sm bg-white/10 rounded-2xl shadow-2xl border border-white/20 p-8">
            <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ✨ Task Master ✨
            </h1>
            <div className="mb-6">
              <TodoForm />
            </div>
            <div className="space-y-3">
              {todos.map((todo) => (
                <div key={todo.id}>
                  <TodoItem todo={todo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
