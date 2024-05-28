import { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'

import SectionTitle from '../components/general/SectionTitle'

const AboutPage: FC = () => {
  return (
    <section>
      <div className='section-center' id='about'>
        <SectionTitle title='about' />
        <div className='about-container'>
          <article>
            <img
              className='about-img'
              src={require('../images/profile.jpg')}
              alt='about img'
            />
          </article>
          <article>
            <div className='about-description'>
              <p>
                <FontAwesomeIcon icon={faAnglesRight} className='about-icon' />
                I am a passionate UX/UI designer and web developer focussing on
                creating intuitive and visually compelling digital experiences.
                <br />
                <br />
                I specialize in crafting user-centric designs that not only look
                great but also enhance usability and engagement. With a keen eye
                for detail and a deep understanding of user behavior. I bring
                creativity, technical expertise, and a collaborative spirit to
                every project.
                <br />
                <br />
                In addition to my professional work, I enjoy painting, which
                fuels my creativity and serves as a balance to my job. I am
                always eager to take on new challenges and bring digital visions
                to life.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
export default AboutPage
