import Link from 'next/link'
import CourseCard from './CourseCard'
import { motion } from 'framer-motion'

export default function CourseSection({ course }) {
  return (
    <div
      className='flex flex-col mx-auto overflow-hidden bg-center bg-cover shadow-lg bg-opacity-90 bg-slate-700 bg-blend-multiply'
      style={{
        backgroundImage:
          'url(https://res.cloudinary.com/dpvmqdpwk/image/upload/v1649677006/large_0_eefb7fe9f2.jpg)',
      }}
    >
      <div className='flex justify-center flex-1 w-full py-3 text-2xl tracking-widest text-center bg-black bg-opacity-50 lg:flex-row text-amber-200 font-extralight'>
        <p className='pr-2'>**Inscripciones abiertas**</p>
      </div>
      <motion.div
        initial={{ opacity: 0, x: [-80] }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3 }}
      >
        <div className='flex-1 my-[2%]'>
          <CourseCard course={course} />
        </div>
      </motion.div>
      <div className='flex items-center justify-center flex-1 px-[8%] space-x-[3%] my-5'>
        <div className='w-64 text-center'>
          <Link href={`${course.attributes.inscriptionFormUrl}`}>
            <a className='block hover:font-light transition-all ease-in-out duration-200 py-2 text-xl font-extralight tracking-widest text-amber-100 bg-gray-900 border border-amber-100 bg-opacity-20 hover:shadow-amber-200 hover:shadow-[0_0_2px_2px_rgba(0,0,0,0.10)] hover:bg-opacity-100 border-opacity-50 px-2'>
              INSCRIPCIONES
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
