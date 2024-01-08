
import { TProject } from "../../types/types";
import ProjectMap from "./ProjectMap";
import { ProjectsContainer } from "./ProjectsStyle";
import { Description, Title } from "./style";

const ProjectDetails = (project: TProject) => {
  return (
    <ProjectsContainer>
      {project && (
        <>
          <Title>{project.title}</Title>
          <ProjectMap coordinates={project.location} />
          <Description>{project.description}</Description>
        </>
      )}
    </ProjectsContainer>
  );
};

export default ProjectDetails;
