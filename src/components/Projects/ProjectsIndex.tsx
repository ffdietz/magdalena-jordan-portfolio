import { Stack, Text } from '@chakra-ui/react'
import { TProject } from '@types';


const ProjectsIndex = ({projects,  setProject }: {projects: TProject[], setProject: any }) => {
  
  return (
    <Stack w="sm" h="md" overflow="scroll" overflowX="hidden" borderY="1px">
      {projects &&
        projects.map((project) => (
          <Text
            textDecoration="none"
            fontSize={24}
            py={4}
            borderBottom="1px"
            key={project.title}
            onClick={()=> setProject(project)}
            _last={{ borderBottom: 0 }}
            _hover={{ color: "blue", borderColor: "black" }}
          >
            {project.title}
          </Text>
        ))}
    </Stack>
  );
};

export default ProjectsIndex