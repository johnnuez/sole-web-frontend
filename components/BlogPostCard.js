import Link from 'next/link'
import { motion } from 'framer-motion'

export default function BlogPostCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a>
        <div
          style={{ backgroundImage: `url(${post.image.data.attributes.formats.medium.url})` }}
          className='flex flex-col break-words bg-cover bg-center bg-gray-400 bg-blend-multiply rounded-md min-h-[30rem] w-[21rem] md:w-[23rem] justify-self-center my-5'
        >
          <motion.div
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.5, easings: ['easeInOut'] }}
            className='flex flex-col items-center justify-end flex-1 h-full p-5 rounded-md shadow-2xl lg:opacity-0 lg:hover:bg-gradient-to-t hover:from-black hover:to-slate-500'
          >
            <h5 className='mb-3 text-3xl font-bold tracking-wide text-gray-300'>{post.title}</h5>
            <p className='mb-5 text-lg tracking-wider text-gray-400'>
              {new Date(post.date).toLocaleDateString('es-AR')}
            </p>
          </motion.div>
        </div>
      </a>
    </Link>
  )
}
