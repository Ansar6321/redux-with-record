import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, selectTodos } from './features/todo/todoSlice';

function App() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const description = formData.get('desc');
    form.reset();
    console.log(description);

    // call dispatch with action "addTodo" using value of our form "description".
    // dispatch will perform reducing on state
    dispatch(addTodo(description));
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name='desc' />
        <button>Add</button>
      </form>
      <ul>
        {todos.map(t => <li key={t.id} onClick={e => dispatch(deleteTodo(t.id))}>{t.description}</li>)}
      </ul>
    </>
  );
}

export default App;
