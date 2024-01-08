import { ContactInfo } from "./style";
import { Stack } from "@chakra-ui/react";
import { sections } from "../../content";

const Contact = (() => {
  return (
    <Stack id={sections[2].id}>
      <ContactInfo>
        Magdalena Jordán Artista
        <br />
        Av. Siempre viva 742, Sprinfield
        <br />
        magdalenajordan.arte@gmail.com
        <br />
        +34 634 60 92 37
      </ContactInfo>
    </Stack>
  );
});

export default Contact;
