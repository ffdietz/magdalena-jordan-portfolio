import { sections } from "@content";
import { ContactInfo } from "./style";
import { Stack } from "@chakra-ui/react";


const Contact = (() => {
  return (
    <Stack id={sections[2].id} h="3xl" p={32}>
      <ContactInfo>
        Magdalena Jordán Artista<br />
        Av. Siempre viva 742, Sprinfield<br />
        magdalenajordan.arte@gmail.com<br />
        +34 634 60 92 37
      </ContactInfo>
    </Stack>
  );
});

export default Contact;
