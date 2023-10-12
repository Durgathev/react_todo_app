import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditForm from "./EditForm";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((newtodo) => [
      ...newtodo,
      { id: uuidv4(), task: todo, completed: false, isediting: false },
    ]);
  };

  const setToggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isediting: !todo.isediting } : todo
      )
    );
  };

  const updateTodo = (updateTask) => {
    setTodos(
      todos.map((todo) =>
        todo.isediting == true
          ? { ...todo, task: updateTask, isediting: !todo.isediting }
          : todo
      )
    );
  };
  return (
    <div className="TodoWrapper">
      <TodoForm addTodos={addTodo} />
      {todos.map((todo, index) =>
        todo.isediting == true ? (
          <EditForm key={index} editTodos={updateTodo} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleCompleted={setToggleCompleted}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
