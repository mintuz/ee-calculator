import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Calculator } from "./Calculator";
import { GlobalResetStyle } from "./components";
import { colorValue, theme } from "./theme";

const GlobalAppStyles = createGlobalStyle`
  body {
    background-color: ${colorValue("siteBackground")};
    font-family: ${({ theme }) => theme.fontFamily};
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
    <ThemeProvider theme={theme}>
      <GlobalResetStyle />
      <GlobalAppStyles />
      <StyledApp>
        <Calculator />
      </StyledApp>
    </ThemeProvider>
  );
};
