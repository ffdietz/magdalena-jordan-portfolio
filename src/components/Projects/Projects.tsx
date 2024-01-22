import { useState } from "react";
import { Flex, Stack, Text } from "@chakra-ui/react";
import ProjectsIndex from "./ProjectsIndex";
import ProjectDetails from "./ProjectDetails";
import { sections } from "@content";
import { TProject } from "@types";

const Projects = ({ projects }: { projects: TProject[] }) => {
  const [selectedProject, setSelectedProject] = useState<TProject | null>(null)

  return (
    <Stack id={sections["projects"].id} p={0}>
      <Flex gap={20} w="full" h="xl">
        {projects ? (
          <>
            <ProjectsIndex
              projects={projects}
              setProject={setSelectedProject}
            />
            {selectedProject ? (
              <ProjectDetails project={selectedProject} />
            ) : null}
          </>
        ) : (
          <Text>something goes wrong...</Text>
        )}
      </Flex>
    </Stack>
  );
};

export default Projects;
