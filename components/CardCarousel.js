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
        <div className='relative'>{cards[page]}</div>
      </motion.div>
      <div className='flex items-center mt-1'>
        {cards.map((card, i) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 mx-2 rounded-full ${
              i === page ? 'bg-gray-200' : 'bg-gray-700'
            }`}
            onClick={() => setPage(i)}
          />
        ))}
      </div>
    </div>
  )
}
