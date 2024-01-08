import { Map, Marker } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";
import { memo } from "react";
import { TCoordinates } from "../../types/types";

const ProjectMap = (coordinates: TCoordinates) => {
  return (
    <Map
      provider={osm}
      height={200}
      width={700}
      defaultZoom={7}
      defaultCenter={[coordinates.lat, coordinates.lon]}
    >
      <Marker width={30} anchor={[coordinates.lat, coordinates.lon]} />
    </Map>
  );
};

export default memo(ProjectMap);
