import Link from 'next/link'
import Image from 'next/image'

export default function BlogPostListCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a>
        <div className='flex flex-col max-w-sm pb-8 mx-auto bg-yellow-500 shadow-xl bg-opacity-20 hover:bg-opacity-50'>
          <div className='w-full h-full p-1.5'>
            <Image
              src={post.image.data.attributes.formats.medium.url}
              alt=''
              layout='responsive'
              objectFit='cover'
              objectPosition='center'
              width='90%'
              height='75%'
            />
          </div>
          <div className='px-5 opacity-80'>
            <p className='py-2 text-sm font-semibold text-amber-50'>
              {new Date(post.publishedAt).toLocaleDateString('es-AR')}
            </p>
            <p className='pt-4 text-xl text-amber-50 line-clamp-5'>{post.title}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}
