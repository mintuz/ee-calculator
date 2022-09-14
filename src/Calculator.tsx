import { useState } from "react";
import styled from "styled-components";
import { Result, Button } from "./components";
import { calculate } from "./lib";
import { CalculatorOperations } from "./types";

const StyledCalculator = styled.div`
  max-width: 300px;
  width: 100%;
  background-color: rgb(255, 255, 255);
`;

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
      <div>
        <Button onClick={calculateOnClick}>0</Button>
        <Button onClick={calculateOnClick}>1</Button>
        <Button onClick={calculateOnClick}>2</Button>
        <Button onClick={calculateOnClick}>3</Button>
        <Button onClick={calculateOnClick}>4</Button>
        <Button onClick={calculateOnClick}>5</Button>
        <Button onClick={calculateOnClick}>6</Button>
        <Button onClick={calculateOnClick}>7</Button>
        <Button onClick={calculateOnClick}>8</Button>
        <Button onClick={calculateOnClick}>9</Button>
        <Button onClick={calculateOnClick}>.</Button>
        <Button onClick={calculateOnClick}>AC</Button>
        <Button onClick={calculateOnClick}>=</Button>
        <Button onClick={calculateOnClick}>+</Button>
        <Button onClick={calculateOnClick}>-</Button>
        <Button onClick={calculateOnClick}>/</Button>
        <Button onClick={calculateOnClick}>*</Button>
      </div>
    </StyledCalculator>
  );
};
