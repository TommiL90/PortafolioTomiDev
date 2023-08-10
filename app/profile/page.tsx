import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "TomiDev | Sobre mim",
  description:
    "Saiba mais sobre Tomás Benjamín. Informação sobre minha trajetória, experiência e objetivos profissionais.",
}
const About = () => {
  return (
    <section className="flex h-full w-full max-w-[1400px] animate-fade flex-col items-center justify-center px-28 transition-all">
      <article className="mt-8 flex h-auto max-h-[1400px] flex-col items-center justify-center md:w-full  md:flex-row md:justify-around">
        <Avatar className="h-80 w-80">
          <AvatarImage
            src={`https://github.com/tommil90.png`}
            className="rounded-full"
          />
          <AvatarFallback>TB</AvatarFallback>
        </Avatar>

        <section className="my-16 ml-0 flex min-h-[25rem] w-full flex-col items-center md:ml-8 md:w-[40rem]">
          <h1 className="mb-8 text-4xl font-bold text-textPrimary md:text-5xl">
            Sobre mim
          </h1>

          <article className="flex h-full flex-col gap-4">
            <p className="  text-xl leading-relaxed">
              Sou formado em Tecnologia Médica pela Universidade de Chile e
              estou no mercado de trabalho desde 2016. No início de 2022, decidi
              procurar um novo desafio. Atualmente sou desenvolvedor Web
              Full-Stack formado na Kenzie Academy Brasil.
            </p>
            <p className="  text-xl leading-relaxed">
              Sou apaixonado pela tecnologia e meu objetivo e me tornar um
              profissional de excelencia na área da programação, gerar valor
              para a empresa onde estiver e dar meu melhor.
            </p>
            <p className="  text-xl leading-relaxed">
              Possuo um conjunto sólido de habilidades tanto no frontend quanto
              no backend. Estou entusiasmado em continuar aprendendo e crescendo
              no campo do desenvolvimento web e contribuir para o sucesso dos
              projetos em que participo.
            </p>
          </article>
        </section>
      </article>
    </section>
  )
}

export default About
