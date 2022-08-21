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
      'route': ''
    },
    {
      'name': 'Bio',
      'route': ''
    },
    {
      'name': 'Contacto',
      'route': ''
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
                offset={-50} 
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