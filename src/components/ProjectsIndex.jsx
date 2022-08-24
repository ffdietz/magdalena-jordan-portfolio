import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const ProjectsIndex = ({ list }) => {
  // console.log('list :>> ', list);
  
  const projectsLinks = list.map((project, key) => {
    return(
      <ProjectLink to={project.fields.title} key={key} >
        { project.fields.title }
      </ProjectLink>
      )
    }
  )

  return (
    <ProjectsIndexContainer>
      { list &&
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
  display: flex;
  flex-direction: column;
`
const ProjectLink = styled(NavLink)` 
  text-decoration: none;
  color:var(--text-color);
  font-size: 2.5rem;
  background-color: #FFF;

  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  padding: 1.5rem;
  margin: -1px;

  :hover{
    color: var(--hover-link);
  }
  
  &.active{
    color:var(--active-link);
  }
`