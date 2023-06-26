import { createGlobalStyle, CSSProp } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {}
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans';
  }

  body {
    background-color: #1e192c;
    color: #ffffff;
  }
` as React.FC<{}> & CSSProp;