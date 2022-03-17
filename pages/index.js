import BlogPostCard from '@/components/BlogPostCard'
import CardCarousel from '@/components/CardCarousel'
import Heading from '@/components/Heading'
import Layout from '@/components/Layout'
import Separator from '@/components/Separator'
import { API_URL } from '@/config/index'
import axios from 'axios'
import Link from 'next/link'

export default function Home({ posts }) {
  const blogCardsArray = posts.map((post) => (
    <BlogPostCard duration={1} key={post.id} post={post.attributes} />
  ))

  return (
    <Layout>
      <Heading title='cursos' />
      <Separator />
      <Heading title='blog' />
      <div className='hidden gap-3 2xl:px-[5%] py-10 lg:grid lg:grid-cols-3 justify-items-center'>
        {posts &&
          posts.map((post, i) => <BlogPostCard index={i} key={post.id} post={post.attributes} />)}
      </div>
      <div className='py-8 lg:hidden'>
        <CardCarousel cards={blogCardsArray} />
      </div>
      <div className='flex justify-center my-8'>
        <Link href='/blog/'>
          <a className='px-4 py-2 text-base font-semibold text-white bg-gray-600 rounded-sm shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-200'>
            Ver todos los posts
          </a>
        </Link>
      </div>
      <Separator />
    </Layout>
  )
}

export async function getServerSideProps() {
  const posts = await axios.get(
    `${API_URL}/api/posts?pagination[start]=0&pagination[limit]=3&populate=%2A&sort[0]=publishedAt%3Adesc`
  )

  return {
    props: { posts: posts.data.data },
  }
}
