import Link from 'next/link'
import { motion } from 'framer-motion'

const card = {
  noHover: { opacity: 1 },
  hover: { opacity: 0.8, transition: { duration: 0.5, easings: ['easeInOut'] } },
}

const bar = {
  noHover: { opacity: 1 },
  hover: {
    width: ['0%', '70%'],
    opacity: 0.5,
    transition: { duration: 1 },
  },
}

export default function BlogPostCard({ post, index = 0, duration = 2 }) {
  return (
    <motion.div
      whileInView={{ rotateY: 180 }}
      viewport={{ once: true }}
      transition={{ duration: duration, delay: index * 0.8 }}
      className='relative border border-yellow-500 rounded-md border-opacity-20'
      style={{ transformStyle: 'preserve-3d', cursor: 'pointer' }}
    >
      <motion.div
        className='absolute w-full h-full overflow-hidden bg-yellow-600 bg-center bg-no-repeat bg-cover rounded-md bg-opacity-10 bg-blend-lighten'
        style={{
          backfaceVisibility: 'hidden',
          backgroundImage: `url('https://res.cloudinary.com/dpvmqdpwk/image/upload/v1647537073/v743_tang_10_5b66b2f264.jpg')`,
        }}
      ></motion.div>
      <motion.div style={{ backfaceVisibility: 'hidden', rotateY: 180 }}>
        <Link href={`/blog/${post.slug}`}>
          <a>
            <div
              style={{ backgroundImage: `url(${post.image.data.attributes.formats.medium.url})` }}
              className='flex flex-col bg-center bg-cover rounded-md h-[26rem] max-w-[18rem] 3xl:h-[30rem] 3xl:max-w-[21rem] bg-zinc-700 bg-opacity-40 bg-blend-hard-light'
            >
              <motion.div
                whileHover='hover'
                variants={card}
                className='flex flex-col justify-end flex-1 w-full rounded-md shadow-2xl lg:opacity-0 lg:hover:bg-gradient-to-t hover:from-gray-900 hover:to-yellow-700'
              >
                <motion.div className='h-0.5 bg-white self-center' variants={bar} />
                <p className='px-2 mt-3 mb-5 text-xl tracking-wider text-center rounded-lg text-neutral-200 3xl:text-2xl line-clamp-6'>
                  {post.title}
                </p>
              </motion.div>
            </div>
          </a>
        </Link>
      </motion.div>
    </motion.div>
  )
}
