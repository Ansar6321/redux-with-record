import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectTodos } from '../features/todo/todoSlice';

const Detail = () => {
    const params = useParams();
    const todo = useSelector(state => state.todo.todos.filter(t => t.id === params.id)[0]);

    return (
        <>
            <div >{todo.id} - {todo.description}</div>
        </>
    )
}

export default Detail