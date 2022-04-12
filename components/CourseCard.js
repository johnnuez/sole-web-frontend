import Image from 'next/image'
import Link from 'next/link'

const getCoverImageUrl = (images) => {
  return images.filter((image) => image.attributes.name.includes('cover'))[0].attributes.formats
    .large.url
}

export default function CourseCard({
  course: {
    attributes: {
      title,
      subtitle,
      schedule,
      startDate,
      images: { data },
    },
  },
}) {
  return (
    <div className='flex flex-col md:flex-row max-w-5xl 3xl:max-w-7xl mx-auto px-[1%]'>
      <div className='flex-[3] pb-1 md:py-10 overflow-hidden rounded-lg w-11/12 mx-auto z-10'>
        <Image
          src={`${getCoverImageUrl(data)}`}
          layout='responsive'
          width='100%'
          height='100%'
          alt=''
          className='flex-1 rounded-lg shadow-lg'
        />
      </div>
      <div className='px-14 md:-ml-5 text-gray-100 bg-gray-500 rounded-lg flex-[4] w-11/12 mx-auto flex flex-col tracking-widest items-center pt-8 bg-opacity-50 backdrop-blur-sm transition-all ease-in-out'>
        <div className='flex flex-col items-center flex-1'>
          <p className='flex-1 text-2xl text-center 3xl:text-3xl'>{title}</p>
          <p className='flex-1 text-xl text-center 3xl:text-2xl'>{subtitle}</p>
        </div>
        <ul className='flex-[3] list-disc ml-8 flex flex-col justify-center text-md py-10 3xl:text-xl'>
          <li className='mb-3'>{schedule}</li>
          <li className='mb-3'>
            Fecha de inicio: {new Date(startDate).toLocaleDateString('es-AR')}
          </li>
          <li className='mb-3'>Vía Zoom</li>
          <li className='mb-3'>
            Todas las clases se graban y se facilita el link de acceso a todxs lxs inscriptos
          </li>
          <li className='mb-3'>Se entrega material de apoyo</li>
        </ul>
        <div className='flex items-center pb-5 text-center'>
          <Link href='/'>
            <a className='block hover:font-light transition-all ease-in-out duration-200 py-1 3xl:text-xl text-md font-extralight tracking-widest text-amber-100 bg-gray-900 border border-amber-100 bg-opacity-20 hover:shadow-amber-200 hover:shadow-[0_0_2px_2px_rgba(0,0,0,0.10)] hover:bg-opacity-100 border-opacity-50 px-4'>
              VER MÁS
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
