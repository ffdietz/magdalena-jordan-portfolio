import { Flex, Image, Link, Stack, Text } from "@chakra-ui/react";
import { homeText, mJordan, sections } from "@content";
import homeImage from "/assets/image-000.jpg";
import { Section } from "@layout/section";

const Home = () => {
  return (
    <Section id={sections["home"].id}>
      <Flex justifyContent="space-evenly" columnGap={20} p={32} my="auto">
        <Stack fontFamily="Andale Mono">
          <Text fontSize={26}>{mJordan}</Text>
          <Text w="md" fontSize={18}>
            {homeText}
          </Text>
        </Stack>
        <Link>
          <Image
            src={homeImage}
            alt="stop-war"
            boxSize="full"
            objectFit="contain"
            objectPosition="right top"
            right={0}
          />
        </Link>
      </Flex>
    </Section>
  );
};

export default Home;
