import "./NewTodoForm.css";

function NewTodoForm({ handleChange, handleSubmit }) {
  return (
    <div className="NewTodoForm">
      <form onSubmit={handleSubmit}>
        <input
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
