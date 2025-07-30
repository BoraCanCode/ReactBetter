
export const ADD_NOTE = 'Add_Note';
export const DELETE_NOTE = 'Delete_Note'

export const addNote = (text) => ({ text, type: ADD_NOTE })
export const deleteNote = (index) => ({ index, type: DELETE_NOTE })