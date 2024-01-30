import { Flex, Image, Text } from "@chakra-ui/react";
import { biographyExtended, sections } from "@content";
import { Section } from "@layout/section";

const Biography = () => {
  return (
    <Section id={sections["biography"].id}>
      <Flex w="full" justifyContent="space-evenly" align="center" m="auto">
        <Image
          src=""
          alt="bio-image"
          boxSize="lg"
          w="xs"
          border="1px"
          borderColor="blue"
        />
          <Text
            w="xl"
            fontFamily="Andale Mono"
            fontSize={11}
            textAlign="justify"
            whiteSpace="break-spaces"
            sx={{
              columnCount: 2,
              columnGap: 8,
              width: "60%",
            }}
          >
            {biographyExtended}
          </Text>
      </Flex>
    </Section>
  );
};

export default Biography;
