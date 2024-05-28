import { FC, Dispatch, SetStateAction } from 'react'

interface ProjectTabsProps {
  projectNameShort: string
  id: string
  index: number
  value: number
  setValue: Dispatch<SetStateAction<number>>
}

const ProjectTabs: FC<ProjectTabsProps> = ({
  projectNameShort,
  id,
  index,
  value,
  setValue,
}) => {
  return (
    <div className='btn-container'>
      <button
        key={id}
        onClick={() => setValue(index)}
        className={`job-btn ${index === value && 'active-btn'}`}
      >
        {projectNameShort}
      </button>
    </div>
  )
}
export default ProjectTabs
