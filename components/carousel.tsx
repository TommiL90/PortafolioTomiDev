'use client'

import { FormatedProject } from '@/app/[locale]/projects/page'
import { Fragment, useEffect, useState } from 'react'
import { Deck } from './deck'
import { ArrowBigLeftDash, ArrowBigRightDash } from 'lucide-react'

interface CarouselCArdsProps {
  cardList: FormatedProject[]
  autoPlay?: boolean
}

export const CarouselCards = ({ cardList, autoPlay }: CarouselCArdsProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedCard, setSelectedCard] = useState<FormatedProject>(cardList[0])
  const [loader, setLoader] = useState(false)

  const selectNewImage = (
    index: number,
    cards: FormatedProject[],
    next = true,
  ) => {
    setLoader(false)
    setTimeout(() => {
      const condition = next
        ? selectedIndex < cards.length - 1
        : selectedIndex > 0
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
          ? selectedIndex - 1
          : cards.length - 1
      setSelectedIndex(nextIndex)
      setSelectedCard(cards[nextIndex])
    }, 350)
  }

  const previous = () => {
    selectNewImage(selectedIndex, cardList, false)
  }

  const next = () => {
    selectNewImage(selectedIndex, cardList)
  }

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, cardList)
      }, 4000)
      return () => clearInterval(interval)
    }
  })

  return (
    <Fragment>
      <div className="size-full relative rounded-lg md:w-3/4">
        <Deck repo={selectedCard} loader={loader} setLoader={setLoader} />

        {/* <!-- Slider indicators --> */}
        <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
          {cardList.map((_, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setSelectedCard(cardList[index])
                  setSelectedIndex(index)
                }}
                className={`duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 indent-[999px] transition-opacity motion-reduce:transition-none ${
                  index === selectedIndex ? 'opacity-100' : 'opacity-50'
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            )
          })}
        </div>

        {/* <!-- Slider controls --> */}

        <button
          onClick={previous}
          type="button"
          className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-300/30 dark:group-hover:bg-gray-500/60 dark:group-focus:ring-gray-800/70">
            <ArrowBigLeftDash className="text-muted-foreground" />
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          onClick={next}
          type="button"
          className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-300/30 dark:group-hover:bg-gray-500/60 dark:group-focus:ring-gray-800/70">
            <ArrowBigRightDash className="text-black md:text-muted" />
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </Fragment>
  )
}
