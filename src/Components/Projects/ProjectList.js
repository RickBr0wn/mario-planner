import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {
  const projectMap = projects && projects.map(project => {
    return (
      <Link to={'/project/' + project.id} key={project.id}>
        <ProjectSummary project={project} />
      </Link>
    )
  })

  return(
    <div className="project-list section">
      {projectMap}
    </div>
  )
}

export default ProjectList