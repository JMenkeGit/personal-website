import { FC, useState } from 'react'

import projectLogo from '../../images/programmer_2.svg'

import Project from './Project'
import ProjectTabs from './ProjectTabs'

import projects from '../../data/projects.json'

const Projects: FC = () => {
  const [value, setValue] = useState(0)

  return (
    <div className='jobs-center'>
      <div className='btn-container'>
        {projects.map((project) => {
          return (
            <ProjectTabs
              key={project.id}
              {...project}
              value={value}
              setValue={setValue}
            />
          )
        })}
      </div>
      <Project key={projects[value].id} {...projects[value]} />
      {/* img */}
      <img src={projectLogo} className='project-img' alt='project-img'></img>
    </div>
  )
}
export default Projects
