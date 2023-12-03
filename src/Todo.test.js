import { fireEvent, render } from "@testing-library/react";
import Todo from "./Todo";

it("renders without crashing", function () {
  render(<Todo />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});

it("runs the handleRemove function on X button click", function () {
  const handleRemoveMock = jest.fn();
  const { getByText } = render(<Todo handleRemove={handleRemoveMock} />);
  const removeBtn = getByText("X");
  fireEvent.click(removeBtn);
  expect(handleRemoveMock).toHaveBeenCalled();
});
