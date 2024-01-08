import { css } from "styled-components";

import AndaleMonoV2 from '/fonts/AndaleMonoV2.woff';
import AndaleMonoV2W2 from '/fonts/AndaleMonoV2.woff2';

import MonumentExtended from '/fonts/MonumentExtended.woff';
import MonumentExtendedW2 from '/fonts/MonumentExtended.woff2';

import NeueMachinaLight from '/fonts/NeueMachinaLight.woff';
import NeueMachinaLightW2 from '/fonts/NeueMachinaLight.woff2';

const Fonts = css`
  @font-face {
    font-family: 'Andale Mono';
    src:
      url(${AndaleMonoV2}) format('woff'),
      url(${AndaleMonoV2W2}) format('woff2');
  }

  @font-face {
    font-family: 'Monument Extended';
    src:
      url(${MonumentExtended}) format('woff'),
      url(${MonumentExtendedW2}) format('woff2');
  }

  @font-face {
    font-family: 'Neue Machina Light';
    src:
      url(${NeueMachinaLight}) format('woff'),
      url(${NeueMachinaLightW2}) format('woff2');
  }
`

export default Fonts;
