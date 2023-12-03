import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

import "./TodoList.css";

function TodoList() {
  const INITIAL_STATE = { "todo-task": "" };
  const [formState, setFormState] = useState(INITIAL_STATE);
  const [todoList, setTodoList] = useState([]);

  function handleChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodoList([...todoList, { task: formState["todo-task"] }]);
    setFormState(INITIAL_STATE);
  }

  function handleRemove(key) {
    setTodoList(todoList.filter((todoItem, idx) => idx !== key));
  }

  return (
    <div className="TodoList">
      <NewTodoForm handleChange={handleChange} handleSubmit={handleSubmit} />
      {todoList.length !== 0
        ? todoList.map(function (todoItem, idx) {
            return (
              <Todo
                key={idx}
                task={todoItem.task}
                handleRemove={() => handleRemove(idx)}
              />
            );
          })
        : ""}
    </div>
  );
}

export default TodoList;
