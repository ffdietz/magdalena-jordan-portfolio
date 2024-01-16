import { contact, sections } from "@content";
import { Stack, Text } from "@chakra-ui/react";


const Contact = (() => {
  return (
    <Stack id={sections["contact"].id} h="2xl" p={28} pt={18} align="center">
      <Stack m="auto">
        {Object.values(contact).map((field) => (
          <Text
            key={field}
            fontFamily="Monument Extended"
            textAlign="center"
            fontSize={36}
          >
            {field}
          </Text>
        ))}
      </Stack>
    </Stack>
  );
});

export default Contact;
