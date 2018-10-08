import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {
  const projectMap = projects && projects.map(project => {
    return (
      <Link to={'/project/' + project.id}>
        <ProjectSummary project={project} key={project.id} />
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