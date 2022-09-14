import { FC } from "react";
import styled from "styled-components";
import { colorValue, fontSizeValue } from "../theme";
import { CalculatorOperations } from "../types";

type ButtonProps = {
  value: CalculatorOperations;
  onClick: (operation: CalculatorOperations) => void;
};

const StyledButton = styled.button`
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;

  background-color: ${colorValue("buttonBackground")};
  color: ${colorValue("buttonForeground")};
  font-size: ${fontSizeValue(2)};
  border-radius: 4px;

  &:hover,
  &:focus {
    background-color: ${colorValue("buttonFocusBackground")};
  }
`;

export const Button: FC<ButtonProps> = ({ value, onClick }) => {
  return (
    <StyledButton
      onClick={() => {
        onClick(value);
      }}
    >
      {value}
    </StyledButton>
  );
};
