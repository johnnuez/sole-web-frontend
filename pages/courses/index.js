import AnimatedDiv from '@/components/AnimatedDiv'
import CourseCard from '@/components/CourseCard'
import Heading from '@/components/Heading'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import { API_URL } from '@/config/index'
import axios from 'axios'
import Custom500Page from 'pages/500'
import { closedCoursesQueryCreator, openCoursesQueryCreator } from 'queries/courses'
import useSWR from 'swr'
import { swrFetcher } from 'utils/swrFetcher'

const openCoursesQuery = openCoursesQueryCreator()
const closedCoursesQuery = closedCoursesQueryCreator()

const fetcher = swrFetcher

export default function CoursesPage({ openCourses, closedCourses }) {
  const { data: openCoursesData, error: openCoursesError } = useSWR(
    `${API_URL}/api/courses?${openCoursesQuery}`,
    fetcher,
    {
      fallbackData: openCourses,
    }
  )

  const { data: closedCoursesData, error: closedCoursesError } = useSWR(
    `${API_URL}/api/courses?${closedCoursesQuery}`,
    fetcher,
    {
      fallbackData: closedCourses,
    }
  )

  if (openCoursesError || closedCoursesError) {
    return <Custom500Page />
  }
  if (!openCoursesData || !closedCoursesData) {
    return (
      <Layout>
        <p>Loading</p>
        {/* TODO: Courses page loading skeleton */}
      </Layout>
    )
  }

  const RenderCourse = ({ course, i }) => (
    <div className={`flex-1 px-[1%] md:px-[8%] pb-10 ${i === 0 ? 'pt-10' : ''}`}>
      <Section
        bgUrl='https://res.cloudinary.com/dpvmqdpwk/image/upload/v1651489354/large_post_prueba_40f23514d8.jpg'
        blurOnMobile
      >
        <div className='relative flex flex-col py-8'>
          <AnimatedDiv direction='y' duration={1} className='w-full'>
            <CourseCard course={course} pictureOnRight={i % 2 !== 0} />
          </AnimatedDiv>
        </div>
      </Section>
    </div>
  )

  return (
    <Layout title='Cursos'>
      <div className='flex flex-col'>
        {openCoursesData &&
          openCoursesData.map((course, i) => (
            <RenderCourse course={course} i={i} key={course.id} />
          ))}
        {closedCourses && <Heading title='Próximamente' />}
        {closedCourses &&
          closedCourses.map((course, i) => <RenderCourse course={course} i={i} key={course.id} />)}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const openCourses = await axios.get(`${API_URL}/api/courses?${openCoursesQuery}`)
  const closedCourses = await axios.get(`${API_URL}/api/courses?${closedCoursesQuery}`)

  return {
    props: {
      openCourses: openCourses.data.data,
      closedCourses: closedCourses.data.data,
    },
    revalidate: 1,
  }
}
