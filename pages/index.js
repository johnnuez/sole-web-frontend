import BlogPostCard from '@/components/BlogPostCard'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import { API_URL } from '@/config/index'
import axios from 'axios'
import CourseCard from '@/components/CourseCard'
import Button from '@/components/Button'
import ScheduleCard from '@/components/ScheduleCard'
import useSWR from 'swr'
import Custom500Page from './500'
import SlickCarousel from '@/components/SlickCarousel'
import AnimatedDiv from '@/components/AnimatedDiv'
import { postsQueryCreator } from 'queries/posts'
import { openCoursesQueryCreator } from 'queries/courses'
import { swrFetcher } from 'utils/swrFetcher'

const postsQuery = postsQueryCreator(3)
const coursesQuery = openCoursesQueryCreator(5)

const fetcher = swrFetcher

export default function Home({ fallback }) {
  const { data: courses, error: coursesError } = useSWR(
    `${API_URL}/api/courses?${coursesQuery}`,
    fetcher,
    {
      fallbackData: fallback[`${API_URL}/api/courses?${coursesQuery}`],
    }
  )
  const { data: posts, error: postsError } = useSWR(`${API_URL}/api/posts?${postsQuery}`, fetcher, {
    fallbackData: fallback[`${API_URL}/api/posts?${postsQuery}`],
  })

  if (coursesError || postsError) {
    return <Custom500Page />
  }

  if (!courses || !posts) {
    return (
      <Layout>
        <p>Loading</p>
        {/* TODO loading skeletons for courses and posts */}
      </Layout>
    )
  }

  const blogCardsArray = posts
    ? posts.map((post) => (
        <BlogPostCard duration={1} post={post.attributes} animated={false} key={post.id} />
      ))
    : []

  const courseCardsArray = courses
    ? courses.map((course) => <CourseCard key={course.id} course={course} />)
    : []

  return (
    <Layout>
      <div className='px-[2%] md:px-[8%] py-12'>
        <Section title='Cursos & Talleres' blurOnMobile href='/courses'>
          <AnimatedDiv className='py-5 mx-auto 3xl:max-w-[80rem] max-w-[70rem]'>
            <SlickCarousel>{courseCardsArray}</SlickCarousel>
          </AnimatedDiv>
          <div className='mt-4'>
            <Button text='ver todos los cursos' href='/courses' size='md' />
          </div>
        </Section>
      </div>
      <div className='px-[2%] md:px-[8%] pb-12'>
        <Section blurOnMobile>
          <AnimatedDiv className=' 3xl:py-5'>
            <ScheduleCard />
          </AnimatedDiv>
        </Section>
      </div>
      <div className='px-[2%] md:px-[8%] pb-12'>
        <Section title='Blog' href='/blog'>
          <AnimatedDiv>
            <div className='py-8'>
              <div className='hidden max-w-6xl gap-1 mx-auto lg:grid lg:grid-flow-col justify-items-center 3xl:max-w-7xl bg-opacity-10 rounded-xl'>
                {posts &&
                  posts.map((post, i) => (
                    <BlogPostCard index={i} key={post.id} post={post.attributes} />
                  ))}
              </div>
              <div className='lg:hidden max-w-[25rem] mx-auto'>
                <SlickCarousel arrows={true}>{blogCardsArray}</SlickCarousel>
              </div>
            </div>
          </AnimatedDiv>
          <div className='mt-2'>
            <Button text='ver más posts' href='/blog' size='md' />
          </div>
        </Section>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await axios.get(`${API_URL}/api/posts?${postsQuery}`)
  const courses = await axios.get(`${API_URL}/api/courses?${coursesQuery}`)

  return {
    props: {
      fallback: {
        [`${API_URL}/api/posts?${postsQuery}`]: posts.data.data,
        [`${API_URL}/api/courses?${coursesQuery}`]: courses.data.data,
      },
    },
    revalidate: 1,
  }
}
