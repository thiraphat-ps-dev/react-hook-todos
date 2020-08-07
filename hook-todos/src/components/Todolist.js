import React, { useState } from 'react';

export default function Todolist() {
  const intialState = { todo: '', completed: false };
  const [todos, setTodos] = useState(intialState);
  const [todosList, setTodosList] = useState([]);

  return (
    <div style={{ textAlign: 'center' }}>
      <div className="header">
        <h1>Todolist-react-hook</h1>
      </div>
      <form>
        <input
          type="text"
          placeholder="Todo"
          value={todos.todo}
          onChange={(e) => setTodos({ ...todos, todo: e.target.value })}
        />
        <br />

        <button
          onClick={(e) => {
            e.preventDefault();
            setTodosList([...todosList, { index: todosList.length, ...todos }]);
            setTodos(intialState);
          }}
        >
          Submit
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setTodos(intialState);
          }}
        >
          Clear
        </button>
      </form>

      <ul>
        {todosList.map((item, i) => (
          <li key={i}>
            todo: {item.todo}, Completed:{' '}
            <button
              onClick={(e) => {
                setTodosList(
                  [...todosList],
                  (todosList[i].completed = !item.completed)
                );
              }}
            >
              {item.completed ? 'True' : 'False'}
            </button>
            <button
              onClick={(e) => {
                setTodosList(todosList.filter((item, index) => index !== i));
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
