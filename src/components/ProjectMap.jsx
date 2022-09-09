import React, { useEffect, useRef, memo } from 'react'
import { Map, Marker } from "pigeon-maps"
import { osm, stamenToner } from 'pigeon-maps/providers'

const ProjectMap = ({ center}) => {
  // console.log('center', { center });
  // const centerMap = { lng: center.lon, lat: center.lat };
  // console.log('centerMap :>> ', centerMap);


  return (
    <Map
      provider={osm}
      height={200}
      width={700}
      defaultZoom={5}
      defaultCenter={[center.lat, center.lon]}>
      <Marker width={30} anchor={[center.lat, center.lon]} />
    </Map>
  )
    
}

export default memo(ProjectMap)
