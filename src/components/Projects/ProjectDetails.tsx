import { Image, Stack, Text } from "@chakra-ui/react";
import { Map, Marker } from "pigeon-maps";
import { TProject } from "@types";


const ProjectDetails = ({project}: {project: TProject}) => {
  const {title, location, description, images} = project

  return (
    <Stack maxW="2xl" overflowX="scroll">
      {project && (
        <>
        {title &&
          <Text>{title}</Text>
        }
        {images &&
          <Image src={images[0].fields?.file?.url as string} alt=""/>
        }
        {location &&
          <Map
            center={[location.lat, location.lon]}
            height={300}
            width={700}
            zoom={16}
            mouseEvents={false}
          >
            <Marker
              anchor={[location.lat, location.lon]}
              width={30}
              />
          </Map>
        }
        {description &&
          <Text
            fontFamily="Andale Mono"
          >{description}</Text>
        }
        </>
      )}
    </Stack>
  );
};

export default ProjectDetails;
