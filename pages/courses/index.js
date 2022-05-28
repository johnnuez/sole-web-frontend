import CourseCard from '@/components/CourseCard'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import { API_URL } from '@/config/index'
import axios from 'axios'
import { motion } from 'framer-motion'
import Custom500Page from 'pages/500'
import qs from 'qs'
import useSWR from 'swr'

const query = qs.stringify(
  {
    populate: '*',
    sort: ['startDate:desc', 'title'],
  },
  {
    encodeValuesOnly: true,
  }
)

const fetcher = (url) => axios.get(url).then((res) => res.data.data)

export default function CoursesPage({ courses }) {
  const { data, error } = useSWR(`${API_URL}/api/courses?${query}`, fetcher, {
    fallbackData: courses,
  })

  if (error) {
    return (
      <Layout>
        <Custom500Page />
      </Layout>
    )
  }
  if (!data) {
    return (
      <Layout>
        <p>Loading</p>
      </Layout>
    )
  }

  return (
    <Layout title='Cursos'>
      <div className='flex flex-col'>
        {data &&
          data.map((course, i) => (
            <div className={`flex-1 px-[1%] md:px-[8%] pb-12 ${i === 0 ? 'pt-8' : ''}`} key={i}>
              <Section bgUrl='https://res.cloudinary.com/dpvmqdpwk/image/upload/v1651489354/large_post_prueba_40f23514d8.jpg'>
                <div className='flex flex-col py-8'>
                  <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className={`w-full`}
                  >
                    <CourseCard course={course} pictureOnRight={i % 2 !== 0} />
                  </motion.div>
                </div>
              </Section>
            </div>
          ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const courses = await axios.get(`${API_URL}/api/courses?${query}`)

  return {
    props: {
      courses: courses.data.data,
    },
    revalidate: 1,
  }
}
