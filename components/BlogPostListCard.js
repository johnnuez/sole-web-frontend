import Link from 'next/link'
import Image from 'next/image'

export default function BlogPostListCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a>
        <div className='flex flex-col overflow-hidden border border-gray-800 rounded-md shadow-lg opacity-75 w-[19rem] md:w-80 hover:opacity-100'>
          <div className='relative w-full h-60 md:h-64 2xl:h-72'>
            <Image
              src={post.image.data.attributes.formats.medium.url}
              alt=''
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
          <div className='px-5 py-6 bg-gray-700'>
            <p className='pb-3 font-semibold text-gray-200 text-md'>
              {new Date(post.publishedAt).toLocaleDateString('es-AR')}
            </p>
            <p className='text-xl text-gray-200'>{post.title}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}
