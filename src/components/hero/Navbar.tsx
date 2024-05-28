import { FC } from 'react'

const Navbar: FC = () => {
  return (
    <nav className='navbar'>
      <div className='nav-links'>
        <a href='#home' className='nav-link'>
          <span>home</span>
        </a>
        <a href='#about' className='nav-link'>
          <span>about</span>
        </a>
        <a href='#experience' className='nav-link'>
          <span>experience</span>
        </a>
        <a href='#skills' className='nav-link'>
          <span>skills</span>
        </a>
        <a href='#projects' className='nav-link'>
          <span>work projects</span>
        </a>
      </div>
    </nav>
  )
}
export default Navbar
