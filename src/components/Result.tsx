import { FC } from "react";
import styled from "styled-components";
import { colorValue, fontSizeValue } from "../theme";

type ResultProps = { value: string };

const StyledResult = styled.div`
  padding: 8px;
  font-size: ${fontSizeValue(3)};
  font-weight: 700;
  border: 2px solid ${colorValue("border")};
  border-radius: 4px;
  overflow-x: auto;
`;

export const Result: FC<ResultProps> = ({ value }) => {
  return (
    <StyledResult aria-label={`The calculated result is ${value}`}>
      {value}
    </StyledResult>
  );
};
