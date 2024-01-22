import { Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { Map, Marker } from "pigeon-maps";
import { TProject } from "@types";


const ProjectDetails = ({project}: {project: TProject | null}) => {
  const {title, location, description, images} = project || {} as TProject

  return (
    <Grid id={"project-details"} templateColumns="repeat(2, 1fr)" w="full">
      {project && (
        <>
          <GridItem py={16} px={40} rowGap={18}>
            {images && (
              <Image src={images[0].fields?.file?.url as string} alt="" />
            )}
            {title && (
              <Text fontSize={32}>
                {`Proyecto_${project.index}`}
                <br />
                {title}
              </Text>
            )}
            {description && (
              <Text fontFamily="Andale Mono" overflowY="scroll" h="xs">
                {description}
              </Text>
            )}

          </GridItem>
          {location && (
            <GridItem p={0}>
              <Map
                center={[location.lat, location.lon]}
                height={300}
                zoom={16}
                mouseEvents={false}
              >
                <Marker anchor={[location.lat, location.lon]} width={30} />
              </Map>
            </GridItem>
          )}
        </>
      )}
    </Grid>
  );
};

export default ProjectDetails;
