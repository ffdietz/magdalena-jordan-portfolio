import { useState } from "react";
import { Stack, Text } from "@chakra-ui/react";
import ProjectsIndex from "./ProjectsIndex";
import ProjectDetails from "./ProjectDetails";
import { TProject } from "@types";

const Projects = ({ projects }: { projects: TProject[] }) => {
  const [selectedProject, setSelectedProject] = useState<TProject>(projects[0])

  return (
    <Stack w="full" h="full" p={0}>
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
    </Stack>
  );
};

export default Projects;
