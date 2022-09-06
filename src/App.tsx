import styled, { createGlobalStyle } from "styled-components";
import { Calculator } from "./Calculator";

const GlobalResetStyle = createGlobalStyle`
  /**
  Reset taken from https://www.joshwcomeau.com/css/custom-css-reset/
  */

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root {
    isolation: isolate;
  }
`;

const GlobalAppStyles = createGlobalStyle`
  body {
    background-color: rgb(240, 240, 240);
  }
`;

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const App = () => {
  return (
    <>
      <GlobalResetStyle />
      <GlobalAppStyles />
      <StyledApp>
        <Calculator />
      </StyledApp>
    </>
  );
};
