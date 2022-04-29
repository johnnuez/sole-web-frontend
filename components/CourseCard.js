import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import Heading from './Heading'
import Separator from './Separator'

export default function CourseCard({
  course: {
    attributes: {
      title,
      subtitle,
      schedule,
      startDate,
      slug,
      inscriptionsOpen,
      summary,
      coverImage: {
        data: {
          attributes: {
            formats: {
              large: { url },
            },
          },
        },
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
          src={`${url}`}
          layout='responsive'
          width='100%'
          height='100%'
          alt=''
          className='flex-1 rounded-lg'
        />
      </div>
      <div
        className={`py-3 ${
          !pictureOnRight ? 'md:-ml-5' : 'md:-mr-5'
        } text-neutral-200 bg-gray-800 rounded-lg flex-[5] mx-auto flex flex-col tracking-widest bg-opacity-50 justify-center min-h-[30rem] 3xl:min-h-[32rem] w-11/12 my-2 md:my-0 border border-yellow-500 border-opacity-20`}
      >
        <div className='flex flex-col px-[5%] justify-center'>
          <div className='mb-1 text-5xl tracking-wider text-center 3xl:text-6xl'>
            <h1>{title}</h1>
          </div>
          <Separator />
        </div>
        <div className='flex flex-col justify-between flex-1 px-8 text-lg tracking-widest md:px-14 bg-opacity-70'>
          <ReactMarkdown
            components={{
              h2: ({ node, ...props }) => (
                <h2 className='self-center text-lg tracking-[0.2em]' {...props} />
              ),
              li: ({ node, ordered, ...props }) => <li className='mb-4' {...props} />,
              ul: ({ node, ordered, ...props }) => (
                <ul className='mt-4 ml-3 list-disc' {...props} />
              ),
              p: ({ node, ...props }) => <p className='self-center' {...props} />,
            }}
          >
            {summary}
          </ReactMarkdown>
        </div>
        <div className='flex flex-col justify-center'>
          <Separator />
          <p className='text-lg tracking-[0.15em] text-center'>
            {inscriptionsOpen
              ? `Fecha de inicio: ${new Date(startDate).toLocaleDateString('es-AR')}`
              : 'PRÓXIMAMENTE'}
          </p>
          <div className='mt-5 mb-3 text-xl text-center md:mt-3 md:mb-1'>
            <Link href={`/courses/${slug}`}>
              <a className='tracking-[0.2em] border border-yellow-600 hover:text-yellow-500 md:border-none border-opacity-80 transition-all ease-in-out duration-200 p-2 rounded-sm'>
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
          src={`${url}`}
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
