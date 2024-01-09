import homeImage from "/assets/image-000.jpg";
import { Image, Stack, Text } from "@chakra-ui/react";

const Home = (() => {
  return (
    <Stack w="full" p={32}>
      <Text fontSize={32}>
        Magdalena Jordán Artista<br />
        Visual Lorem ipsum dolor sit<br />
        amet, consectetuer adipiscing<br />
        elit, sed diam <span>proyectos</span> nibh<br />
        euismod tincidunt<br />
      </Text>
      <Image src={homeImage} alt="" width="4xl"/>
    </Stack>
  );
});

export default Home;
