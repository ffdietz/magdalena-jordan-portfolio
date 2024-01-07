import { forwardRef } from "react";
import { ContactInfo } from "./style";
import { ViewLayout } from "../../styles/LayoutView";

const Contact = forwardRef((props, ref) => {
  return (
    <ViewLayout ref={ref}>
      <ContactInfo>
        Magdalena Jordán Artista
        <br />
        Av. Siempre viva 742, Sprinfield
        <br />
        magdalenajordan.arte@gmail.com
        <br />
        +34 634 60 92 37
      </ContactInfo>
    </ViewLayout>
  );
});

export default Contact;
