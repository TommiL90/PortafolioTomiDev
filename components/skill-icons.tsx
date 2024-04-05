/* eslint-disable @next/next/no-img-element */

import { Tech } from '@prisma/client'
import IconComponent from './icon-component'
import { TIconNAme } from './ui/icons'

export type skillProps = {
  title: TIconNAme
  description: string
}

export type SkillsIconsComponentProps = {
  skill: Tech
  onMouseOver: () => void
  onMouseOut: () => void
}

const SkillIcon = ({
  skill,
  onMouseOver,
  onMouseOut,
}: SkillsIconsComponentProps) => {
  const iconName = skill.name as TIconNAme
  return (
    <li
      className="flex items-center justify-center"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <div className="flex items-center justify-center">
        <span className="hover:text-textPrimary cursor-pointer p-2 text-white transition-all ease-in-out hover:scale-110">
          <figure className="h-24 w-24">
            {/* <img
                         className='h-full w-full object-cover'
                         src={`https://skillicons.dev/icons?i=${skill.title.toLocaleLowerCase()}`} alt={skill.title} /> */}
            <IconComponent iconName={iconName} />
          </figure>
        </span>
      </div>
    </li>
  )
}

export default SkillIcon
