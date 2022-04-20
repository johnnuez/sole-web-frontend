import Layout from '@/components/Layout'
import axios from 'axios'
import { API_URL } from '@/config/index'
import ReactMarkdown from 'react-markdown'
import Heading from '@/components/Heading'
import Separator from '@/components/Separator'
import Button from '@/components/Button'

const getCoverImageUrl = (images) => {
  return images.filter((image) => image.attributes.name.includes('cover'))[0].attributes.url
}

export default function CoursePage({
  course: {
    attributes: {
      title,
      subtitle,
      schedule,
      startDate,
      program,
      inscriptionFormUrl,
      inscriptionsOpen,
      images: { data },
    },
  },
}) {
  return (
    <Layout
      hero
      heroTitle={title}
      heroImageUrl={getCoverImageUrl(data)}
      bgSize='bg-contain'
      title={title}
    >
      <div className='max-w-3xl px-6 py-8 mx-auto 3xl:max-w-4xl'>
        <div className='pb-6'>
          <Heading title='comienzo' />
        </div>
        <p className='text-2xl tracking-widest text-center opacity-80 text-amber-50'>
          {new Intl.DateTimeFormat('es-AR', {
            month: 'long',
            year: 'numeric',
            day: 'numeric',
          }).format(new Date(startDate))}
        </p>
        <Separator />
        <div className='pb-6'>
          <Heading title='Frecuencia' />
        </div>
        <p className='text-2xl tracking-widest text-center opacity-80 text-amber-50'>{schedule}</p>
        <Separator />
        <div className='pb-6'>
          <Heading title='programa' />
        </div>
        <ReactMarkdown className='pb-8 text-xl tracking-wide text-justify 3xl:text-2xl opacity-80 text-amber-50 first-letter:text-4xl'>
          {program}
        </ReactMarkdown>
        <Separator />
        <div className='pb-10'>
          <Heading title='inscripciones' />
        </div>
        {inscriptionsOpen ? (
          <div className='pb-10'>
            <Button text='ir al formulario' href={inscriptionFormUrl} size='3xl' />
          </div>
        ) : (
          <p className='text-3xl tracking-widest text-center py-14 opacity-80 text-amber-50'>
            Próximamente
          </p>
        )}
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query: { slug } }) {
  const course = await axios.get(`${API_URL}/api/courses?filters[slug][$eq]=${slug}&populate=%2A`)

  return {
    props: { course: course.data.data[0] },
  }
}
