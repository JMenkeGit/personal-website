import { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface ExperienceProps {
  name: string
  index: number
  desc: string
  icon: IconProp
  isActive: boolean
  activeIndex: number
  onShow: (number: number) => void
}

const Experience: FC<ExperienceProps> = ({
  name,
  index,
  desc,
  icon,
  isActive,
  activeIndex,
  onShow,
}) => {
  return (
    <article
      className='experience'
      onClick={() => {
        if (activeIndex !== index) {
          onShow(index)
        } else {
          onShow(0)
        }
      }}
    >
      <div className='experience-header'>
        <h4 className='experience-title'>{name}</h4>
        <FontAwesomeIcon
          icon={icon}
          className={`${
            isActive
              ? 'experience-icon experience-icon-selected'
              : 'experience-icon '
          }`}
        />
      </div>
      {isActive ? (
        <div className='experience-desc'>
          <p>{desc}</p>
        </div>
      ) : (
        <></>
      )}
      <div className='experience-desc-large'>
        <p>{desc}</p>
      </div>
    </article>
  )
}
export default Experience
