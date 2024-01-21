import { homeText, mJordan, sections } from "@content";
import homeImage from "/assets/image-000.jpg";
import { Flex, Image, Link, Stack, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Stack id={sections["home"].id} p={64}>
      <Flex
        w="full"
        h="full"
        justifyContent="space-evenly"
        columnGap={20}
      >
        <Stack fontFamily="Andale Mono">
          <Text fontSize={26}>
            {mJordan}
          </Text>
          <Text w="md" fontSize={18}>
            {homeText}
          </Text>
        </Stack>
        <Link>
          <Image
            src={homeImage}
            alt="stop-war"
            boxSize="auto"
            objectFit="contain"
            objectPosition="right top"
            right={0}
          />
        </Link>
      </Flex>
    </Stack>
  );
};

export default Home;
