import BlogPostCard from '@/components/BlogPostCard'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className='flex flex-wrap justify-around py-10'>
        <BlogPostCard
          article={{
            title: 'Title',
            subtitle: 'subtitle',
            imageUrl: '/bioImage.jpg',
            slug: 'post-1',
          }}
        />
        <BlogPostCard
          article={{
            title: 'Title',
            subtitle: 'subtitle',
            imageUrl: '/bioImage.jpg',
            slug: 'post-1',
          }}
        />
        <BlogPostCard
          article={{
            title: 'Title',
            subtitle: 'subtitle',
            imageUrl: '/bioImage.jpg',
            slug: 'post-1',
          }}
        />
        <BlogPostCard
          article={{
            title: 'Title',
            subtitle: 'subtitle',
            imageUrl: '/bioImage.jpg',
            slug: 'post-1',
          }}
        />
      </div>
      <div className='flex justify-center w-full my-2'>
        <button
          className='flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-gray-600 rounded-sm shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-200'
          type='button'
        >
          Ver todos los posts
        </button>
      </div>
      <br />
    </Layout>
  )
}
