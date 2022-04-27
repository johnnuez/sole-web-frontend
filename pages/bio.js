import Layout from '@/components/Layout'
import Image from 'next/image'

export default function BioPage() {
  return (
    <Layout title='Bio'>
      <div className='max-w-3xl px-5 py-8 mx-auto 3xl:max-w-4xl'>
        <div className='relative w-full mb-8 shadow-xl h-80 md:h-96'>
          <Image
            src='https://res.cloudinary.com/dpvmqdpwk/image/upload/v1645638306/hero_Image_fce74872dd.jpg'
            alt=''
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            className='rounded-md'
          />
        </div>
        <div className='p-1 text-lg 3xl:text-xl text-amber-50 opacity-80'>
          <p className='mb-5'>Sole Núñez</p>
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
        </div>
      </div>
    </Layout>
  )
}
