import React from 'react'
import { ViewLayout } from '../styles/LayoutView'
import {
  HomeContainer,
  HomeText,
  HomeImage
} from '../styles/HomeStyle'
import homeImage from '../resources/images/image-000.jpg'

const Home = () => {
  return (
    <ViewLayout id="home">
      <HomeContainer>
      
        <HomeText>
          Magdalena Jordán Artista<br/>
          Visual Lorem ipsum dolor sit<br />
          amet, consectetuer adipiscing<br />
          elit, sed diam <span>proyectos</span> nibh<br />
          euismod tincidunt<br />
        </HomeText>
        
        <HomeImage src={homeImage} alt=""/>
      
      </HomeContainer>
    </ViewLayout>
  )
}

export default Home