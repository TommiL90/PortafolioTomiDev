import { Metadata } from "next"
import { Icons } from "@/components/Icons"
import { LuLinkedin } from 'react-icons/lu';
import { BiLogoGmail, BiLogoGithub } from 'react-icons/bi';
import cover from "@/public/cover.png"
import Image from "next/image"

export const metadata: Metadata = {
  title: "TomiDev | Contato",
  description:
    "Entre em contato com o Tomás para discutir parcerias, oportunidades ou compartilhar ideias. Ele está aberto a enfrentar novos desafios e estabelecer colaborações. Juntos, podemos buscar resultados excepcionais e impulsionar o sucesso dos seus projetos. Não hesite em entrar em contato agora mesmo!",
}

export default function Contact() {
  return (
    <section className="md: flex min-h-full w-full max-w-[1400px] flex-1 animate-fade flex-col items-center justify-center transition-all md:flex-row md:justify-around">
      <aside className="m-8 h-full w-full flex-col rounded-lg bg-backgroundSecondary p-4 md:flex md:w-full md:max-w-xl">
        <h1 className="mb-8 text-4xl font-bold text-primary-foreground md:text-5xl">
          Contato
        </h1>
        <p className="  text-2xl font-semibold">
          Vamos conversar e desenvolver{" "}
          <strong className="text-primary-foreground">
            {" "}
            soluções para a sua empresa
          </strong>
          , juntos!.
        </p>
        <p className="  mt-4 text-2xl font-semibold">
          Sinta-se à vontade para usar qualquer um dos métodos abaixo para se
          conectar comigo.
        </p>

        <section className="mt-20 flex flex-col items-start justify-around gap-4">
          <div className="flex items-center justify-center gap-2">
            <span className="min-w-11 min-h-11 flex h-11 w-11 items-center justify-center rounded-full border-2 border-socialLinkedin bg-socialLinkedin p-0 text-white hover:border-socialLinkedin hover:bg-transparent hover:text-socialLinkedin">
              <LuLinkedin className="h-5 w-5" />
            </span>
            <a
              className="flex items-center text-2xl font-semibold transition-all ease-in hover:text-primary-foreground"
              href="https://www.linkedin.com/in/tomasbenjamin/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="min-w-11 min-h-11 flex h-11 w-11 items-center justify-center rounded-full border-2 border-socialGitHub bg-socialGitHub p-0 text-white hover:border-socialGitHub hover:bg-transparent hover:text-socialGitHub">
              <BiLogoGithub className="h-5 w-5" />
            </span>
            <a
              className="flex items-center text-2xl font-semibold transition-all ease-in hover:text-primary-foreground"
              href="https://www.linkedin.com/in/tomasbenjamin"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="min-w-11 min-h-11 flex h-11 w-11 items-center justify-center rounded-full border-2 border-socialGmail bg-socialGmail p-0 text-white hover:border-socialGmail hover:bg-transparent hover:text-socialGmail">
              <BiLogoGmail className="h-5 w-5" />
            </span>
            <a
              className="flex items-center text-2xl font-semibold transition-all ease-in hover:text-primary-foreground"
              href="mailto:tomasbenjamin@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <span>tomasbenjamin.L90</span><span className="hidden md:inline">@gmail.com</span>
              
            </a>
          </div>
        </section>
      </aside>
      <section className="hidden md:inline">
        <Image src={cover} alt="cover" className="rounded-lg" />
      </section>
    </section>
  )
}
