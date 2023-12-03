import "./NewTodoForm.css";

function NewTodoForm({ handleChange, handleSubmit }) {
  return (
    <div className="NewTodoForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo-task">Todo Task: </label>
        <input
          id="todo-task"
          className="NewTodoForm-todo-task"
          type="text"
          name="todo-task"
          placeholder="Add task..."
          onChange={handleChange}
        />

        <button className="NewTodoForm-add-todo-btn" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default NewTodoForm;
