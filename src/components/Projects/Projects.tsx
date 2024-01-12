import { BrowserRouter } from "react-router-dom";

import ProjectsIndex from "./ProjectsIndex";
import ProjectsViewer from "./ProjectsViewer";

import { Flex, Stack } from "@chakra-ui/react";
import { TypeProject } from "@types";

import { sections } from "@content";

interface Props {
  projects: TypeProject[];
  isLoading: boolean;
}

const Projects = ({ projects, isLoading }: Props) => {
  return (
    <Stack id={sections[0].id} p={32}>
      <Flex gap={20} m="auto">
        <BrowserRouter>
          {isLoading ? null 
            : 
            <>
              <ProjectsIndex projects={projects} />
              <ProjectsViewer projects={projects} />
            </>
          }
        </BrowserRouter>
      </Flex>
    </Stack>
  );
};

export default Projects;
