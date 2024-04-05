import React from 'react'

import { Metadata } from 'next'

import { Language } from '@prisma/client'
import { retrieveRepos } from '@/actions/retrieve-repos'
import { notFound } from 'next/navigation'
import { CarouselCards } from '@/components/carousel'

export const metadata: Metadata = {
  title: 'TomiDev | Projetos',
  description:
    'Explore os projetos do TomiDev, desde trabalhos recentes a conquistas passadas. Descubra soluções inovadoras, tecnologias utilizadas e resultados alcançados. Veja potencial para criar produtos de qualidade.',
}

interface Props {
  params: {
    locale: string
  }
}

interface ImageUrl {
  url: string
}
interface TechName {
  name: string
}

export interface FormatedProject {
  id: string
  title: string
  description: string
  deploy: string
  repository: string
  type: string
  language: string
  techs: TechName[]
  images: ImageUrl[]
}

const ProjectsPage = async ({ params }: Props) => {
  const language =
    (params.locale.toUpperCase() as Language) || ('PT' as Language)
  const repos = await retrieveRepos(language)
  if (!repos) {
    return notFound()
  }

  const frontRepos: FormatedProject[] = repos.filter(
    (repo) => repo.type === 'FRONT',
  )

  const backRepos: FormatedProject[] = repos.filter(
    (repo) => repo.type === 'API',
  )
  return (
    <section className="flex h-full w-full max-w-[1400px] flex-1 animate-fade flex-col  items-center justify-around gap-4 py-8 transition-all">
      <div className="flex w-[90%] flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold md:text-3xl">Projetos Front</h2>
        {frontRepos.length > 0 && (
          <CarouselCards cardList={frontRepos} autoPlay />
        )}
      </div>
      <div className="flex w-[90%] flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold md:text-3xl">Projetos Back-End</h2>
        {backRepos.length > 0 && (
          <CarouselCards cardList={backRepos} autoPlay />
        )}
      </div>
    </section>
  )
}

export default ProjectsPage
