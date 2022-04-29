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
            <div className='mb-6'>
              <Heading title='Inscripciones' />
            </div>
            {inscriptionsOpen ? (
              <Button text='ir al formulario' href={inscriptionFormUrl} size='xl' />
            ) : (
              <p className='text-2xl tracking-widest text-center text-neutral-300'>PRÓXIMAMENTE</p>
            )}
            <>
              <Separator margin='my-6' />
            </>
            {!inscriptionsOpen && waitListFormUrl && (
              <>
                <p className='mb-8 text-2xl tracking-widest text-center text-neutral-300'>
                  Anotate en la lista de interesados y recibí noticias de este curso en tu email
                </p>
                <Button text='formulario de interesados' href={waitListFormUrl} size='lg' />
                <Separator margin='my-6' />
              </>
            )}
            {inscriptionsOpen && (
              <>
                <div className='mb-6'>
                  <Heading title='Comienzo' />
                </div>
                <p className='text-2xl tracking-widest text-center text-neutral-300'>
                  {new Intl.DateTimeFormat('es-AR', {
                    month: 'long',
                    year: 'numeric',
                    day: 'numeric',
                  }).format(new Date(startDate))}
                </p>
                <Separator margin='my-6' />
                <div className='mb-6'>
                  <Heading title='Frecuencia' />
                </div>
                <p className='text-2xl tracking-widest text-center text-neutral-300'>{schedule}</p>
                <Separator margin='my-6' />
              </>
            )}
          </>
        ) : (
          <></>
        )}
        {recordingsFormUrl && (
          <>
            <div className='mb-6'>
              <Heading title='Grabaciones' />
            </div>
            <p className='my-8 text-xl tracking-widest text-center text-neutral-300'>
              Adquirí este curso grabado y recibí acceso a videos y materiales
            </p>
            <Button text='acceder a grabaciones' href={recordingsFormUrl} size='lg' />
            <Separator margin='my-6' />
          </>
        )}
        <div className='mb-6'>
          <Heading title='Programa' />
        </div>
        <ReactMarkdown className='pb-8 text-xl tracking-wide text-justify 3xl:text-2xl text-neutral-300'>
          {program}
        </ReactMarkdown>
        {inscriptionsOpen && (
          <>
            <Separator margin='my-6' />
            <div className='mb-6'>
              <Heading title='Costo' />
            </div>
            <p className='pb-5 text-2xl tracking-widest text-center text-neutral-300'>{price}</p>
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