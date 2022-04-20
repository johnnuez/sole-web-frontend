import CourseCard from '@/components/CourseCard'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import { API_URL } from '@/config/index'
import axios from 'axios'
import { motion } from 'framer-motion'

export default function CoursesPage({ courses }) {
  console.log(courses)
  return (
    <Layout title='Cursos'>
      <div className='flex flex-col'>
        {courses &&
          courses.map((course, i) => (
            <div className={`flex-1 px-[5%] pb-5 ${i === 0 ? 'pt-5' : ''}`} key={i}>
              <Section
                title={course.attributes.title}
                bgBlend={i % 2 === 0 ? 'bg-blend-multiply' : 'bg-blend-color-burn'}
              >
                <div className={`flex flex-col ${i % 2 === 0 ? 'items-start' : 'items-end'}`}>
                  <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    className={`py-8 w-full lg:w-11/12 xl:w-10/12`}
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
