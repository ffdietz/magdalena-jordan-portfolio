import { Stack } from "@chakra-ui/react";
import { TProject } from "../../types";
import ProjectMap from "./ProjectMap";
import { Description, Title } from "./style";

const ProjectDetails = (project: TProject) => {
  return (
    <Stack>
      {project && (
        <>
          <Title>{project.title}</Title>
          <ProjectMap coordinates={project.location} />
          <Description>{project.description}</Description>
        </>
      )}
    </Stack>
  );
};

export default ProjectDetails;
