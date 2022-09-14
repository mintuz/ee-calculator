import React, { FC } from "react";
import styled from "styled-components";

type ResultProps = { value: string };

const StyledResult = styled.div`
  padding: 16px;
`;

export const Result: FC<ResultProps> = ({ value }) => {
  return <StyledResult>The calculated result is {value}</StyledResult>;
};
