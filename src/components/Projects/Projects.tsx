import { BrowserRouter } from "react-router-dom";
import { Flex, Stack } from "@chakra-ui/react";
import ProjectsIndex from "./ProjectsIndex";
import ProjectsViewer from "./ProjectsViewer";
import { sections } from "@content";
import { TProject } from "@types";

const Projects = ({ projects }: { projects: TProject[] }) => {
  return (
    <Stack id={sections[0].id} p={32}>
      <Flex gap={20} m="auto">
        {projects ? (
          <BrowserRouter>
            <ProjectsIndex projects={projects} />
            <ProjectsViewer projects={projects} />
          </BrowserRouter>
        ) : null}
      </Flex>
    </Stack>
  );
};

export default Projects;
