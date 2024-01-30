import { Grid, GridItem, Text } from "@chakra-ui/react";
import { Map, Marker } from "pigeon-maps";
import { TProject } from "@types";
import ProjectDescription from "./ProjectDescription";
import ProjectImage from "./ProjectImage";


const ProjectDetails = ({ project }: { project: TProject }) => {
  const { title, location, description, images, index, details } =
    project;

  return (
    <Grid
      id="project-details"
      templateColumns="repeat(2, 1fr)"
      w="full"
      h="full"
      overflow="hidden"
    >
      {project && (
        <>
          <GridItem py={8} px={24}>
            {images && <ProjectImage image={images[0]} />}
            {title && (
              <Text fontSize={28}>
                {`Proyecto_${index}`}
                <br />
                {title}
              </Text>
            )}
            {details && (
              <Text fontFamily="Andale Mono" fontSize={14} mt={1} mb={6}>
                {details}
              </Text>
            )}
            {description && <ProjectDescription description={description} />}
          </GridItem>
          {location && (
            <GridItem
              p={0}
              w="full"
              h="40%"
              borderBottom="1px"
              borderLeft="1px"
            >
              <Map
                center={[location.lat, location.lon]}
                zoom={16}
                mouseEvents={false}
              >
                <Marker
                  anchor={[location.lat, location.lon]}
                  width={40}
                  color="var(--chakra-colors-secondaryColor)"
                />
              </Map>
            </GridItem>
          )}
        </>
      )}
    </Grid>
  );
};

export default ProjectDetails;
