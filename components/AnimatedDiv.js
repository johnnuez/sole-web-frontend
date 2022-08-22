import { motion } from 'framer-motion'

const AnimatedDiv = ({ children, direction = 'x', duration = 3, className }) => {
  return (
    <motion.div
      initial={{ x: direction === 'x' ? -50 : 0, y: direction === 'y' ? -30 : 0, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedDiv
