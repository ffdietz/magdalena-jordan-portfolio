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
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getProjects()
      .then(res => setProjects(res))
      .catch(error => console.error(error));
    console.log('projects :>> ', projects);
    // setLoading(false);
  }, [])

  return (
    <ViewLayout id="projects">
      <ProjectsContainer>
        {isLoading ?
          (null)
          :
          (
            <>
              <ProjectsIndex />
              <ProjectsViewer />
            </>
          )
        }
      </ProjectsContainer>
    </ViewLayout>
  )
}

export default Projects