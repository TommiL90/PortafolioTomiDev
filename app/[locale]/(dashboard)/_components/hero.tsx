'use client'

import { useEffect, useState } from 'react'

export const Hero = () => {
  const [index, setIndex] = useState(0)
  const [textEffect, setText] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setText(
        (prevText) => prevText + `Desenvolvedor Full Stack. 🚀`.charAt(index),
      )
      setIndex((prevIndex) => prevIndex + 1)
    }, 100)

    return () => clearInterval(interval)
  }, [index])
  return (
    <section className="mt-4 flex h-max w-full flex-col gap-4 md:mt-0 md:w-1/2 md:items-start">
      <p className="text-4xl">Hello World! 👋</p>
      <p className="mt-2 text-2xl leading-normal text-primary md:text-5xl">
        <i className="font-mono">Transformando Visões em Código</i>
      </p>
      <h1 className='text-5xl font-bold leading-normal after:ml-2 after:animate-blink after:text-white after:content-["|"] md:ml-16 md:text-8xl'>
        {textEffect}
      </h1>
    </section>
  )
}
