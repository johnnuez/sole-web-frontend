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
      slug,
      images: { data },
    },
  },
  pictureOnRight = false,
}) {
  return (
    <div className='flex flex-col md:flex-row max-w-5xl 3xl:max-w-7xl mx-auto px-[1%]'>
      <div
        className={`flex-[3] pb-1 md:py-10 overflow-hidden rounded-lg w-11/12 mx-auto z-10 ${
          pictureOnRight ? 'md:hidden' : ''
        }`}
      >
        <Image
          src={`${getCoverImageUrl(data)}`}
          layout='responsive'
          width='100%'
          height='100%'
          alt=''
          className='flex-1 rounded-lg shadow-lg'
        />
      </div>
      <div
        className={`md:px-14 px-5 ${
          !pictureOnRight ? 'md:-ml-5' : 'md:-mr-5'
        } text-gray-100 bg-gray-500 rounded-lg flex-[5] w-11/12 mx-auto flex flex-col tracking-widest items-center bg-opacity-50 backdrop-blur-sm transition-all ease-in-out justify-center py-5`}
      >
        <div className='flex flex-col'>
          <p className='flex-1 text-2xl text-center 3xl:text-3xl'>{title}</p>
          <p className='flex-1 mt-2 text-xl text-center 3xl:text-2xl'>{subtitle}</p>
        </div>
        <ul className='flex flex-col justify-center py-10 ml-8 list-disc text-md 3xl:text-xl 3xl:py-14'>
          <li className='mb-4'>{schedule}</li>
          <li className='mb-4'>
            Fecha de inicio: {new Date(startDate).toLocaleDateString('es-AR')}
          </li>
          <li className='mb-4'>Vía Zoom</li>
          <li className='mb-4'>
            Todas las clases se graban y se facilita el link de acceso a todxs lxs inscriptos
          </li>
          <li className=''>Se entrega material de apoyo</li>
        </ul>
        <div className='text-center'>
          <Link href={`/courses/${slug}`}>
            <a className='p-2 tracking-[0.2em] border border-yellow-600 rounded-sm hover:text-yellow-500 3xl:text-xl md:border-none border-opacity-80 transition-all ease-in-out duration-200'>
              VER MÁS
            </a>
          </Link>
        </div>
      </div>
      <div
        className={` ${
          !pictureOnRight
            ? 'hidden'
            : 'hidden md:block flex-[3] pb-1 md:py-10 overflow-hidden rounded-lg w-11/12 mx-auto z-10'
        }`}
      >
        <Image
          src={`${getCoverImageUrl(data)}`}
          layout='responsive'
          width='100%'
          height='100%'
          alt=''
          className='flex-1 rounded-lg shadow-lg'
        />
      </div>
    </div>
  )
}
