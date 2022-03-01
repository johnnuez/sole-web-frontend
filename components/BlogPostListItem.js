import Image from 'next/image'
import Link from 'next/link'

export default function BlogPostListItem({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} passHref>
      <a>
        <div
          style={{ backgroundImage: `url(${post.image.data.attributes.formats.medium.url})` }}
          className='flex flex-col items-center max-w-4xl mx-auto my-5 bg-center bg-cover border border-gray-700 rounded-sm shadow-md hover:bg-gray-700 hover:opacity-70'
        >
          <div className='w-full h-full bg-gray-800 opacity-90'>
            <div className='flex flex-col justify-between flex-1 p-8 leading-normal md:pl-10'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-white'>{post.title}</h5>
              <p className='mb-2 font-bold text-gray-400'>
                {new Date(post.date).toLocaleDateString('es-AR')}
              </p>
              <p className='mb-3 font-normal text-gray-400'>{post.description}</p>
              <p className='font-normal text-gray-200 line-clamp-4'>{post.content}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}
