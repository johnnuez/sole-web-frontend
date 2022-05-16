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
        className='absolute w-full h-full overflow-hidden bg-black bg-center bg-no-repeat bg-cover rounded-md bg-opacity-40 bg-blend-overlay'
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
              className='flex flex-col bg-center bg-cover rounded-md h-[26rem] w-[18rem] 3xl:h-[30rem] 3xl:w-[21rem] bg-black bg-opacity-70 lg:bg-opacity-20 lg:bg-blend-color bg-blend-multiply lg:hover:shadow-[0_0_20px_8px_rgba(0,0,0,0.5)] transition-shadow ease-in-out duration-1000'
            >
              <motion.div
                whileHover='hover'
                variants={card}
                className='flex flex-col justify-end flex-1 w-full rounded-md lg:opacity-0 lg:hover:bg-gradient-to-t hover:from-black hover:to-yellow-700'
              >
                <motion.div
                  className='h-0.5 bg-neutral-300 self-center w-3/4 bg-opacity-80'
                  variants={bar}
                />
                <p className='px-2 mx-auto mt-3 mb-5 text-xl tracking-wider text-center rounded-lg text-neutral-300 3xl:text-2xl line-clamp-6 lg:text-neutral-100'>
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
