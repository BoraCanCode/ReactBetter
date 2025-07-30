
import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

const initialState = {
    todos: [
        { id: 1, text: "Go to Gym at 6", completed: false },
        { id: 2, text: "Study at 8", completed: true }
    ]
}

export function todoReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(), // Generate unique id
                        text: action.text,
                        completed: false
                    }
                ]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, i) => {
                    if (i == action.index) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        };
                    }
                    return todo;
                })
            }
        default:
            return state;
    }
}