import Image from 'next/image'
import Morty from '@/public/morty.png'
import { Hero } from './_components/hero'

export default function IndexPage() {
  return (
    <section className="justify-cente flex min-h-full flex-1 items-center">
      <div className="flex w-[95vw] max-w-[1400px] animate-fade flex-col-reverse items-center justify-center transition-all md:flex-row md:justify-between">
        <Hero />
        <figure className="relative w-40 animate-fly rounded-full md:w-80">
          <Image
            src={Morty}
            alt="Morty"
            priority
            className="rounded-full object-cover transition-all hover:scale-105"
          />
        </figure>
      </div>
    </section>
  )
}
