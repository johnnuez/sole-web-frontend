import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function BioPage() {
  return (
    <Layout title='Bio'>
      <div className='flex flex-col max-w-3xl px-5 py-5 mx-auto 3xl:max-w-4xl'>
        <div className='flex-1 mb-5 shadow-xl'>
          <Image
            src='https://res.cloudinary.com/dpvmqdpwk/image/upload/v1651588084/large_bio_e01f8fb3b5.jpg'
            alt='bio_image'
            layout='responsive'
            objectFit='cover'
            objectPosition='center'
            className='rounded-md'
            width={100}
            height={60}
            priority={true}
          />
        </div>
        <div className='flex-1 p-1 text-lg tracking-wide 3xl:text-xl text-neutral-300'>
          <h1 className='mb-5 text-5xl tracking-widest text-center text-neutral-300'>Sole Núñez</h1>
          <p className='mb-5'>
            Mi nombre es Soledad (con todo lo que eso implica) y nací en Uruguay en 1985.
            Fuertemente sol en Géminis, definitivamente luna en Piscis, trabajosamente ascendente en
            Tauro.
          </p>
          <p className='mb-5'>
            Soy profesora de Literatura según la educación oficial y profesora de tarot según la
            vida misma, después de un recorrido de ya varios años. Soy docente, tarotista, poeta,
            estudiosa y devota de dioses y mitos griegos. Mi trabajo es leer y enseñar. Leo todo el
            tiempo, cartas y libros y desarrollar un método de lectura tan sólido como flexible
            viene siendo mi trabajo de investigación desde hace un tiempo ya.
          </p>
          <p className='mb-5'>
            Como docente de tarot comparto esa búsqueda y aquellas cosas que me han resultado
            efectivas durante el proceso. Como docente de mitos mi único objetivo es rendir culto a
            lxs diosxs y compartir con otrxs mi alegría por invocarlos contando sus historias. Como
            tarotista busco aplicar lo mejor que puedo un método que pueda combinar una estructura
            primaria más netamente visual con un revestimiento simbólico.
          </p>
          <p>Casi todo lo que hago es leer, escribir y maternar.</p>
          <h2 className='mt-5 mb-3 text-2xl '>Contactos:</h2>
          <div className='flex mb-2 space-x-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-8 h-8 ml-1 text-yellow-500 opacity-50'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              />
            </svg>
            <p className=''>sole.tarotysimbolos@gmail.com</p>
          </div>
          <div className='flex space-x-2'>
            <Link href='https://www.instagram.com/sole.tarotysimbolos/'>
              <a className='text-yellow-500 transition-all duration-200 opacity-50 hover:opacity-80'>
                <svg
                  className='w-10 h-10'
                  fill='currentColor'
                  viewBox='0 0 512 512'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g>
                    <path d='M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z' />
                    <path d='M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z' />
                    <circle cx='351.5' cy='160.5' r='21.5' />
                  </g>
                </svg>
              </a>
            </Link>
            <p className='mt-1 '>@soletarotysimbolos</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
