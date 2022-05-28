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
import qs from 'qs'
import useSWR from 'swr'
import Custom500Page from './500'

const postsQuery = qs.stringify(
  {
    populate: '*',
    pagination: {
      start: 0,
      limit: 3,
    },
    sort: ['publishedAt:desc'],
  },
  {
    encodeValuesOnly: true,
  }
)

const courseQuery = qs.stringify(
  {
    populate: '*',
    pagination: {
      start: 0,
      limit: 1,
    },
    sort: ['startDate:desc', 'title'],
    filters: {
      $or: [
        {
          inscriptionsOpen: {
            $eq: true,
          },
        },
        {
          onlyRecorded: {
            $eq: true,
          },
        },
      ],
    },
  },
  {
    encodeValuesOnly: true,
  }
)
const courseFetcher = (url) => axios.get(url).then((res) => res.data.data[0])
const postsFetcher = (url) => axios.get(url).then((res) => res.data.data)

export default function Home({ fallback }) {
  const { data: course, error: courseError } = useSWR(
    `${API_URL}/api/courses?${courseQuery}`,
    courseFetcher,
    {
      fallbackData: fallback[`${API_URL}/api/courses?${courseQuery}`],
    }
  )
  const { data: posts, error: postsError } = useSWR(
    `${API_URL}/api/posts?${postsQuery}`,
    postsFetcher,
    {
      fallbackData: fallback[`${API_URL}/api/posts?${postsQuery}`],
    }
  )

  if (courseError || postsError) {
    return (
      <Layout>
        <Custom500Page />
      </Layout>
    )
  }
  if (!course || !posts) {
    return (
      <Layout>
        <p>Loading</p>
      </Layout>
    )
  }

  const blogCardsArray = posts
    ? posts.map((post) => <BlogPostCard duration={1} key={post.id} post={post.attributes} />)
    : []

  return (
    <Layout>
      <div className='px-[2%] md:px-[8%] py-12'>
        <Section title='Cursos & Talleres' blurOnMobile>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
          >
            <div className='py-3'>{course && <CourseCard course={course} />}</div>
          </motion.div>
          {course && course.attributes.onlyRecorded ? (
            <Button
              text='Adquirir curso'
              href={course.attributes.recordingsFormUrl}
              size='lg'
              externalLink
            />
          ) : (
            <Button
              text='inscripciones'
              href={course.attributes.inscriptionFormUrl}
              size='lg'
              externalLink
            />
          )}
        </Section>
      </div>
      <div className='px-[2%] md:px-[8%] pb-12'>
        <Section blurOnMobile>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
            className=' 3xl:py-5'
          >
            <ScheduleCard />
          </motion.div>
        </Section>
      </div>
      <div className='px-[2%] md:px-[8%] pb-12'>
        <Section title='Blog'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
          >
            <div className='py-8'>
              <div className='hidden max-w-6xl gap-1 mx-auto lg:grid lg:grid-flow-col justify-items-center 3xl:max-w-7xl bg-opacity-10 rounded-xl'>
                {posts &&
                  posts.map((post, i) => (
                    <BlogPostCard index={i} key={post.id} post={post.attributes} />
                  ))}
              </div>
              <div className='p-[2%] mx-auto lg:hidden rounded-xl w-fit'>
                <CardCarousel cards={blogCardsArray} />
              </div>
            </div>
          </motion.div>
          <Button text='ver más posts' href='/blog' size='md' />
        </Section>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await axios.get(`${API_URL}/api/posts?${postsQuery}`)

  const course = await axios.get(`${API_URL}/api/courses?${courseQuery}`)

  return {
    props: {
      fallback: {
        [`${API_URL}/api/posts?${postsQuery}`]: posts.data.data,
        [`${API_URL}/api/courses?${courseQuery}`]: course.data.data[0],
      },
    },
    revalidate: 1,
  }
}
