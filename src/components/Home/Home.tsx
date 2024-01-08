import { forwardRef } from "react";
import { ViewLayout } from "../../styles/LayoutView";
import { HomeContainer, HomeImage, HomeText } from "./style";

import homeImage from "/assets/image-000.jpg";

const Home = forwardRef((props, ref) => {
  return (
    <ViewLayout ref={ref}>
      <HomeContainer>
        <HomeText>
          Magdalena Jordán Artista<br />
          Visual Lorem ipsum dolor sit<br />
          amet, consectetuer adipiscing<br />
          elit, sed diam <span>proyectos</span> nibh<br />
          euismod tincidunt<br />
        </HomeText>

        <HomeImage src={homeImage} alt="" />
      </HomeContainer>
    </ViewLayout>
  );
});

export default Home;
