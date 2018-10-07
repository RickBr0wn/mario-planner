import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects}) => {
  const projectMap = projects && projects.map(project => {
    return (
      <ProjectSummary project={project} key={project.id} />
    )
  })

  return(
    <div className="project-list section">
      {projectMap}
    </div>
  )
}

export default ProjectList