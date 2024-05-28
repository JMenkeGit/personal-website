import { FC } from 'react'

import SectionTitle from '../components/general/SectionTitle'
import Experiences from '../components/experience/Experiences'

const ExperiencePage: FC = () => {
  return (
    <section id='experience'>
      <div className='section-center'>
        <SectionTitle title='experience' />
        <Experiences />
      </div>
    </section>
  )
}
export default ExperiencePage
