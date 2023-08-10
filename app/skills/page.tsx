"use client"

import { useState } from "react"
import SkillIcon from "@/components/SkillIcon"
import { TIconNAme } from "@/components/Icons"
import SkillDescription from "@/components/SkillDescription"
import { ITechnology, technologies } from "@/lib/techs"


export interface IStatus {
  isDefault: boolean
  isHovered: boolean
  skill: ITechnology
}

const SkillPage = () => {
  const [status, setStatus] = useState<IStatus>({
    isDefault: true,
    isHovered: false,
    skill: {} as ITechnology,
  })

  const handleSkillIconHover = (skill: ITechnology) => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      isHovered: true,
      skill: skill,
      isDefault: false,
    }))
  }

  const handleSkillIconLeave = () => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      isHovered: false,
      skill: {} as ITechnology,
      isDefault: true,
    }))
  }
  return (
    <>
      <ul className="mb-6 flex h-2/5 w-[95vw] flex-wrap overflow-auto p-2 md:mb-0 md:h-max md:w-[35%] md:items-center md:justify-center md:gap-2 ">
        {technologies.map((skill) => (
          <SkillIcon
            key={skill.title}
            skill={skill}
            onMouseOut={() => handleSkillIconLeave()}
            onMouseOver={() => handleSkillIconHover(skill)}
          />
        ))}
      </ul>
      <div className="md:sticky flex h-auto w-full items-center justify-center overflow-auto rounded-md bg-backgroundSecondary md:top-56 md:h-80 md:w-[50%] md:p-4">
        <SkillDescription status={status} />
      </div>
    </>
  )
}

export default SkillPage
