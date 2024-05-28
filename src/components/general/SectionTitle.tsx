import { FC } from 'react'

interface SectionTitleProps {
  title: string
}

const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return (
    <h2 className='section-title'>
      {title}
      <div className='section-title-underline'></div>
    </h2>
  )
}
export default SectionTitle
