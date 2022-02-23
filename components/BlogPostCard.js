import Image from 'next/image'
import Link from 'next/link'

export default function BlogPostCard({ article }) {
  return (
    <div
      className='flex-col flex-1 max-w-xs min-w-[20rem] m-5 break-words border border-gray-200 rounded-sm hover:drop-shadow-2xl 
                 hover:transition-all ease-in-out duration-500 dark:bg-gray-800 dark:border-gray-700 justify-self-center'
    >
      <div className='relative overflow-hidden bg-black rounded-sm h-96'>
        <Image
          src={article.imageUrl}
          alt=''
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
      </div>
      <div className='p-5'>
        <Link href={`/blog/${article.slug}`}>
          <a>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {article.title}
            </h5>
          </a>
        </Link>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{article.subtitle}</p>
      </div>
    </div>
  )
}
