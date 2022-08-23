import React from 'react'

const ProjectDetails = ({project}) => {
  console.log('project :>> ', project);

  return (
    <div>
      {project &&
        <h4>{project.title}</h4>
      }
    </div>
  )
}

export default ProjectDetails