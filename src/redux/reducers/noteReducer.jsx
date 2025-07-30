import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions"

const initialState = {
    notes: [{
        text: 'Hey this text is passed in reducer',
        createOn: new Date()
    }]
}

export function noteReducer(state = initialState, action) {

    switch (action.type) {

        case ADD_NOTE:
            return {
                ...state,
                notes: [
                    ...state.notes,
                    {
                        text: action.text,
                        createdOn: new Date()
                    }
                ]
            }

        case DELETE_NOTE:

            state.notes.splice(action.index, 1);
            return {
                ...state,
                notes: state.notes
            }

        default: return state
    }
}