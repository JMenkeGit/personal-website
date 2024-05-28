import { FC } from 'react'

import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface ProjectProps {
  projectName: string
  role: string
  industry: string
  duties: string[]
}

const Project: FC<ProjectProps> = ({ projectName, role, industry, duties }) => {
  return (
    <article className='job-info'>
      <h3>{projectName}</h3>
      <h4>{role}</h4>
      <p className='job-industry'>Industry: {industry}</p>
      {duties.map((duty, index) => {
        return (
          <div key={index} className='job-desc'>
            <FontAwesomeIcon icon={faAngleDoubleRight} className='job-icon' />
            <p>{duty}</p>
          </div>
        )
      })}
    </article>
  )
}
export default Project
