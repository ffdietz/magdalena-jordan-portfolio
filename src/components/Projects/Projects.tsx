import { BrowserRouter } from "react-router-dom";

import ProjectsIndex from "./ProjectsIndex";
import ProjectsViewer from "./ProjectsViewer";

import { ProjectsContainer } from "./ProjectsStyle";
import { sections } from "../../content";
import { Stack } from "@chakra-ui/react";
import { TProject } from "../../types/types";

interface Props {
  projects: TProject[]
  isLoading: boolean
}

const Projects = ({projects, isLoading}: Props) => {

  return (
    <Stack id={sections[0].id}>
      <ProjectsContainer>
        <BrowserRouter>
          {isLoading ? null : (
            <>
              <ProjectsIndex projects={projects} />
              <ProjectsViewer projects={projects} />
            </>
          )}
        </BrowserRouter>
      </ProjectsContainer>
    </Stack>
  );
}

export default Projects;
