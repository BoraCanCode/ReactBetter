import { useState } from "react";
import { useTodo } from "../context/todoContext";
import React from "react";

function TodoItem({ todo }) {

    // Guard against undefined todo
    if (!todo) {
        return null;
    }

    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)

    const { updateTodo, deleteTodo, toggleComplete } = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (
        <div
            className={`flex items-center gap-3 p-4 rounded-xl backdrop-blur-sm border border-white/20 transition-all duration-300 ${todo.completed
                ? "bg-green-500/20 border-green-400/30"
                : "bg-white/10 hover:bg-white/15"
                }`}
        >
            <input
                type="checkbox"
                className="w-5 h-5 rounded-full border-2 border-white/30 bg-transparent checked:bg-purple-500 checked:border-purple-500 cursor-pointer transition-all duration-300"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`flex-1 bg-transparent text-white placeholder-white/60 outline-none transition-all duration-300 ${isTodoEditable
                    ? "border-b-2 border-purple-400 px-2"
                    : "border-transparent"
                    } ${todo.completed ? "line-through opacity-60" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            <button
                className={`p-2 rounded-lg transition-all duration-300 ${todo.completed
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-white/20 hover:scale-110"
                    }`}
                onClick={() => {
                    if (todo.completed) return;
                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "💾" : "✏️"}
            </button>
            <button
                className="p-2 rounded-lg hover:bg-red-500/20 hover:scale-110 transition-all duration-300"
                onClick={() => deleteTodo(todo.id)}
            >
                🗑️
            </button>
        </div>
    );
}

export default TodoItem;
