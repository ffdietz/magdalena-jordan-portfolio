import { Stack, Text } from '@chakra-ui/react'
import { sections } from '@content';
import { TProject } from '@types';


const ProjectsIndex = ({projects,  setProject }: {projects: TProject[], setProject: any }) => {
  
  return (
    <Stack
      id={sections["projects"].id}
      w="full"
      h="lg"
      overflow="scroll"
      borderY="1px"
    >
      {projects &&
        projects.map((project) => (
          <>
            <Text
              key={project.title}
              textDecoration="none"
              fontSize={36}
              py={2}
              pl={16}
              borderBottom="1px"
              onClick={(event) => {
                setProject(project);
                event.preventDefault();
                document
                  .getElementById("project-details")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              _last={{ borderBottom: 0 }}
              _hover={{ color: "blue", borderColor: "black" }}
            >
              {`Proyecto_${project.index}`}
              <Text as="span" ml={14}>
                {project.title}
              </Text>
            </Text>
          </>
        ))}
    </Stack>
  );
};

export default ProjectsIndex