import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import Separator from './Separator'

export default function CourseCard({
  course: {
    attributes: {
      title,
      subtitle,
      startDate,
      slug,
      inscriptionsOpen,
      summary,
      onlyRecorded,
      coverImage: {
        data: { attributes: image },
      },
    },
  },
  pictureOnRight = false,
}) {
  return (
    <div className='flex flex-col md:flex-row mx-auto max-w-[70rem] 3xl:max-w-[80rem] transition-all ease-in-out items-center'>
      <div
        className={`flex-[3] md:py-10 overflow-hidden rounded-lg mx-auto z-10 w-11/12 ${
          pictureOnRight ? 'md:hidden' : ''
        }`}
      >
        <Image
          src={`${image.formats.large.url}`}
          layout='responsive'
          width='100%'
          height='100%'
          alt={image.alternativeText}
          className='flex-1 rounded-lg'
        />
      </div>
      <div
        className={`py-4 ${
          !pictureOnRight ? 'md:-ml-5' : 'md:-mr-5'
        } bg-zinc-900 rounded-lg flex-[5] mx-auto flex flex-col tracking-widest bg-opacity-80 justify-center min-h-[30rem] 3xl:min-h-[32rem] w-11/12 my-2 md:my-0 border border-yellow-500 border-opacity-20`}
      >
        <div className='flex flex-col px-[5%] justify-center text-neutral-100'>
          <h1 className='mb-2 text-5xl tracking-wider text-center 3xl:text-6xl'>{title}</h1>
          <h2 className='text-xl text-center 3xl:text-2xl'>{subtitle}</h2>

          <Separator />
        </div>
        <div className='flex flex-col flex-1 px-5 tracking-widest text-md 3xl:text-lg md:px-10 text-neutral-300'>
          <ReactMarkdown
            components={{
              h2: ({ node, ...props }) => (
                <h2 className='text-center text-2xl tracking-[0.2em] mb-auto' {...props} />
              ),
              li: ({ node, ordered, ...props }) => <li className='mb-3' {...props} />,
              ul: ({ node, ordered, ...props }) => (
                <ul className='my-auto mt-3 ml-3 list-disc list-inside md:ml-8' {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className='my-auto text-center 3xl:text-xl' {...props} />
              ),
            }}
          >
            {summary}
          </ReactMarkdown>
        </div>
        <div className='flex flex-col justify-center text-yellow-600'>
          <Separator />
          <p className='text-lg tracking-[0.15em] text-center'>
            {inscriptionsOpen
              ? `Fecha de inicio: ${new Date(startDate).toLocaleDateString('es-AR')}`
              : !onlyRecorded
              ? 'PRÓXIMAMENTE'
              : 'Curso Grabado'}
          </p>
          <div className='mt-5 mb-3 text-xl text-center md:mt-3 md:mb-1'>
            <Link href={`/courses/${slug}`}>
              <a className='tracking-[0.2em] border border-yellow-600 hover:text-neutral-100 md:border-none border-opacity-80 transition-all ease-in-out duration-200 p-2 rounded-sm'>
                VER MÁS
              </a>
            </Link>
          </div>
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
          src={`${image.formats.large.url}`}
          layout='responsive'
          width='100%'
          height='100%'
          alt={image.alternativeText}
          className='flex-1 rounded-lg shadow-lg'
        />
      </div>
    </div>
  )
}
