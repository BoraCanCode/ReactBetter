import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    todos: [
        { id: 1, text: "Go to Gym at 6", completed: false },
        { id: 2, text: "Study at 8", completed: true }
    ]
}


// Creating reducer with Redux-toolkit

const todoSlice = createSlice({

    name: 'todo',
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            state.todos.push({
                text: action.payload,
                completed: false
            })
        },
        toggle: (state, action) => {

            state.todos.map((todo, i) => {
                if (i === action.payload) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        }
    }

})

export const todoReducer = todoSlice.reducer
export const todoAction = todoSlice.actions
export const todoSelector = (state) => state.todoReducer.todos


// export function todoReducer(state = initialState, action) {

//     switch (action.type) {
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todos: [
//                     ...state.todos,
//                     {
//                         id: Date.now(), // Generate unique id
//                         text: action.text,
//                         completed: false
//                     }
//                 ]
//             }
//         case TOGGLE_TODO:
//             return {
//                 ...state,
//                 todos: state.todos.map((todo, i) => {
//                     if (i == action.index) {
//                         return {
//                             ...todo,
//                             completed: !todo.completed
//                         };
//                     }
//                     return todo;
//                 })
//             }
//         default:
//             return state;
//     }
// }