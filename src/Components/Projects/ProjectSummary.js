import React from 'react'
import moment from 'moment'

const ProjectSummary = ({project}) => {
  console.log(project.createdAt.toDate())
  const dateAndTime = moment(project.createdAt.toDate()).calendar()
  return(
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p className="card-content">{project.body}</p>
        <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
        <p className="grey-text">{dateAndTime}</p>
      </div>
    </div>
  )
}

export default ProjectSummary