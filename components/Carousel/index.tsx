"use client"

import { Fragment, useEffect, useState } from "react"
import { Trepo } from "@/lib/respos"
import Deck from "@/components/Deck"

interface CarouselCArdsProps {
  cardList: Trepo[]
  autoPlay?: boolean
}

const CarouselCards = ({ cardList, autoPlay }: CarouselCArdsProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedCard, setSelectedCard] = useState<Trepo>(cardList[0])
  const [loader, setLoader] = useState(false)

  const selectNewImage = (index: number, cards: Trepo[], next = true) => {
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
    }, 500)
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
      <section className="relative h-full w-full rounded-lg md:w-3/4">
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
                className={`duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 indent-[999px] transition-opacity motion-reduce:transition-none ${index === selectedIndex ? "opacity-100" : "opacity-50"
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
            <svg
              className="h-4 w-4 text-white dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
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
            <svg
              className="h-4 w-4 text-white dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </section>
    </Fragment>
  )
}

export default CarouselCards
