import { useState } from "react";
import { useTodo } from "../context/todoContext";
import React from "react";

function TodoForm() {

    const [todo, setTodo] = useState('')
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault();
        if (!todo) return

        addTodo({ todo, completed: false })
        setTodo('')
    }

    return (
        <form className="flex gap-2"
            onSubmit={add}
        >
            <input
                type="text"
                placeholder="✨ What's your next task?"
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

