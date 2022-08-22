import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const ProjectsIndex = ({ projects }) => {
  
  const projectsLinks = projects.map((project, key) => {
    return(
        <ProjectLink
        // to={repo.name}
        key={key}
        >
        {project.fields.title}
        </ProjectLink>
      )
    }
  )

  return (
    <ProjectsIndexContainer>
      {
        projects &&
        projectsLinks
      }
    </ProjectsIndexContainer>
  )
}

export default ProjectsIndex

const ProjectsIndexContainer = styled.div`
  width: 30vw;
  height: 50vh;
  word-break: break-all;
  overflow: scroll;
  overflow-x: hidden;
  z-index: 2;
  padding: 0;
`
// const RepoLink = styled(NavLink)` 
const ProjectLink = styled.h3` 
  text-decoration: none;
  color:var(--text-color);
  font-size: 2.5rem;

  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  padding: 1.5rem;
  margin: 0;

  :hover{
    color: var(--hover-link);
  }
  
  &.active{
    color:var(--active-link);
  }
`