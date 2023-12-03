import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

function addTodo(todoList, task = "testing") {
  const todoTaskInput = todoList.getByLabelText("Todo Task:");
  fireEvent.change(todoTaskInput, { target: { value: task } });
  const addTodoBtn = todoList.getByText("Add Todo");
  fireEvent.click(addTodoBtn);
}

it("renders without crashing", function () {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a todo", function () {
  const todoList = render(<TodoList />);
  addTodo(todoList);

  expect(todoList.getByText("testing")).toBeInTheDocument();
  expect(todoList.getByText("X")).toBeInTheDocument();
});

it("can remove a todo", function () {
  const todoList = render(<TodoList />);
  addTodo(todoList);

  fireEvent.click(todoList.getByText("X"));
  expect(todoList.queryByText("testing")).not.toBeInTheDocument();
});
