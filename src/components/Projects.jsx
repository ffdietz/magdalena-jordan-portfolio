import React from 'react'
import { useState, useEffect } from 'react'
import { ViewLayout } from '../styles/LayoutView'
import {
  ProjectsContainer
} from '../styles/ProjectsStyle'
import { getProjects } from '../api/controllers'

import ProjectsIndex from './ProjectsIndex'
import ProjectsViewer from './ProjectsViewer'

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then(res => {
        setProjects(res);
        setLoading(false)
      })
      .catch(error => console.error(error));
    }, [isLoading])
    
  console.log('projects :>> ', projects);
  
  return (
    <ViewLayout id="projects">
      <ProjectsContainer>
        {
          isLoading ?
          (null)
          :
          (
            <>
              <ProjectsIndex list={ projects }/>
              <ProjectsViewer projects={ projects }/>
            </>
          )
        }
      </ProjectsContainer>
    </ViewLayout>
  )
}

export default Projects