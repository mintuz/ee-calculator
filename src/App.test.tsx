import { fireEvent, render, screen } from "@testing-library/react";
import { App } from "./App";

test("Output is initially set to 0", () => {
  render(<App />);
  expect(screen.getByText("The calculated result is 0")).toBeInTheDocument();
});

test("Calculator buttons are available and clickable", () => {
  render(<App />);

  const availableDigits = [
    "9",
    ".",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0",
  ];

  availableDigits.forEach((digit) => {
    fireEvent.click(screen.getByText(digit));
  });

  expect(
    screen.getByText("The calculated result is 9.876543210")
  ).toBeInTheDocument();
});
