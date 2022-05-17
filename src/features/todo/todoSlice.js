import { createSlice } from "@reduxjs/toolkit";
import { v4 as generateUniqueId } from 'uuid';

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            console.log('state', state);
            console.log('action', action);
            const id = generateUniqueId();
            console.log('id', id);
            state.todos.push({id, description: action.payload});
        },
        deleteTodo: (state, action) => {
            console.log('state', state);
            console.log('action', action);
            state.todos = state.todos.filter(t => t.id !== action.payload);
        }
    }
});

export const selectTodos = (state) => state.todo.todos;
export const {addTodo, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;