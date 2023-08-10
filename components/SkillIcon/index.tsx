/* eslint-disable @next/next/no-img-element */
import IconComponent from "../IconComponent"
import { TIconNAme } from "@/components/Icons"

export type skillProps = {
  title: TIconNAme
  description: string
}

export type SkillsIconsComponentProps = {
  skill: skillProps
  onMouseOver: () => void
  onMouseOut: () => void
}

const SkillIcon = ({
  skill,
  onMouseOver,
  onMouseOut,
}: SkillsIconsComponentProps) => {
  return (
    <li
      className="flex items-center justify-center"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <div className="flex items-center justify-center">
        <span className="hover:text-textPrimary cursor-pointer p-2 text-white transition-all ease-in-out hover:scale-110">
          <figure className="h-24 w-24">
            <IconComponent iconName={skill.title} />
          </figure>
        </span>
      </div>
    </li>
  )
}

export default SkillIcon
