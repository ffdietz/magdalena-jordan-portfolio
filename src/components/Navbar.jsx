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
      'route': 'projects',
      'offset': -70,
    },
    {
      'name': 'Bio',
      'route': 'biography',
      'offset': -70,
    },
    {
      'name': 'Contacto',
      'route': 'contact',
      'offset': 0,
    }
  ]

  return (
    <NavbarLayout>
      <NavbarContainer>

        <TitleContainer>
          <NavLink to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
          >
            <NavbarTitle>
              Magdalena Jordán
            </NavbarTitle>
          </NavLink>        
        </TitleContainer>

        <LinksContainer>
        {
          links.map((link, key) => {
            return (
              <NavLink to={link.route} 
                key={key}
                activeClass="active" 
                spy={true} 
                smooth={true} 
                hashSpy={true} 
                offset={0} 
                // offset={link.offset}
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