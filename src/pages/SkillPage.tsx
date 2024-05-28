import { FC } from 'react'

import SectionTitle from '../components/general/SectionTitle'
import Skills from '../components/skills/Skills'

const SkillPage: FC = () => {
  return (
    <section id='skills'>
      <div className='section-center'>
        <SectionTitle title='skills' />
        <Skills />
      </div>
    </section>
  )
}
export default SkillPage
