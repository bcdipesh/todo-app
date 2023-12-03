import "./Todo.css";

function Todo({ task, handleRemove }) {
  return (
    <div className="Todo">
      <p>{task}</p>
      <button type="button" className="Todo-remove-btn" onClick={handleRemove}>
        X
      </button>
    </div>
  );
}

export default Todo;
