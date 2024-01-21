import { useState } from "react";
import { Flex, Stack } from "@chakra-ui/react";
import ProjectsIndex from "./ProjectsIndex";
import ProjectDetails from "./ProjectDetails";
import { sections } from "@content";
import { TProject } from "@types";

const Projects = ({ projects }: { projects: TProject[] }) => {
  const [selectedProject, setSelectedProject] = useState<TProject>(projects[0])

  return (
    <Stack id={sections["projects"].id} p={32}>
      <Flex gap={20} m="auto">
        {projects ? (
          <>
            <ProjectsIndex
              projects={projects}
              setProject={setSelectedProject}
            />
            <ProjectDetails project={selectedProject} />
          </>
        ) : null}
      </Flex>
    </Stack>
  );
};

export default Projects;
