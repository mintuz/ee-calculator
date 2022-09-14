import { FC } from "react";
import { CalculatorOperations } from "../types";

type ButtonProps = {
  value: CalculatorOperations;
  onClick: (operation: CalculatorOperations) => void;
};

export const Button: FC<ButtonProps> = ({ value, onClick }) => {
  return (
    <button
      onClick={() => {
        onClick(value);
      }}
    >
      {value}
    </button>
  );
};
