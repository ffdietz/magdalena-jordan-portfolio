import React from 'react'
import { ViewLayout } from '../styles/LayoutView'
import {
  BiographyContainer,
  BiographyImage,
  BiographyText,
} from '../styles/BiographyStyle'

const Biography = () => {
  return (
    <ViewLayout id="biography">
      <BiographyContainer>
        <BiographyImage src={null} alt="fotito de la magda" />
        
        <BiographyText>
          Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna aliquam
          erat volutpat. Ut wisi enim ad minim
          veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip ex ea
          commodo consequat. Duis autem vel eum iriure
          dolor in hendrerit in vulputate velit esse
          mo Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna aliquam
          erat volutpat. Ut wisi enim ad minim
          veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip ex ea
          commodo consequat. Duis autem vel eum iriure
          dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat
          nulla facilisis at vero eros et accumsan
          et iusto odio dignissim Lorem ipsum
          dolor sit amet, consectetuer adipiscing
          elit, sed diam nonummy nibh euismod tincidunt
          ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis
          nostrud exerci tation ullamcorper suscipit
          lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor
          in hendrerit in vulputate velit esse molestie
          consequat, vel illum dolore eu feugiat
          nulla facilisis at vero eros et accumsan et
          iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te
          feugait nulla facilisi.
          Lorem ipsum dolor sit amet, cons ectetuer
          adipiscing elit, sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat. Ut wisi enim ad minim
          veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip ex ea
          commodo consequat.
        </BiographyText>
      
      </BiographyContainer>
    </ViewLayout>
  )
}

export default Biography