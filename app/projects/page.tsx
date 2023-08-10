import React, { Fragment } from "react"

import { reposBack, reposFront } from "@/lib/respos"
import CarouselCards from "@/components/Carousel"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'TomiDev | Projetos',
  description: 'Explore os projetos do TomiDev, desde trabalhos recentes a conquistas passadas. Descubra soluções inovadoras, tecnologias utilizadas e resultados alcançados. Veja potencial para criar produtos de qualidade.',
}

const ProjectsPage = () => {
  return (
    <section className="my-6 flex h-full w-full max-w-[1400px] animate-fade flex-col items-center justify-center gap-6 transition-all">
      <div className="flex w-[90%] flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold md:text-3xl">Projetos Front-End</h2>
        <CarouselCards cardList={reposFront} autoPlay />
      </div>
      <div className="flex w-[90%] flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold md:text-3xl">Projetos Back-End</h2>
        <CarouselCards cardList={reposBack} autoPlay />
      </div>
    </section>
  )
}

export default ProjectsPage
