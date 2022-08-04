import React from 'react'
import { NavbarLayout } from '../styles/LayoutView.js'
import {
  NavbarContainer, 
  TitleContainer,
  NavbarTitle
} from '../styles/NavbarStyle'

const Navbar = () => {
  return (
    <NavbarLayout>
      <NavbarContainer>
        <TitleContainer>
          <NavbarTitle>Magdalena Jordán</NavbarTitle>
        </TitleContainer>
      </NavbarContainer>
    </NavbarLayout>
  )
}


export default Navbar