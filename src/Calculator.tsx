import { useState } from "react";
import styled from "styled-components";
import { Result, Button } from "./components";
import { calculate } from "./lib";
import { colorValue } from "./theme";
import { CalculatorOperations } from "./types";

const StyledCalculator = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;

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
  padding: 0;
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

    if (operation === 0 && currentResult === "0") {
      return;
    }

    const newActions = [...previousActions, operation];
    setAction(newActions);
    setResult(newActions.join(""));
  };

  return (
    <StyledCalculator>
      <header>
        <svg viewBox="0 0 3100 834">
          <path
            style={{ fill: "rgb(0, 148, 215)" }}
            d="M1367.7 19.6l-5.1 71.7H1229v62.9h117.9v71.2H1229v65h135.2V362h-215.4V19.6zM261.4 250.3h382.7v114.8H261.4zM261.4 475.2h382.7v114.9H261.4z"
          />
          <path
            style={{ fill: "rgb(0, 148, 215)" }}
            d="M14.4 25.7V816.3h346V701.4H129.3V140.6h231.1V25.7H129.3zM776.3 25.7H538.7v114.9h237.6v560.8H538.7v114.9h352.4V25.7zM1412.4 189.8c0-107.2 37.6-178.3 142.8-178.3 105.7 0 142.7 71.1 142.7 178.3v1.5c0 74.7-17.8 131.1-64 159.5l51.8 60.4-69.6 35.6-50.3-77.2c-3.1.5-7.1.5-10.7.5-105.1 0-142.8-71.1-142.8-178.8v-1.5zm84.3 1c0 70.6 15.2 106.7 58.4 106.7s58.9-36.1 58.9-106.7c0-70.1-15.8-106.7-58.9-106.7-43.1 0-58.4 36.6-58.4 106.7M1833.5 19.1v208.3c0 46.8 9.6 70.1 50.8 70.1 41.7 0 50.8-23.3 50.8-70.1V19.1h80.3v212.3c0 90.4-31.5 138.7-131.1 138.7s-131-48.3-131-138.7V19.1h80.2zM2236.4 19.6c27.4 71.6 75.2 219.5 108.7 342.4h-81.8l-14.7-65h-104.1l-14.8 65h-81.3c31.5-122.9 80.3-270.8 108.2-342.4h79.8zm-41.2 94c-12.7 38.1-22.8 75.2-32.5 111.7h67.6c-10.7-36.6-20.3-73.7-32.5-111.7h-2.6zM2469.5 19.6v270.8h135.1V362h-215.4V19.6zM1367.7 474.6l-5.1 71.6H1229v63h117.9v71.1H1229v65.1h135.2V817h-215.4V474.6zM1494.2 474.6c14.8 30 36.6 72.2 54.8 104.2h1.5c18.8-30.5 41.1-74.2 55.4-104.2h90.4c-23.8 48.8-61.4 113.3-96 170.2L1703.5 817h-96l-55.9-104.1h-1.5L1493.2 817h-94.5l101.1-172.7c-32-54.3-72.1-127.5-95.5-169.7h89.9zM1835.6 474.6c30 0 60 2 82.8 9.7 38.1 13.7 63 51.3 63 104.2 0 77.7-49.3 116.3-132.1 116.3H1827V817h-80.3V474.6h88.9zm-8.6 158.5h15.7c34.6 0 54.4-4.1 54.4-44.7 0-15.3-5.6-28.5-14.7-34.6-9.1-6.1-21.3-7.6-38.6-7.6H1827v86.9zM2252.6 474.6l-5.1 71.6h-133.6v63h117.9v71.1h-117.9v65.1h135.2V817h-215.4V474.6zM2398.4 474.6c30 0 60 2 82.8 9.7 38.1 13.7 63 51.3 63 104.1 0 47.3-18.3 80.3-51.3 98.5l61.9 130.1h-83.3l-49.3-112.8c-5.6.5-13.2.5-20.3.5h-12.2V817h-80.3V474.6h89zm-8.6 160h15.7c34.6 0 54.4-5.6 54.4-46.2 0-15.3-5.6-29.5-14.7-35.6-9.2-6.1-20.4-7.6-38.7-7.6h-16.7v89.4zM2825.6 474.6l-5.1 71.6h-81.8V817h-80.2V546.2h-83.9v-71.6zM3065.9 559.9c-24.4-12.7-52.8-20.3-78.8-20.3-12.2 0-22.8 1.5-29.4 5.1-10.7 4.6-14.8 12.7-14.8 22.3 0 18.3 18.3 29 43.2 39.1l28.5 11.2c50.8 20.3 74.7 47.7 74.7 97.5 0 79.2-57.9 110.2-127.5 110.2-30.5 0-66.6-6.6-95-16.2l3.6-77.2c24.9 12.2 61 20.8 83.8 20.8 36.6 0 50.8-9.2 50.8-30 0-19.8-13.2-28.4-42.2-40.1l-28.4-11.2c-41.2-16.3-75.7-45.2-75.7-102.1 0-56.4 41.2-102.7 124.5-102.7 33.5 0 67.6 9.2 87.4 17.3l-4.7 76.3z"
          />
        </svg>
      </header>
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
