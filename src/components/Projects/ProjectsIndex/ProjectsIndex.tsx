import { Stack, Text } from "@chakra-ui/react";
import { sections } from "@content";
import { TProject } from "@types";

const ProjectsIndex = ({
  projects,
  setProject,
}: {
  projects: TProject[];
  setProject: Function;
}) => {
  return (
    <Stack w="full" h="full">
      <Stack
        id={sections["projects"].id}
        w="full"
        h="xl"
        overflowY="scroll"
        borderY="1px"
        my="auto"
      >
        {projects.map((project) => (
          <Text
            key={project.index}
            textDecoration="none"
            fontSize={36}
            py={2}
            pl={16}
            whiteSpace="nowrap"
            borderBottom="1px"
            _last={{ borderBottom: 0 }}
            _hover={{ color: "blue", borderColor: "black" }}
            onClick={(event) => {
              setProject(project);
              event.preventDefault();
              document
                .getElementById("project-details")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            {`Proyecto_${project.index}`}
            <Text as="span" ml={14}>
              {project.title}
            </Text>
          </Text>
        ))}
      </Stack>
    </Stack>
  );
};

export default ProjectsIndex;
