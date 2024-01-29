import { Stack, Text } from "@chakra-ui/react";
import { contact, sections } from "@content";
import { Section } from "@layout/section";

const Contact = () => {
  return (
    <Section id={sections["contact"].id}>
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
    </Section>
  );
};

export default Contact;
