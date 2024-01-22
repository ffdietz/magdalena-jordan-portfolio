import { Stack, Text } from '@chakra-ui/react'
import { TProject } from '@types';


const ProjectsIndex = ({projects,  setProject }: {projects: TProject[], setProject: any }) => {
  
  return (
    <Stack w="full" overflow="scroll" borderY="1px">
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
              onClick={() => setProject(project)}
              _last={{ borderBottom: 0 }}
              _hover={{ color: "blue", borderColor: "black" }}
            >
              {`Proyecto_${project.index}`}
              <Text as="span" ml={14}>{project.title}</Text>
            </Text>
          </>
        ))}
    </Stack>
  );
};

export default ProjectsIndex