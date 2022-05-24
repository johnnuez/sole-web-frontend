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
      style={{
        transformStyle: 'preserve-3d',
        cursor: 'pointer',
        WebkitTransformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        className='absolute w-full h-full overflow-hidden bg-center bg-no-repeat bg-cover rounded-md bg-neutral-400 bg-opacity-90 bg-blend-difference'
        style={{
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          backgroundImage: `url('https://res.cloudinary.com/dpvmqdpwk/image/upload/v1652971300/DSC_0008_e99d2fc4cf.jpg')`,
        }}
      ></motion.div>
      <motion.div
        style={{ backfaceVisibility: 'hidden', rotateY: 180, WebkitBackfaceVisibility: 'hidden' }}
      >
        <Link href={`/blog/${post.slug}`}>
          <a>
            <div
              style={{ backgroundImage: `url(${post.image.data.attributes.formats.medium.url})` }}
              className='flex flex-col bg-center bg-cover rounded-md h-[27rem] w-[17rem] 3xl:h-[31rem] 3xl:w-[21rem] bg-gray-900 bg-opacity-90 lg:bg-opacity-50 lg:bg-blend-darken bg-blend-multiply lg:hover:shadow-[0_0_20px_8px_rgba(0,0,0,0.5)] transition-shadow ease-in-out duration-1000'
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
