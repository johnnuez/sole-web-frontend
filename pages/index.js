import BlogPostCard from '@/components/BlogPostCard'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import axios from 'axios'
import { motion } from 'framer-motion'
import Link from 'next/link'

const cardWrapper = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
}

const card = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -20 },
}

export default function Home({ posts }) {
  return (
    <Layout>
      <motion.div
        className='flex flex-wrap justify-around py-20 px-14'
        initial='hidden'
        animate='visible'
        variants={cardWrapper}
      >
        {posts &&
          posts.map((post) => (
            <motion.div key={post.id} variants={card} whileHover={{ scale: 1.01 }}>
              <BlogPostCard post={post.attributes} />
            </motion.div>
          ))}
      </motion.div>
      <div className='flex justify-center w-full my-2'>
        <Link href='/blog/'>
          <a className='flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-gray-600 rounded-sm shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-200'>
            Ver todos los posts
          </a>
        </Link>
      </div>
      <br />
    </Layout>
  )
}

export async function getServerSideProps() {
  const posts = await axios.get(
    `${API_URL}/api/posts?pagination[start]=0&pagination[limit]=4&populate=%2A&sort[0]=date%3Adesc`
  )

  return {
    props: { posts: posts.data.data },
  }
}
