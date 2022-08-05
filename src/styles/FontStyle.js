import { createGlobalStyle } from "styled-components";
import AndaleMonoV2 from '../resources/fonts/AndaleMonoV2.woff';
import AndaleMonoV2w2 from '../resources/fonts/AndaleMonoV2.woff2';

const FontStyle = createGlobalStyle`
  @font-face {
    font-family: 'Andale Mono';
    src:  url(${AndaleMonoV2}) format('woff'),
          url(${AndaleMonoV2w2}) format('woff2);
  }

  body {
    font-family: 'Andale Mono', sans-serif;
  }

`;

export default FontStyle;