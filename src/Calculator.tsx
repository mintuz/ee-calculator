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
        <Button onClick={calculateOnClick} value={0} />
        <Button onClick={calculateOnClick} value={1} />
        <Button onClick={calculateOnClick} value={2} />
        <Button onClick={calculateOnClick} value={3} />
        <Button onClick={calculateOnClick} value={4} />
        <Button onClick={calculateOnClick} value={5} />
        <Button onClick={calculateOnClick} value={6} />
        <Button onClick={calculateOnClick} value={7} />
        <Button onClick={calculateOnClick} value={8} />
        <Button onClick={calculateOnClick} value={9} />
        <Button onClick={calculateOnClick} value="." />
        <Button onClick={calculateOnClick} value="AC" />
        <Button onClick={calculateOnClick} value="=" />
        <Button onClick={calculateOnClick} value="+" />
        <Button onClick={calculateOnClick} value="-" />
        <Button onClick={calculateOnClick} value="*" />
        <Button onClick={calculateOnClick} value="/" />
      </div>
    </StyledCalculator>
  );
};
