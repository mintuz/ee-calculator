import "styled-components";

// See: https://styled-components.com/docs/api#create-a-declarations-file
declare module "styled-components" {
  export interface DefaultTheme {
    baseLineHeight: number;
    fontFamily: string;
    fontSizes: [string, string, string, string];
    baseFontSize: string;
    colors: {
      siteBackground: string;
      calculatorBackground: string;
      border: string;
      buttonBackground: string;
      buttonForeground: string;
      buttonFocusBackground: string;
    };
  }
}
