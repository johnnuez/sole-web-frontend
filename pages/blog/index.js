import Layout from '@/components/Layout'
import { API_URL, POSTS_PER_PAGE } from '@/config/index'
import axios from 'axios'
import Pagination from '@/components/Pagination'
import MonthPicker from '@/components/MonthPicker'
import BlogPostListCard from '@/components/BlogPostListCard'
import qs from 'qs'
import { useRouter } from 'next/router'

const currentDate = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()
  return new Date(year, month + 1, 0).toISOString().substring(0, 10)
}

export default function BlogPage({ posts, page, totalPages, date }) {
  const router = useRouter()

  return (
    <Layout title='Blog'>
      <div className='flex flex-col 3xl:max-w-7xl max-w-6xl mx-auto px-[3%] py-12 min-h-[55vh] justify-around'>
        <div className='flex flex-col items-center self-center mb-8'>
          <MonthPicker date={date} />
          <div className='mt-5 text-center bg-yellow-500 rounded-sm bg-opacity-20 hover:bg-opacity-60'>
            <button
              className='w-full px-4 py-2 font-semibold tracking-widest text-neutral-100'
              onClick={() => {
                router.push({
                  pathname: '/blog',
                  query: { date: currentDate() },
                })
              }}
            >
              <p>Ver últimos posts</p>
            </button>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 gap-y-10'>
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
        <div className='mx-auto mt-12'>
          <Pagination page={page} totalPages={totalPages} date={date} />
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query: { page = 1, date = null } }) {
  date = date ? date : currentDate()

  const query = qs.stringify(
    {
      populate: '*',
      pagination: {
        page: page,
        pageSize: POSTS_PER_PAGE,
      },
      sort: ['publishedAt:desc'],
      filters: {
        publishedAt: {
          $lte: date,
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  )

  const posts = await axios.get(`${API_URL}/api/posts?${query}`)

  return {
    props: {
      posts: posts.data.data,
      page: +page,
      totalPages: posts.data.meta.pagination.pageCount,
      date: date,
    },
  }
}
