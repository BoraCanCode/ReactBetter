import { createSlice } from "@reduxjs/toolkit"
import { todoAction } from "./todoReducer"

const initialState = {
    message: ''
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(todoAction.add, (state, action) => {
            state.message = 'Todo is created'
        })
    }
})
export const notificationReducer = notificationSlice.reducer
export const notificationSelector = (state) => state.notificationReducer.message