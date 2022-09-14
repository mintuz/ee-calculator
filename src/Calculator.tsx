import { FC, useState } from "react";
import styled from "styled-components";

const StyledCalculator = styled.div`
  max-width: 300px;
  width: 100%;
  background-color: rgb(255, 255, 255);
`;

const StyledResult = styled.div`
  padding: 16px;
`;

type CalculatorOperations =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 0
  | "+"
  | "-"
  | "*"
  | "/"
  | "="
  | "AC";

type ButtonProps = {
  children: string | number;
  onClick: (operation: CalculatorOperations) => void;
};

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={() => {
        onClick(children);
      }}
    >
      {children}
    </button>
  );
};

export const Calculator = () => {
  const [previousActions, setAction] = useState<CalculatorOperations[]>([]);
  const [currentResult, setResult] = useState<string>("0");

  const calculate = (operation: CalculatorOperations) => {
    const newActions = [...previousActions, operation];
    setAction(newActions);
    setResult(newActions.join(""));
  };

  return (
    <StyledCalculator>
      <StyledResult>The calculated result is {currentResult}</StyledResult>
      <div>
        <Button onClick={calculate}>0</Button>
        <Button onClick={calculate}>1</Button>
        <Button onClick={calculate}>2</Button>
        <Button onClick={calculate}>3</Button>
        <Button onClick={calculate}>4</Button>
        <Button onClick={calculate}>5</Button>
        <Button onClick={calculate}>6</Button>
        <Button onClick={calculate}>7</Button>
        <Button onClick={calculate}>8</Button>
        <Button onClick={calculate}>9</Button>
        <Button onClick={calculate}>.</Button>
        {/* <Button>+</Button>
        <Button>-</Button>
        <Button>/</Button>
        <Button>*</Button>

        <Button>=</Button>
        <Button>AC</Button> */}
      </div>
    </StyledCalculator>
  );
};
