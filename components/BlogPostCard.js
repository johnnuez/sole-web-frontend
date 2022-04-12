import Link from 'next/link'
import { motion } from 'framer-motion'

const card = {
  noHover: { opacity: 1 },
  hover: { opacity: 0.8, transition: { duration: 0.5, easings: ['easeInOut'] } },
}

const bar = {
  noHover: { opacity: 1 },
  hover: {
    width: ['0%', '65%'],
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
      className='relative'
      style={{ transformStyle: 'preserve-3d', cursor: 'pointer' }}
    >
      <motion.div
        className='absolute w-full h-full overflow-hidden bg-center bg-no-repeat bg-cover border border-gray-900 rounded-md'
        style={{
          backfaceVisibility: 'hidden',
          backgroundImage: `url('https://res.cloudinary.com/dpvmqdpwk/image/upload/v1647537073/v743_tang_10_5b66b2f264.jpg')`,
          opacity: 0.8,
        }}
      ></motion.div>
      <motion.div style={{ backfaceVisibility: 'hidden', rotateY: 180 }}>
        <Link href={`/blog/${post.slug}`}>
          <a>
            <div
              style={{ backgroundImage: `url(${post.image.data.attributes.formats.medium.url})` }}
              className='flex flex-col bg-gray-400 bg-center bg-cover rounded-md bg-blend-multiply h-[26rem] max-w-[18rem] 3xl:h-[29rem] 3xl:max-w-[20rem]'
            >
              <motion.div
                whileHover='hover'
                variants={card}
                className='flex flex-col justify-end flex-1 w-full rounded-md shadow-2xl lg:opacity-0 lg:hover:bg-gradient-to-t hover:from-black hover:to-slate-800'
              >
                <motion.div className='h-0.5 bg-white self-start ml-5 3xl:ml-10' variants={bar} />
                <h5 className='px-1 pt-2 pb-8 text-2xl font-bold tracking-wide text-center text-gray-300 opacity-80 line-clamp-6'>
                  {post.title}
                </h5>
              </motion.div>
            </div>
          </a>
        </Link>
      </motion.div>
    </motion.div>
  )
}
