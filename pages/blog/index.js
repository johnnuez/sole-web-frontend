import BlogPostListItem from '@/components/BlogPostListItem'
import Layout from '@/components/Layout'
import { API_URL, POSTS_PER_PAGE } from '@/config/index'
import axios from 'axios'
import Pagination from '@/components/Pagination'
import MonthPicker from '@/components/MonthPicker'

export default function BlogPage({ posts, page, totalPages, date }) {
  return (
    <Layout title='Blog'>
      <div className='container flex flex-col items-center w-full'>
        <div className='w-full px-4 md:w-11/12'>
          <div className='my-10 2xl:ml-28'>
            <MonthPicker date={date} />
          </div>
          {posts.length > 0 ? (
            posts.map((post) => <BlogPostListItem key={post.id} post={post.attributes} />)
          ) : (
            <p className='mt-20 text-xl font-bold text-center text-gray-200'>
              No hay posts para mostrar
            </p>
          )}
        </div>
        <Pagination page={page} totalPages={totalPages} date={date} />
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
    `${API_URL}/api/posts?pagination[page]=${page}&pagination[pageSize]=${POSTS_PER_PAGE}&populate=%2A&sort[0]=date%3Adesc&filters[date][$lte]=${date}`
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
