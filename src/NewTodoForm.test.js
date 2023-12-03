import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("renders without crashing", function () {
  render(<NewTodoForm />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

it("runs the handleSubmit function on form submit", function () {
  const mockHandleSubmit = jest.fn();
  const { getByText } = render(<NewTodoForm handleSubmit={mockHandleSubmit} />);
  const addTodoBtn = getByText("Add Todo");
  fireEvent.click(addTodoBtn);
  expect(mockHandleSubmit).toHaveBeenCalled();
});
