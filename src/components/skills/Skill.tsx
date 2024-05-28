import { FC } from 'react'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface SkillProps {
  name: string
  level: string
  desc: string
  icon: IconProp
}

const Skill: FC<SkillProps> = ({ name, level, desc, icon }) => {
  return (
    <article className='skill'>
      <div className='icon-container'>
        <FontAwesomeIcon icon={icon} className='skill-icon' />
        {name === 'TypeScript' && <h5 className='ts-label'>TS</h5>}
        {name === 'Adobe Xd' && <h5 className='adobe-label'>Xd</h5>}
      </div>
      <h4 className='skill-title'>{name}</h4>
      <div className='skill-indicator'>
        <div
          className='skill-indicator-filled'
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </article>
  )
}
export default Skill
