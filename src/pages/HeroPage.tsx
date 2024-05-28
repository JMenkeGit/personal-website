import { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faSquareGithub,
  faSquareXing,
} from '@fortawesome/free-brands-svg-icons'

import Navbar from '../components/hero/Navbar'
import heroLogo from '../images/design_components.svg'

const HeroPage: FC = () => {
  return (
    <section>
      <Navbar />
      <div className='section-center' id='home'>
        <article className='hero-title-container'>
          <h2 className='hero-title'>Hi, I'm Jacky</h2>
          <h1 className='hero-subtitle'>
            UX/UI designer and front-end web developer
          </h1>
          <h4 className='hero-description'>
            Turning <span className='hero-ideas'>ideas</span> into interactive{' '}
            <span className='hero-reality'>reality</span>
          </h4>
          <div className='contact-container'>
            {/* LinkedIn */}
            <div>
              <a href='https://www.linkedin.com/in/jacqueline-menke-0b786b246/'>
                <FontAwesomeIcon icon={faLinkedin} className='contact-icon' />
              </a>
            </div>
            {/* Xing */}
            <div>
              <a href='https://www.xing.com/profile/Jacqueline_Menke090723/web_profiles'>
                <FontAwesomeIcon icon={faSquareXing} className='contact-icon' />
              </a>
            </div>
            {/* Github */}
            <div>
              <a href='https://github.com/JMenkeGit'>
                <FontAwesomeIcon
                  icon={faSquareGithub}
                  className='contact-icon'
                />
              </a>
            </div>
          </div>
          {/* img */}
          <img src={heroLogo} className='hero-img' alt='hero-img'></img>
        </article>
      </div>
    </section>
  )
}
export default HeroPage
