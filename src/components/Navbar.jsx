import React from 'react'
import { NavbarLayout } from '../styles/LayoutView.js'

import {
  NavbarContainer, 
  TitleContainer,
  NavbarTitle,
  LinksContainer,
  NavLink
} from '../styles/NavbarStyle'

const Navbar = () => {
  const links = [
    {
      'name': 'Proyectos',
      'route': 'projects'
    },
    {
      'name': 'Bio',
      'route': 'biography'
    },
    {
      'name': 'Contacto',
      'route': 'contact'
    }
  ]

  return (
    <NavbarLayout>
      <NavbarContainer>

        <TitleContainer>
          <NavbarTitle>Magdalena Jordán</NavbarTitle>
        </TitleContainer>

        <LinksContainer>
        {
          links.map((link) => {
            return (
              <NavLink to={link.route} 
                activeClass="active" 
                spy={true} 
                smooth={true} 
                hashSpy={true} 
                offset={0} 
                duration={500} 
              >
              {link.name}
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