import { forwardRef } from "react";
import {
  BiographyContainer,
  BiographyImage,
  BiographyText,
} from "./style";
import { ViewLayout } from "../../styles/LayoutView";

const Biography = forwardRef(({ props, ref }) => {
  return (
    <ViewLayout ref={ref}>
      <BiographyContainer>
        <BiographyImage src={""} alt="bio-image" />

        <BiographyText>
          Magdalena Jordán (Santiago de Chile, 1986) es Licenciada en Artes
          Visuales de la Universidad de Chile (2010) y Comunicadora Audiovisual
          de I.P ARCOS (2012).
          <br />
          De especialidad pintora, indaga en su obra la pertinencia del lenguaje
          narrativo en la pintura figurativa. Durante los últimos años,
          investiga en su obra sobre la representación de la identidad, la
          cultura y la memoria en el género del paisaje.
        </BiographyText>
      </BiographyContainer>
    </ViewLayout>
  );
});

export default Biography;
