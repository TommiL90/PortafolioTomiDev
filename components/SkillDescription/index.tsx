import { IStatus } from "@/app/skills/page"

export interface ISkillDescriptionProps {
  status: IStatus
}

const SkillDescription = ({ status }: ISkillDescriptionProps) => {
  if (!status.isHovered && status.isDefault) {
    return (
      <section className="flex min-h-[10rem] w-full animate-fade flex-col items-start justify-center gap-4 overflow-auto p-4 transition-all">
        <h2 className="mt-6 text-xl font-bold">Soft Skills</h2>
        <p className="mb-4 text-xl">
          <ol className="flex flex-col gap-2">
            <li> - Comunicação clara para entender requisitos.</li>
            <li> - Colaboração eficaz em equipe.</li>
            <li> - Vontade de aprender com feedback.</li>
            <li> - Adaptação a mudanças tecnológicas.</li>
            <li> - Demonstração de ética de trabalho.</li>
            <li> - Curiosidade por soluções inovadoras.</li>
            <li> - Resiliência ao superar desafios.</li>
          </ol>
        </p>
      </section>
    )
  }

  if (status.isHovered && Object.keys(status.skill).length > 0) {
    return (
      <section className="flex min-h-[10rem] w-full animate-fade flex-col items-start justify-center gap-4 p-8 transition-all">
        <h2 className="text-xl font-bold">{status.skill.title}</h2>
        <p className="text-xl">
          {status.skill.description}
        </p>
      </section>
    )
  }
  return (
    <p>error</p>
  )
}

export default SkillDescription
