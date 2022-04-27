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
    <div className='flex flex-col md:flex-row mx-auto px-[1%] max-w-[70rem] 3xl:max-w-[80rem] transition-all ease-in-out items-center'>
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
        } text-gray-50 bg-gray-800 rounded-lg flex-[5] mx-auto flex flex-col tracking-widest bg-opacity-30 backdrop-blur-md justify-center min-h-[30rem] 3xl:min-h-[32rem] w-11/12 my-2 md:my-0 border border-yellow-500 border-opacity-20`}
      >
        <div className='flex flex-col px-[5%] justify-center'>
          <div className='mb-2 text-2xl text-center 3xl:text-3xl'>
            <Heading title={title} />
          </div>
          <Separator />
        </div>
        <div className='flex flex-col justify-between flex-1 px-[1%] mx-10 bg-opacity-70 md:px-20'>
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => (
                <p className='self-center text-lg tracking-[0.2em]' {...props} />
              ),
              li: ({ node, ordered, ...props }) => <li className='mb-4' {...props} />,
              ul: ({ node, ordered, ...props }) => <ul className='mt-4 list-disc' {...props} />,
              p: ({ node, ...props }) => <p className='self-center tracking-widest' {...props} />,
            }}
          >
            {summary}
          </ReactMarkdown>
        </div>
        <div className='flex flex-col justify-center'>
          <Separator />
          <p className='text-lg tracking-widest text-center'>
            {inscriptionsOpen
              ? `Fecha de inicio: ${new Date(startDate).toLocaleDateString('es-AR')}`
              : 'PRÓXIMAMENTE'}
          </p>
          <div className='mt-5 mb-3 text-lg text-center md:mt-3 md:mb-1'>
            <Link href={`/courses/${slug}`}>
              <a className='tracking-[0.2em] border border-yellow-600 hover:text-yellow-500 3xl:text-xl md:border-none border-opacity-80 transition-all ease-in-out duration-200 p-2 rounded-sm'>
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
