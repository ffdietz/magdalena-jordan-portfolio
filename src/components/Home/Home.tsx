import { heroText } from "@content";
import homeImage from "/assets/image-000.jpg";
import { Flex, Image, Stack, Text } from "@chakra-ui/react";

const Home = (() => {
  return (
    <Stack p={32}>
      <Flex w="full" h="5xl" position="relative">
        <Text
          fontFamily="Monument Extended"
          fontSize={40}
          w="4xl"
          dangerouslySetInnerHTML={{ __html: heroText }}
        />
        <Image
          src={homeImage}
          alt=""
          position="absolute"
          flex={1}
          boxSize="6xl"
          objectFit="contain"
          objectPosition="right bottom"
          bottom={0}
          right={0}
        />
      </Flex>
    </Stack>
  );
});

export default Home;
