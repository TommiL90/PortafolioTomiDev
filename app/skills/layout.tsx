import { ReactNode } from 'react'
import { Metadata } from "next"


interface SkillsLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: "TomiDev | Skills",
  description:
    "Saiba mais sobre Tomás Benjamín. Informação sobre seus Hard skills e Soft skills",
}
const SkillsLayout = ({children}: SkillsLayoutProps) => {
  return (
    <section className='relative my-5 flex h-screen w-full max-w-[1400px] animate-fade flex-col transition-all md:h-full md:w-[95vw] md:flex-row md:justify-around'>{children}</section>
  )
}

export default SkillsLayout