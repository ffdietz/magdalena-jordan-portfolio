import { Stack, Text } from "@chakra-ui/react";
import { Map, Marker } from "pigeon-maps";
import { TProject } from "@types";

const ProjectDetails = ({project}: {project: TProject}) => {
  const {title, location, description} = project

  return (
    <Stack maxW="2xl">
      {project && (
        <>
          <Text>{title}</Text>
          <Map
            height={300}
            width={700}
            defaultZoom={16}
            defaultCenter={[location.lat, location.lon]}
          >
            <Marker
              width={30}
              anchor={[location.lat, location.lon]}
            />
          </Map>
          <Text>{description}</Text>
        </>
      )}
    </Stack>
  );
};

export default ProjectDetails;
