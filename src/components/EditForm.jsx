import React, { useState } from "react";

const TodoForm = ({ editTodos, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodos(value);
    setValue("");
  };

  return (
    <div>
      <form className="todoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="Update Task"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button type="submit" className="todo-btn">
          Update Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
