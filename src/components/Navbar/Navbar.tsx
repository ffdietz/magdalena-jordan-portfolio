
import { NavbarLayout } from "../../styles/LayoutView.js";
import {
  LinksContainer,
  NavLink,
  NavbarContainer,
  NavbarTitle,
  TitleContainer,
} from "./style.js";

const Navbar = (refs) => {
  const links = [
    {
      name: "Proyectos",
      ref: refs?.projectsRef,
    },
    {
      name: "Bio",
      ref: refs?.biographyRef,
    },
    {
      name: "Contacto",
      ref: refs?.contactRef,
    },
  ];

  const scrollToSection = (ref: React.Ref<HTMLDivElement>) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <NavbarLayout>
      <NavbarContainer>
        {refs && (
          <>
            <TitleContainer>
              <NavbarTitle onClick={() => scrollToSection(refs.homeRef)}>
                Magdalena Jordán
              </NavbarTitle>
            </TitleContainer>
            <LinksContainer>
              {links.map((link, key) => (
                <NavLink onClick={() => scrollToSection(link.ref)} key={key}>
                  {link.name}
                </NavLink>
              ))}
            </LinksContainer>
          </>
        )}
      </NavbarContainer>
    </NavbarLayout>
  );
};

export default Navbar;
