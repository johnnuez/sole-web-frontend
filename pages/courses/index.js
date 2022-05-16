import CourseCard from '@/components/CourseCard'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import { API_URL } from '@/config/index'
import axios from 'axios'
import { motion } from 'framer-motion'
import qs from 'qs'

export default function CoursesPage({ courses }) {
  return (
    <Layout title='Cursos'>
      <div className='flex flex-col'>
        {courses &&
          courses.map((course, i) => (
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

export async function getServerSideProps() {
  const query = qs.stringify(
    {
      populate: '*',
      sort: ['startDate:desc'],
    },
    {
      encodeValuesOnly: true,
    }
  )

  const courses = await axios.get(`${API_URL}/api/courses?${query}`)

  return {
    props: {
      courses: courses.data.data,
    },
  }
}
