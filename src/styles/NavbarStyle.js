import styled from "styled-components";
import { Link } from 'react-scroll'


export const NavbarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #000;

`;

export const TitleContainer = styled.div`
  position: static;
  cursor: pointer;
`;

export const LinksContainer = styled.div`
  position: absolute;
  right: 0;
  margin-right: 3rem;
`

export const NavbarTitle = styled.span`
  font-family: 'Monument Extended';
  font-size: 1.6vw;
  color: #000;

`;

export const NavLink = styled(Link)`
    font-family: 'Neue Machina Light';
    font-size: 1rem;
    font-weight: 600;
    margin-left: 20px;
    cursor: pointer;
    
    &.active{
      color: #0000FF;
    }

`