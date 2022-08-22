import { createGlobalStyle } from "styled-components";
import fonts from "./fonts";

const GlobalStyle = createGlobalStyle`
  ${fonts};
  /* $´{variables} */

:root {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 62.5%;
}

body {
  font-family: 'Monument Extended';
  font-size: 1.6rem;
  margin: 0;
  padding: 0;
  
  display: flex;
  flex-direction: column;
  background-color: white;
  overflow-x: hidden;
}
`;

export default GlobalStyle;