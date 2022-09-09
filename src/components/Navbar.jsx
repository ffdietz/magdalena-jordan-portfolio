import React from 'react';
import { NavbarLayout } from '../styles/LayoutView.js'

import {
  NavbarContainer, 
  TitleContainer,
  NavbarTitle,
  LinksContainer,
  NavLink
} from '../styles/NavbarStyle'


const Navbar = ({ refs }) => {
  const links = [
    {
      'name': 'Proyectos',
      'ref': refs.projectsRef,
    },
    {
      'name': 'Bio',
      'ref': refs.biographyRef,
    },
    {
      'name': 'Contacto',
      'ref': refs.contactRef,
    }
  ]

  const scrollToSection = (ref) => {
    if (ref) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <NavbarLayout>
      <NavbarContainer>

        <TitleContainer>
          <NavbarTitle onClick={() => scrollToSection(refs.homeRef)}>
            Magdalena Jordán
          </NavbarTitle>   
        </TitleContainer>

        <LinksContainer>
        {
          links.map((link, key) => {
            return (
              <NavLink onClick={() => scrollToSection(link.ref)} key={key}>
                { link.name }
              </NavLink>
            )
          })
        }
        </LinksContainer>

      </NavbarContainer>
    </NavbarLayout>
  )
}


export default Navbar