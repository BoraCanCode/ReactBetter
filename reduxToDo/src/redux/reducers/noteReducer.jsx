import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    notes: [{
        text: 'Hey this text is passed in reducer',
        createdOn: new Date()
    }]
}

//created using redux toolkit

const noteSlice = createSlice({

    name: 'note',
    initialState: initialState,
    reducers: {

        add: (state, action) => {
            state.notes.push({
                text: action.payload,
                createdOn: new Date()
            })
        },

        delete: (state, action) => {

            state.notes.splice(action.payload, 1);
        }
    }
});

export const noteReducer = noteSlice.reducer
export const noteAction = noteSlice.actions
export const noteSelector = (state) => state.noteReducer.notes

// export function noteReducer(state = initialState, action) {

//     switch (action.type) {

//         case ADD_NOTE:
//             return {
//                 ...state,
//                 notes: [
//                     ...state.notes,
//                     {
//                         text: action.text,
//                         createdOn: new Date()
//                     }
//                 ]
//             }

//         case DELETE_NOTE:
//             return {
//                 ...state,
//                 notes: state.notes.filter((note, index) => index !== action.index)
//             }

//         default: return state
//     }
// }