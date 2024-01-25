import { contact, sections } from "@content";
import { Stack, Text } from "@chakra-ui/react";


const Contact = (() => {
  return (
    <Stack id={sections["contact"].id} minH="3xl">
      <Stack h="auto" alignItems="center" justifyContent="center" m="auto">
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
