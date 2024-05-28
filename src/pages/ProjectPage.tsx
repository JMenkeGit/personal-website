import { FC } from 'react'

import SectionTitle from '../components/general/SectionTitle'
import Projects from '../components/projects/Projects'

const ProjectPage: FC = () => {
  return (
    <section id='projects'>
      <div className='section-center'>
        <SectionTitle title='work projects' />
        <Projects />
      </div>
    </section>
  )
}
export default ProjectPage
