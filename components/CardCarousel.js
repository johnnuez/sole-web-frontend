import { motion } from 'framer-motion'
import { useState } from 'react'

const swipeConfidenceThreshold = 10
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

export default function CardCarousel({ cards }) {
  const [page, setPage] = useState(0)

  const paginate = (direction) => {
    const cardsTotal = cards.length - 1
    if (page + direction < 0) {
      setPage(cardsTotal)
      return
    }
    if (page + direction > cardsTotal) {
      setPage(0)
      return
    }
    setPage(page + direction)
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <motion.div
        drag='x'
        dragMomentum={false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        animate={{ opacity: 1 }}
        whileDrag={{ opacity: 0.5 }}
        whileTap={{ opacity: 0.5 }}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x)
          if (swipe < -swipeConfidenceThreshold) {
            paginate(1)
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1)
          }
        }}
      >
        <div className='relative'>
          <span
            className='hidden lg:block absolute text-black top-[45%] rounded-full bg-gray-200 p-4 opacity-40 z-10 -left-14 hover:opacity-100 active:opacity-40 transition-all ease-in-out duration-500'
            onClick={() => paginate(-1)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 '
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
            </svg>
          </span>
          <span
            className='hidden absolute text-black top-[45%] rounded-full bg-gray-200 p-4 opacity-40 z-10 lg:block -right-14 hover:opacity-100 active:opacity-40 transition-all ease-in-out duration-500'
            onClick={() => {
              paginate(1)
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
            </svg>
          </span>
          {cards[page]}
        </div>
      </motion.div>
      <div className='flex items-center pt-2 lg:hidden'>
        {cards.map((card, i) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 mx-2 rounded-full ${
              i === page ? 'bg-gray-200' : 'bg-gray-600'
            }`}
            onClick={() => setPage(i)}
          />
        ))}
      </div>
    </div>
  )
}
