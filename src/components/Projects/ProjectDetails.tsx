import { Stack, Text } from "@chakra-ui/react";
import { Map, Marker } from "pigeon-maps";
import { TProject } from "@types";


const ProjectDetails = ({project}: {project: TProject}) => {
  const {title, location, description} = project

  return (
    <Stack maxW="2xl">
      {project && (
        <>
        {title &&
          <Text>{title}</Text>
        }
        {location &&
          <Map
            center={[location.lat, location.lon]}
            height={300}
            width={700}
            zoom={16}
          >
            <Marker
              anchor={[location.lat, location.lon]}
              width={30}
              />
          </Map>
        }
        {description &&
          <Text>{description}</Text>
        }
        </>
      )}
    </Stack>
  );
};

export default ProjectDetails;
