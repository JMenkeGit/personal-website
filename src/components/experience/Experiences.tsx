import { FC, useState } from 'react'

import {
  faPen,
  faLightbulb,
  faComputerMouse,
  faChartPie,
  faLaptopCode,
  faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons'

import data from '../../data/experience.json'

import Experience from './Experience'

const Experiences: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className='experience-container'>
      {data.map((experience) => {
        const { id, iconName, index } = experience
        let icon = faLightbulb
        switch (iconName) {
          case 'faPen':
            icon = faPen
            break
          case 'faPeopleGroup':
            icon = faPeopleGroup
            break
          case 'faLightbulb':
            icon = faLightbulb
            break
          case 'faComputerMouse':
            icon = faComputerMouse
            break
          case 'faChartPie':
            icon = faChartPie
            break
          case 'faLaptopCode':
            icon = faLaptopCode
            break
        }

        return (
          <Experience
            key={id}
            {...experience}
            icon={icon}
            isActive={activeIndex === index}
            activeIndex={activeIndex}
            onShow={(number: number) => setActiveIndex(number)}
          />
        )
      })}
    </div>
  )
}
export default Experiences
