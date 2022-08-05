import { createGlobalStyle } from "styled-components";
import AndaleMonoV2 from '../resources/fonts/AndaleMonoV2.woff';
import AndaleMonoV2W2 from '../resources/fonts/AndaleMonoV2.woff2';
import MonumentExtended from '../resources/fonts/MonumentExtended.woff';
import MonumentExtendedW2 from '../resources/fonts/MonumentExtended.woff2';

const FontStyle = createGlobalStyle`
  @font-face {
    font-family: 'Andale Mono';
    src:  url(${AndaleMonoV2}) format('woff'),
          url(${AndaleMonoV2W2}) format('woff2);
  }

  @font-face {
    font-family: 'Monument Extended';
    src:  url(${MonumentExtended}) format('woff'),
          url(${MonumentExtendedW2}) format('woff2);
  }

`;

export default FontStyle;