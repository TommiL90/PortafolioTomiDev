'use client'
import SkillIcon from '@/components/skill-icons'
import SkillDescription from '@/components/skills-description'
import { Tech } from '@prisma/client'
import React, { useState } from 'react'

interface Props {
  techs: Tech[]
}

export interface IStatus {
  isDefault: boolean
  isHovered: boolean
  skill: Tech
}

export const Skills = ({ techs }: Props) => {
  const [status, setStatus] = useState<IStatus>({
    isDefault: true,
    isHovered: false,
    skill: {} as Tech,
  })

  const handleSkillIconHover = (skill: Tech) => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      isHovered: true,
      skill,
      isDefault: false,
    }))
  }

  const handleSkillIconLeave = () => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      isHovered: false,
      skill: {} as Tech,
      isDefault: true,
    }))
  }
  return (
    <section className="relative my-5 flex h-screen w-full max-w-[1400px] animate-fade flex-col transition-all md:h-full md:w-[95vw] md:flex-row md:justify-between">
      <ul className="mb-6 grid h-2/5 w-[95vw] grid-cols-5 overflow-auto p-2 md:mb-0 md:h-max md:w-[45%] md:items-center md:justify-center md:gap-2 ">
        {techs.map((skill) => (
          <SkillIcon
            key={skill.name}
            skill={skill}
            onMouseOut={() => handleSkillIconLeave()}
            onMouseOver={() => handleSkillIconHover(skill)}
          />
        ))}
      </ul>
      <div className="relative flex h-auto w-full items-center justify-center overflow-auto rounded-md bg-backgroundSecondary md:top-32 md:h-80 md:w-[50%] md:overflow-hidden md:p-4">
        <SkillDescription status={status} />
      </div>
    </section>
  )
}
