import Layout from '@/components/Layout'
import { API_URL, POSTS_PER_PAGE } from '@/config/index'
import axios from 'axios'
import Pagination from '@/components/Pagination'
import MonthPicker from '@/components/MonthPicker'
import BlogPostListCard from '@/components/BlogPostListCard'

export default function BlogPage({ posts, page, totalPages, date }) {
  return (
    <Layout title='Blog'>
      <div className='flex flex-col w-full 2xl:px-10'>
        <div className='mx-auto my-10'>
          <MonthPicker date={date} />
        </div>
        <div className='grid items-center flex-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-y-10'>
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id}>
                <BlogPostListCard post={post.attributes} />
              </div>
            ))
          ) : (
            <p className='mt-8 text-xl font-bold text-center text-gray-200 col-span-full'>
              No hay posts para mostrar
            </p>
          )}
        </div>
        <div className='mx-auto'>
          <Pagination page={page} totalPages={totalPages} date={date} />
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query: { page = 1, date = null } }) {
  const currentDate = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth()
    return new Date(year, month + 1, 0).toISOString().substring(0, 10)
  }
  date = date ? date : currentDate()

  const posts = await axios.get(
    `${API_URL}/api/posts?pagination[page]=${page}&pagination[pageSize]=${POSTS_PER_PAGE}&populate=%2A&sort[0]=publishedAt%3Adesc&filters[publishedAt][$lte]=${date}`
  )

  return {
    props: {
      posts: posts.data.data,
      page: +page,
      totalPages: posts.data.meta.pagination.pageCount,
      date: date,
    },
  }
}
