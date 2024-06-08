import React, { useState } from "react";

function TodoList() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  function handleAddTodo(event) {
    event.preventDefault();

    setTodos([...todos, todoInput]);
    setTodoInput("");
  }

  function handleRemoveTodo(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);

    setTodos(updatedTodos);
  }

  function handleResetTodos() {
    setTodos([]);
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          data-testid="todo-input"
          name="todo"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <button onClick={handleResetTodos}>Reset</button> {}
      <ul data-testid="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button> {}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
