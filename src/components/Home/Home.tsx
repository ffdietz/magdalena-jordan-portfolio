import { heroText, sections } from "@content";
import homeImage from "/assets/image-000.jpg";
import { Flex, Image, Stack, Text } from "@chakra-ui/react";

const Home = (() => {
  return (
    <Stack id={sections["home"].id} p={32}>
      <Flex w="full" h="xl" position="relative">
        <Text
          fontFamily="Monument Extended"
          fontSize={24}
          w="xl"
          dangerouslySetInnerHTML={{ __html: heroText }}
        />
        <Image
          src={homeImage}
          alt="stop-war"
          position="absolute"
          flex={1}
          boxSize="2xl"
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
