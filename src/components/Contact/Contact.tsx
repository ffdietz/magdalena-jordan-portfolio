import { contact, sections } from "@content";
import { Stack, Text } from "@chakra-ui/react";


const Contact = (() => {
  return (
    <Stack id={sections[2].id} h="2xl" mb={48}>
      <Stack m="auto">
        {Object.values(contact).map((field) => (
          <Text 
            key={field}
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
