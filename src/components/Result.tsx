import { FC } from "react";
import styled from "styled-components";
import { fontSizeValue } from "../theme";

type ResultProps = { value: string };

const StyledResult = styled.div`
  padding: 16px;
  font-size: ${fontSizeValue(3)};
  font-weight: 700;
`;

export const Result: FC<ResultProps> = ({ value }) => {
  return (
    <StyledResult aria-label={`The calculated result is ${value}`}>
      {value}
    </StyledResult>
  );
};
