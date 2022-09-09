import React from 'react'
import { Description, ProjectsContainer, Title } from '../styles/ProjectDetails';
import ProjectMap from './ProjectMap';


const ProjectDetails = ({project}) => {
  console.log('project :>> ', project);

  return(
    <ProjectsContainer>
      {
        project &&
        <>
          <Title>{project.title}</Title>
          <ProjectMap center={project.location} />
          <Description>{ project.description }</Description>
        </>
      }
    </ProjectsContainer>
  )
}

export default ProjectDetails