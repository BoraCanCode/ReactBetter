import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    message: ''
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase('todo/add', (state, action) => {
            state.message = 'Todo is created'
        })
    }
})
export const notificationReducer = notificationSlice.reducer
export const notificationSelector = (state) => state.notificationReducer.message