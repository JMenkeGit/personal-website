import { FC } from 'react'

import { faLightbulb, faPen } from '@fortawesome/free-solid-svg-icons'
import {
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faReact,
  faMicrosoft,
} from '@fortawesome/free-brands-svg-icons'

import {
  faSquare,
  faSquarePollVertical,
} from '@fortawesome/free-solid-svg-icons'

import skills from '../../data/skills.json'

import Skill from './Skill'

const Skills: FC = () => {
  return (
    <div className='skill-container'>
      {skills.map((skill) => {
        const { id, iconName } = skill
        let icon = faSquare
        switch (iconName) {
          case 'faCss3Alt':
            icon = faCss3Alt
            break
          case 'faHtml5':
            icon = faHtml5
            break
          case 'faJsSquare':
            icon = faJsSquare
            break
          case 'faReact':
            icon = faReact
            break
          case 'faSquare':
            icon = faSquare
            break
          case 'faSquarePollVertical':
            icon = faSquarePollVertical
            break
          case 'faMicrosoft':
            icon = faMicrosoft
            break
        }
        return <Skill key={id} {...skill} icon={icon} />
      })}
    </div>
  )
}
export default Skills
