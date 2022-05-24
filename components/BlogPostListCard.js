import Link from 'next/link'
import Image from 'next/image'

export default function BlogPostListCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a>
        <div className='flex flex-col max-w-sm pb-8 mx-auto bg-yellow-600 shadow-xl bg-opacity-20 hover:bg-opacity-50'>
          <div className='w-full h-full p-1.5'>
            <Image
              src={post.image.data.attributes.formats.medium.url}
              alt={post.image.data.attributes.alternativeText}
              layout='responsive'
              objectFit='cover'
              width='100%'
              height='100%'
              priority={true}
            />
          </div>
          <div className='px-5 opacity-80'>
            <p className='py-2 text-sm font-semibold text-amber-50'>
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            <p className='pt-4 text-xl tracking-wide 3xl:text-2xl text-neutral-100 line-clamp-5'>
              {post.title}
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}
