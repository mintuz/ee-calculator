import { modularScale, darken } from "polished";
import { DefaultTheme } from "styled-components";

const designTokens = {
  colors: {
    black: "rgb(33, 33, 33)",
    white: "rgb(255, 255, 255)",
    transparent: "transparent",
    brand: "rgb(0, 148, 215)",
    grey: "rgb(240, 240, 240)",
  },
};

export const theme: DefaultTheme = {
  fontFamily: "'Montserrat', sans-serif",
  baseFontSize: "1rem",
  baseLineHeight: 1.5,
  fontSizes: [
    modularScale(-1, "1rem"),
    modularScale(0, "1rem"),
    modularScale(1, "1rem"),
    modularScale(2, "1rem"),
  ],
  colors: {
    accent: designTokens.colors.brand,
    siteBackground: designTokens.colors.grey,
    calculatorBackground: designTokens.colors.white,
    buttonBackground: designTokens.colors.brand,
    buttonForeground: designTokens.colors.white,
    buttonFocusBackground: darken(0.2, designTokens.colors.brand),
  },
};

export const colorValue = (colorName: keyof DefaultTheme["colors"]) => {
  return ({ theme }: { theme: DefaultTheme }) => theme.colors[colorName];
};

export const fontSizeValue = (scale: 0 | 1 | 2 | 3) => {
  return ({ theme }: { theme: DefaultTheme }) => theme.fontSizes[scale];
};
