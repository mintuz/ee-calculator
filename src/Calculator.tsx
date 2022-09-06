import styled from "styled-components";

const StyledCalculator = styled.div`
  max-width: 300px;
  width: 100%;
  background-color: rgb(255, 255, 255);
`;

const StyledResult = styled.div`
  padding: 16px;
`;

export const Calculator = () => {
  return (
    <StyledCalculator>
      <StyledResult>
        <span>The calculated result is</span> 40
      </StyledResult>
      <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>.</button>

        <button>+</button>
        <button>-</button>
        <button>/</button>
        <button>*</button>

        <button>=</button>
        <button>AC</button>
      </div>
    </StyledCalculator>
  );
};
