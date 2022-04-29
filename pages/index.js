import BlogPostCard from '@/components/BlogPostCard'
import CardCarousel from '@/components/CardCarousel'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import { API_URL } from '@/config/index'
import axios from 'axios'
import CourseCard from '@/components/CourseCard'
import Button from '@/components/Button'
import { motion } from 'framer-motion'
import ScheduleCard from '@/components/ScheduleCard'

export default function Home({ posts, course }) {
  const blogCardsArray = posts.map((post) => (
    <BlogPostCard duration={1} key={post.id} post={post.attributes} />
  ))

  return (
    <Layout>
      <div className='px-[2%] py-[1%]'>
        <Section title='Cursos & Talleres'>
          <motion.div
            initial={{ x: -50 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            <div className='py-3'>
              <CourseCard course={course} />
            </div>
          </motion.div>
          <Button text='inscripciones' href={course.attributes.inscriptionFormUrl} size='xl' />
        </Section>
      </div>
      <div className='px-[2%] pb-[1%]'>
        <Section title=''>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            <ScheduleCard />
          </motion.div>
        </Section>
      </div>
      <div className='px-[2%] pb-[1%]'>
        <Section title='Blog'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            <div className='py-8'>
              <div className='hidden max-w-6xl mx-auto lg:grid lg:grid-cols-3 justify-items-center 3xl:max-w-7xl bg-opacity-10 rounded-xl px-[1%]'>
                {posts &&
                  posts.map((post, i) => (
                    <BlogPostCard index={i} key={post.id} post={post.attributes} />
                  ))}
              </div>
              <div className='p-[2%] mx-auto bg-gray-400 lg:hidden bg-opacity-10 backdrop-blur-sm rounded-xl w-fit'>
                <CardCarousel cards={blogCardsArray} />
              </div>
            </div>
          </motion.div>
          <Button text='ver más posts' href='/blog' size='lg' />
        </Section>
      </div>
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
