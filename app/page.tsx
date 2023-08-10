"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Morty from "@/public/morty.png"

export default function IndexPage() {
  const [index, setIndex] = useState(0)
  const [textEffect, setText] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setText(
        (prevText) => prevText + `Desenvolvedor Full Stack.🚀`.charAt(index)
      )
      setIndex((prevIndex) => prevIndex + 1)
    }, 100)

    return () => clearInterval(interval)
  }, [index])

  return (
    <section className="justify-center flex min-h-full flex-1 items-center">
      <div className="flex w-[95vw] max-w-[1400px] animate-fade flex-col-reverse items-center justify-center transition-all md:flex-row md:justify-around">
        <article className="mt-4 flex h-max w-full flex-col gap-4 md:mt-0 md:w-1/2 md:items-start">
          <p className="text-4xl">Hello World! 👋</p>
          <p className="mt-2 text-2xl leading-normal text-primary md:text-5xl">
            <i>Transformando Visões em Código</i>
          </p>
          <h1 className='text-5xl font-bold leading-normal after:ml-2 after:animate-blink after:text-white after:content-["|"] md:ml-16 md:text-8xl md:z-50'>
            {textEffect}
          </h1>
        </article>

        <figure className="relative w-40 animate-fly rounded-full md:w-80">
          <Image src={Morty} alt="Morty" priority className="rounded-full" />
        </figure>
      </div>
    </section>
  )
}
