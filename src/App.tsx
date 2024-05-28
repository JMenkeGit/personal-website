import { FC } from 'react'

import HeroPage from './pages/HeroPage'
import AboutPage from './pages/AboutPage'
import ExperiencePage from './pages/ExperiencePage'
import SkillPage from './pages/SkillPage'
import ProjectPage from './pages/ProjectPage'

const App: FC = () => {
  return (
    <>
      <HeroPage />
      <AboutPage />
      <ExperiencePage />
      <SkillPage />
      <ProjectPage />
    </>
  )
}

export default App
