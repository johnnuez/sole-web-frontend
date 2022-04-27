import Layout from '@/components/Layout'
import axios from 'axios'
import { API_URL } from '@/config/index'
import ReactMarkdown from 'react-markdown'
import Heading from '@/components/Heading'
import Separator from '@/components/Separator'
import Button from '@/components/Button'

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
      price,
      waitListFormUrl,
      recordingsFormUrl,
      onlyRecorded,
      coverImage: {
        data: {
          attributes: { url },
        },
      },
    },
  },
}) {
  return (
    <Layout hero heroTitle={title} heroImageUrl={url} bgSize='bg-contain' title={title}>
      <div className='max-w-3xl px-6 py-8 mx-auto 3xl:max-w-4xl'>
        {!onlyRecorded ? (
          <>
            <div className='mb-5'>
              <Heading title='inscripciones' />
            </div>
            {inscriptionsOpen ? (
              <Button text='ir al formulario' href={inscriptionFormUrl} size='xl' />
            ) : (
              <p className='text-2xl tracking-widest text-center opacity-80 text-amber-50'>
                PRÓXIMAMENTE
              </p>
            )}
            <>
              <Separator margin='my-6' />
            </>
            {!inscriptionsOpen && waitListFormUrl && (
              <>
                <p className='mb-8 text-xl tracking-widest text-center opacity-80 text-amber-50'>
                  Anotate en la lista de interesados y recibí noticias de este curso en tu email
                </p>
                <Button text='formulario de interesados' href={waitListFormUrl} size='lg' />
                <Separator margin='my-6' />
              </>
            )}
            {inscriptionsOpen && (
              <>
                <div className='mb-5'>
                  <Heading title='comienzo' />
                </div>
                <p className='text-xl tracking-widest text-center opacity-80 text-amber-50'>
                  {new Intl.DateTimeFormat('es-AR', {
                    month: 'long',
                    year: 'numeric',
                    day: 'numeric',
                  }).format(new Date(startDate))}
                </p>
                <Separator margin='my-6' />
                <div className='mb-5'>
                  <Heading title='Frecuencia' />
                </div>
                <p className='text-xl tracking-widest text-center opacity-80 text-amber-50'>
                  {schedule}
                </p>
                <Separator margin='my-6' />
              </>
            )}
          </>
        ) : (
          <></>
        )}
        {recordingsFormUrl && (
          <>
            <div className='mb-5'>
              <Heading title='Grabaciones' />
            </div>
            <p className='my-8 text-xl tracking-widest text-center opacity-80 text-amber-50'>
              Adquirí este curso grabado y recibí acceso a videos y materiales
            </p>
            <Button text='acceder a grabaciones' href={recordingsFormUrl} size='lg' />
            <Separator margin='my-6' />
          </>
        )}
        <div className='mb-5'>
          <Heading title='programa' />
        </div>
        <ReactMarkdown className='pb-8 text-lg tracking-wide text-justify 3xl:text-xl opacity-80 text-amber-50 first-letter:text-4xl'>
          {program}
        </ReactMarkdown>
        {inscriptionsOpen && (
          <>
            <Separator margin='my-6' />
            <div className='mb-5'>
              <Heading title='costo' />
            </div>
            <p className='pb-5 text-2xl tracking-widest text-center opacity-80 text-amber-50'>
              {price}
            </p>
          </>
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
