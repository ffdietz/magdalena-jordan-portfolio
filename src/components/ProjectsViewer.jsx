import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProjectDetails from './ProjectDetails'

const ProjectsViewer = ({projects}) => {
  console.log(projects);


  const projectRouter = projects.map((project, key) => {
      return (
        <Route
          key={key}
          path={`${project.fields.title}`}
          element={<ProjectDetails project={project.fields} />}
        />
      )
    })
  
  return (
    <>
        { projects &&
        <Routes>
          {projectRouter}
        </Routes>
        }
    </>
  )
}

export default ProjectsViewer