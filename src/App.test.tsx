import { fireEvent, render, screen } from "@testing-library/react";
import { App } from "./App";

test("Output is initially set to 0", () => {
  render(<App />);
  expect(screen.getByLabelText("The calculated result is 0").innerHTML).toEqual(
    "0"
  );
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
    fireEvent.click(screen.getByRole("button", { name: digit }));
  });

  expect(
    screen.getByLabelText("The calculated result is 9.876543210").innerHTML
  ).toEqual("9.876543210");
});

test("Result is reset on memory clear", () => {
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: "1" }));
  fireEvent.click(screen.getByRole("button", { name: "2" }));

  expect(
    screen.getByLabelText("The calculated result is 12").innerHTML
  ).toEqual("12");

  fireEvent.click(screen.getByRole("button", { name: "AC" }));

  expect(screen.getByLabelText("The calculated result is 0").innerHTML).toEqual(
    "0"
  );
});

test.each([
  ["1+1=", "2"],
  ["1-1=", "0"],
  ["2*2=", "4"],
  ["2/2=", "1"],
  ["200*2=", "400"],
  ["200+200=", "400"],
  ["200-100=", "100"],
  ["200/2=", "100"],
  ["200/0=", "0"],
  ["2+2=+2=", "6"],
  ["2+0.5=", "2.5"],
  ["2-0.5=", "1.5"],
  ["2-3=", "-1"],
  ["2-3=+1=", "0"],
  ["1.5+1.5=", "3"],
])(
  "The calculation is correct for the following button presses (%s)",
  (expression, expectedValue) => {
    render(<App />);

    expression.split("").forEach((buttonToClick) => {
      fireEvent.click(screen.getByRole("button", { name: buttonToClick }));
    });

    expect(
      screen.getByLabelText(`The calculated result is ${expectedValue}`)
        .innerHTML
    ).toEqual(expectedValue);
  }
);

test("Trailing zeros are removed.", () => {
  render(<App />);

  const zeroDigit = screen.getByRole("button", { name: "0" });
  const oneDigit = screen.getByRole("button", { name: "1" });

  fireEvent.click(zeroDigit);
  fireEvent.click(zeroDigit);

  expect(screen.getByLabelText("The calculated result is 0").innerHTML).toEqual(
    "0"
  );

  fireEvent.click(oneDigit);

  expect(screen.getByLabelText("The calculated result is 1").innerHTML).toEqual(
    "1"
  );
});

test("Calculate Factorial", () => {
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: "6" }));
  fireEvent.click(screen.getByRole("button", { name: "x!" }));

  expect(
    screen.getByLabelText("The calculated result is 720").innerHTML
  ).toEqual("720");
});
