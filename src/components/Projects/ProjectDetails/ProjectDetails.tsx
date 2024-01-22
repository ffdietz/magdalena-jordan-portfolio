import { Grid, GridItem, Text } from "@chakra-ui/react";
import { Map, Marker } from "pigeon-maps";
import { TProject } from "@types";
import ProjectDescription from "./ProjectDescription";
import ProjectImage from "./ProjectImage";


const ProjectDetails = ({ project }: { project: TProject | null }) => {
  const { title, location, description, images, index } =
    project || ({} as TProject);

  return (
    <Grid
      id={"project-details"}
      templateColumns="repeat(2, 1fr)"
      w="full"
      h="full"
    >
      {project && (
        <>
          <GridItem py={16} px={40} rowGap={36}>
            {images && <ProjectImage image={images[0]} />}
            {title && (
              <Text fontSize={32}>
                {`Proyecto_${index}`}
                <br />
                {title}
              </Text>
            )}
            {description && <ProjectDescription description={description} />}
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
