import { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import ProjectsIndex from "./ProjectsIndex/ProjectsIndex";
import ProjectDetails from "./ProjectDetails/ProjectDetails";
import { TProject } from "@types";

const Projects = ({ projects }: { projects: TProject[] }) => {
  const [selectedProject, setSelectedProject] = useState<TProject>(projects[0]);

  return (
    <Flex w="200%" h="100%" p={0} overflowX="scroll">
      {projects ? (
        <>
          <ProjectsIndex projects={projects} setProject={setSelectedProject} />
          {selectedProject ? (
            <ProjectDetails project={selectedProject} />
          ) : null}
        </>
      ) : (
        <Text>something goes wrong...</Text>
      )}
    </Flex>
  );
};

export default Projects;
