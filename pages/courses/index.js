import CourseCard from '@/components/CourseCard'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import { API_URL } from '@/config/index'
import axios from 'axios'
import { motion } from 'framer-motion'

export default function CoursesPage({ courses }) {
  return (
    <Layout title='Cursos'>
      <div className='flex flex-col'>
        {courses &&
          courses.map((course, i) => (
            <div className={`flex-1 px-[1%] pb-[1%] ${i === 0 ? 'pt-[1%]' : ''}`} key={i}>
              <Section title=''>
                <div className={`flex flex-col`}>
                  <motion.div
                    initial={{ y: -30 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
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
  const courses = await axios.get(`${API_URL}/api/courses?populate=%2A&sort[0]=publishedAt%3Adesc`)

  return {
    props: {
      courses: courses.data.data,
    },
  }
}
