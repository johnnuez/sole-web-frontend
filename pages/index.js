import BlogPostCard from '@/components/BlogPostCard'
import CardCarousel from '@/components/CardCarousel'
import CourseSection from '@/components/CourseSection'
import Heading from '@/components/Heading'
import Layout from '@/components/Layout'
import Separator from '@/components/Separator'
import { API_URL } from '@/config/index'
import axios from 'axios'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home({ posts, course }) {
  const blogCardsArray = posts.map((post) => (
    <BlogPostCard duration={1} key={post.id} post={post.attributes} />
  ))

  return (
    <Layout>
      <CourseSection course={course} />
      <div className='flex justify-center my-8'>
        <Link href='/blog/'>
          <a className='px-4 py-2 text-base font-semibold text-white bg-gray-600 rounded-sm shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-200'>
            Ver todos los cursos
          </a>
        </Link>
      </div>
      <Separator />
      <Heading title='blog' />

      <motion.div
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className='hidden max-w-6xl gap-3 pt-10 pb-5 mx-auto lg:grid lg:grid-cols-3 justify-items-center 3xl:max-w-7xl'>
          {posts &&
            posts.map((post, i) => <BlogPostCard index={i} key={post.id} post={post.attributes} />)}
        </div>

        <div className='py-8 lg:hidden px-[1%]'>
          <CardCarousel cards={blogCardsArray} />
        </div>
        <div className='flex justify-center my-8'>
          <Link href='/blog/'>
            <a className='px-4 py-2 text-base font-semibold text-white bg-gray-600 rounded-sm shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-200'>
              Ver todos los posts
            </a>
          </Link>
        </div>
      </motion.div>
      <Separator />
    </Layout>
  )
}

export async function getServerSideProps() {
  const posts = await axios.get(
    `${API_URL}/api/posts?pagination[start]=0&pagination[limit]=3&populate=%2A&sort[0]=publishedAt%3Adesc`
  )

  const course = await axios.get(
    `${API_URL}/api/courses?pagination[start]=0&pagination[limit]=1&populate=%2A&sort[0]=publishedAt%3Adesc&filters[inscriptionsOpen]=true`
  )

  return {
    props: { posts: posts.data.data, course: course.data.data[0] },
  }
}
