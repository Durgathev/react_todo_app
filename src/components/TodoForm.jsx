import React, { useState } from "react";

const TodoForm = ({ addTodos }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodos(value);
    setValue("");
  };

  return (
    <div>
      <form className="todoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="What's the task today?"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
