import Image from 'next/image'
import Link from 'next/link'

export default function BlogPostCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a>
        <div
          className='flex-col flex-1 max-w-xs min-w-[20rem] md:max-w-md md:min-w-[24rem] m-5 break-words border rounded-sm hover:drop-shadow-2xl 
                 hover:transition-all ease-in-out duration-500 bg-gray-800 border-gray-700 justify-self-center hover:opacity-90 hover:bg-gray-700 active:bg-gray-400'
        >
          <div className='relative overflow-hidden rounded-sm h-96'>
            <Image
              src={post.image.data.attributes.formats.medium.url}
              alt={post.title}
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
          <div className='p-5'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {post.title}
            </h5>

            <p className='mb-1 text-gray-700 dark:text-gray-400'>
              {new Date(post.date).toLocaleDateString('es-AR')}
            </p>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{post.description}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}
