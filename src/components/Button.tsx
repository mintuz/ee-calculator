import { FC } from "react";
import { CalculatorOperations } from "../types";

type ButtonProps = {
  children: string | number;
  onClick: (operation: CalculatorOperations) => void;
};

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
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
