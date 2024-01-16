import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import { biography, sections } from "../../content";

const Biography = (() => {
  return (
    <Stack id={sections["biography"].id}>
      <Flex minH="3xl" justifyContent="space-evenly" align="center" p={24}>
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
    </Stack>
  );
});

export default Biography;
