'use client'

import { Dispatch, Fragment, SetStateAction, SyntheticEvent } from 'react'
import Image from 'next/image'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { ExternalLink, Github } from 'lucide-react'
import { FormatedProject } from '@/app/[locale]/projects/page'
import IconComponent from './icon-component'
import { TIconNAme } from './ui/icons'

interface IDeckProps {
  repo: FormatedProject
  loader: boolean
  setLoader: Dispatch<SetStateAction<boolean>>
}

export const Deck = ({ repo, loader, setLoader }: IDeckProps) => {
  const { title, description, images, techs, deploy, repository } = repo

  const handleLoad = (event: SyntheticEvent<HTMLImageElement>): void => {
    event.currentTarget.style.opacity = '1'
    setLoader(true)
  }

  const arrTechs = techs.map((tech) => tech.name as TIconNAme)

  return (
    <>
      <Card
        className={`max-w-3/4 rounded-lg border-none bg-cover bg-center bg-no-repeat opacity-0 shadow transition duration-1000 ${
          loader ? 'opacity-100' : ''
        }`}
        style={{
          backgroundImage: `url("${images[0].url}")`,
        }}
      >
        <div className="rounded-lg bg-zinc-800 bg-opacity-[0.95]">
          <div className="grid grid-cols-6 items-center justify-center gap-6 md:grid-cols-12 md:gap-4">
            <div className="relative col-span-6 md:col-span-4">
              <AspectRatio ratio={3 / 4} className="">
                <Image
                  className="rounded-t-lg object-cover md:rounded-none md:rounded-l-lg"
                  src={images[0].url}
                  alt={title}
                  onLoad={handleLoad}
                  fill
                  fetchPriority="high"
                  decoding="async"
                  data-nimg="1"
                />
              </AspectRatio>
            </div>
            <div className="col-span-6 flex flex-col md:col-span-8">
              <CardHeader className="flex justify-start">
                <CardTitle className="font-semibold text-primary">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="min-h-[180px] overflow-hidden">
                <p className="text-textNeutral mb-3 text-base font-normal md:text-lg">
                  {description}
                </p>
                <div className="flex items-center justify-start">
                  <span className="mr-2">Tecnologias usadas: </span>
                  {arrTechs.map((tech, index) => (
                    <figure key={index} className="m-1 h-6 w-6">
                      <IconComponent iconName={tech} />
                    </figure>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="mb-6 flex gap-4">
                <a
                  href={deploy}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants()}
                >
                  <span>Deploy</span>{' '}
                  <span className="ml-2">
                    {' '}
                    <ExternalLink className="h-5 w-5" />
                  </span>
                </a>
                <a
                  href={repository}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ variant: 'secondary' })}
                >
                  <span>Repositorio</span>{' '}
                  <span className="ml-2">
                    {' '}
                    <Github className="h-5 w-5" />
                  </span>
                </a>
              </CardFooter>
            </div>
          </div>
        </div>
      </Card>
    </>
  )
}
