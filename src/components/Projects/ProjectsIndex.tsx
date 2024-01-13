import { NavLink } from 'react-router-dom'
import { Link, Stack } from '@chakra-ui/react'
import { TProject } from '@types';


const ProjectsIndex = ({ projects }: { projects: TProject[] }) => {
  return (
    <Stack w="sm" h="md" overflow="scroll" overflowX="hidden" borderY="1px">
      {projects &&
        projects.map((project) => (
          <Link
            as={NavLink}
            to={project.title}
            key={project.title}
            textDecoration="none"
            fontSize={24}
            py={4}
            borderBottom="1px"
            _last={{ borderBottom: 0 }}
            _hover={{ color: "blue" }}
          >
            {project.title}
          </Link>
        ))}
    </Stack>
  );
};

export default ProjectsIndex