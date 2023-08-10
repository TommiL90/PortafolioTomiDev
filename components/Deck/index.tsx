"use client"

import {
  Dispatch,
  Fragment,
  SetStateAction,
  SyntheticEvent,
} from "react"
import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BiLinkExternal } from 'react-icons/bi';
import IconComponent from "../IconComponent"
import { Icons, TIconNAme } from "@/components/Icons"


interface IRepoProps {
  name: string
  description: string
  images: string[]
  techs: TIconNAme[]
  deploy: string
  repository: string
}

interface IDeckProps {
  repo: IRepoProps
  loader: boolean
  setLoader: Dispatch<SetStateAction<boolean>>
}

const Deck = ({ repo, loader, setLoader }: IDeckProps) => {
  const { name, description, images, techs, deploy, repository } = repo

  const handleLoad = (event: SyntheticEvent<HTMLImageElement>): void => {
    event.currentTarget.style.opacity = "1"
    setLoader(true)
  }

  return (
    <Fragment>
      <Card
        className={`max-w-3/4 rounded-lg border-none bg-cover bg-center bg-no-repeat opacity-0 shadow transition duration-1000 ${loader ? "opacity-100" : ""
          }`}
        style={{ backgroundImage: `url("/assets/${images[0]}")` }}
      >
        <div className="rounded-lg bg-zinc-800 bg-opacity-[0.95]">
          <div className="grid grid-cols-6 items-center justify-center gap-6 md:grid-cols-12 md:gap-4">
            <div className="relative col-span-6 md:col-span-4">
              <AspectRatio ratio={4 / 5} className="">
                <Image
                  className="rounded-t-lg object-cover md:rounded-none md:rounded-l-lg"
                  src={require(`../../public/assets/${images[0]}`).default.src}
                  alt={name}
                  onLoad={handleLoad}
                  fill
                  fetchPriority="high"
                  decoding="async"
                  data-nimg="1"
                />
              </AspectRatio>
            </div>
            <CardContent className="col-span-6 flex flex-col md:col-span-8">
              <CardHeader className="flex justify-start">
                <CardTitle className="font-semibold text-primary-foreground">
                  {name}
                </CardTitle>
              </CardHeader>
              <section className=" mt-3 flex flex-col gap-1 text-[#dededf]">
                <p className="mb-3 text-base font-normal text-textNeutral md:text-lg">{description}</p>
                <div className="flex items-center justify-start">
                  <span className="mr-2">Tecnologias usadas: </span>
                  {techs.map((tech, index) => (
                    <figure key={index} className="m-1 h-6 w-6">
                      <IconComponent iconName={tech} />
                    </figure>
                  ))}
                </div>
              </section>

              <CardFooter className="mt-4 flex gap-4">
                <a
                  href={deploy}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants()}
                > 
                  <span>Deploy</span> <span className="ml-2"> <BiLinkExternal className="h-5 w-5" /></span>
                </a>
                <a
                  href={repository}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ variant: "secondary" })}
                >
                  <span>Repositorio</span> <span className="ml-2"> <Icons.gitHub className="h-5 w-5" /></span>
                </a>
              </CardFooter>
            </CardContent>
          </div>
        </div>
      </Card>
    </Fragment>
  )
}

export default Deck
