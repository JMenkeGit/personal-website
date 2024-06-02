import { FC } from 'react'

const Navbar: FC = () => {
  return (
    <nav className='navbar'>
      <div className='nav-links'>
        <a
          href='https://jacqueline-menke.netlify.app/#home'
          className='nav-link'
        >
          <span>home</span>
        </a>
        <a
          href='https://jacqueline-menke.netlify.app/#about'
          className='nav-link'
        >
          <span>about</span>
        </a>
        <a
          href='https://jacqueline-menke.netlify.app/#experience'
          className='nav-link'
        >
          <span>experience</span>
        </a>
        <a
          href='https://jacqueline-menke.netlify.app/#skills'
          className='nav-link'
        >
          <span>skills</span>
        </a>
        <a
          href='https://jacqueline-menke.netlify.app/#projects'
          className='nav-link'
        >
          <span>work projects</span>
        </a>
      </div>
    </nav>
  )
}
export default Navbar
