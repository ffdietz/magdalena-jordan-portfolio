import { Flex, Image, Text } from "@chakra-ui/react";
import { biography, sections } from "@content";
import { Section } from "@layout/section";

const Biography = () => {
  return (
    <Section id={sections["biography"].id}>
      <Flex
        w="full"
        justifyContent="space-evenly"
        align="center"
        m="auto"
      >
        <Image
          src=""
          alt="bio-image"
          boxSize="md"
          w="xs"
          border="1px"
          borderColor="blue"
        />
        <Text
          w="xl"
          fontFamily="Andale Mono"
          fontSize={22}
          whiteSpace="break-spaces"
        >
          {biography}
        </Text>
      </Flex>
    </Section>
  );
};

export default Biography;
