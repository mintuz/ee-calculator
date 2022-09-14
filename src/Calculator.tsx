import { useState } from "react";
import styled from "styled-components";
import { Result, Button } from "./components";
import { calculate } from "./lib";
import { colorValue } from "./theme";
import { CalculatorOperations } from "./types";

const StyledCalculator = styled.div`
  max-width: 300px;
  width: 100%;
  background-color: ${colorValue("calculatorBackground")};
  border-radius: 4px;
`;

const StyledCalculatorControls = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "ac ac equals equals"
    "seven eight nine multiply"
    "four five six divide"
    "one two three add"
    "zero zero point subtract";
  gap: 8px;
  padding: 0 16px 16px 16px;
  list-style: none;
`;

const StyledCalculatorControl = styled.li<{ gridLocation: string }>`
  grid-area: ${({ gridLocation }) => gridLocation};
  > * {
    width: 100%;
    height: 100%;
  }
`;

const CONTROLS: { value: CalculatorOperations; gridLocation: string }[] = [
  { gridLocation: "zero", value: 0 },
  { gridLocation: "one", value: 1 },
  { gridLocation: "two", value: 2 },
  { gridLocation: "three", value: 3 },
  { gridLocation: "four", value: 4 },
  { gridLocation: "five", value: 5 },
  { gridLocation: "six", value: 6 },
  { gridLocation: "seven", value: 7 },
  { gridLocation: "eight", value: 8 },
  { gridLocation: "nine", value: 9 },
  { gridLocation: "ac", value: "AC" },
  { gridLocation: "equals", value: "=" },
  { gridLocation: "add", value: "+" },
  { gridLocation: "subtract", value: "-" },
  { gridLocation: "multiply", value: "*" },
  { gridLocation: "divide", value: "/" },
  { gridLocation: "point", value: "." },
];

export const Calculator = () => {
  const [previousActions, setAction] = useState<CalculatorOperations[]>([]);
  const [currentResult, setResult] = useState<string>("0");

  const calculateOnClick = (operation: CalculatorOperations) => {
    if (operation === "AC") {
      setResult("0");
      setAction([]);

      return;
    }

    if (operation === "=") {
      const expression = previousActions.join("");
      const result = calculate(expression);

      setResult(`${result}`);
      setAction([result]);

      return;
    }

    const newActions = [...previousActions, operation];
    setAction(newActions);
    setResult(newActions.join(""));
  };

  return (
    <StyledCalculator>
      <Result value={currentResult} />
      {/* See: https://bugs.webkit.org/show_bug.cgi?id=170179 */}
      <StyledCalculatorControls role="list">
        {CONTROLS.map(({ value, gridLocation }) => (
          <StyledCalculatorControl
            key={gridLocation}
            gridLocation={gridLocation}
          >
            <Button onClick={calculateOnClick} value={value} />
          </StyledCalculatorControl>
        ))}
      </StyledCalculatorControls>
    </StyledCalculator>
  );
};
