import Layout from '@/components/Layout'
import { API_URL, POSTS_PER_PAGE } from '@/config/index'
import axios from 'axios'
import Pagination from '@/components/Pagination'
import MonthPicker from '@/components/MonthPicker'
import BlogPostListCard from '@/components/BlogPostListCard'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import Custom500Page from 'pages/500'
import { postsQueryCreator } from 'queries/posts'
import { swrFetcher } from 'utils/swrFetcher'

const query = postsQueryCreator()

const fetcher = swrFetcher

const currentDate = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()
  return new Date(year, month + 1, 0, 23, 59, 59)
}

export default function BlogPage({ posts }) {
  const { data, error } = useSWR(`${API_URL}/api/posts?${query}`, fetcher, {
    fallbackData: posts,
  })

  const [page, setPage] = useState(1)
  const [date, setDate] = useState(currentDate)
  const [filteredPosts, setFilteredPosts] = useState(data)

  useEffect(() => {
    setFilteredPosts(data.filter((post) => new Date(post.attributes.publishedAt) <= new Date(date)))
  }, [page, date, data])

  if (error) {
    return <Custom500Page />
  }
  if (!data) {
    return (
      <Layout>
        <p>Loading</p>
        {/* TODO blog posts loading skeletons */}
      </Layout>
    )
  }

  return (
    <Layout title='Blog'>
      <div className='flex flex-col 3xl:max-w-7xl max-w-6xl mx-auto px-[3%] py-12 min-h-[55vh] justify-around'>
        <div className='flex flex-col items-center self-center mb-8'>
          <MonthPicker date={date} setDate={setDate} setPage={setPage} />
          <div className='mt-5 text-center bg-yellow-500 rounded-sm bg-opacity-20 hover:bg-opacity-60'>
            <button
              className='w-full px-4 py-2 font-semibold tracking-widest text-neutral-100'
              onClick={() => {
                setDate(currentDate())
                setPage(1)
              }}
            >
              <p>Ver últimos posts</p>
            </button>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 gap-y-10'>
          {filteredPosts && filteredPosts.length ? (
            filteredPosts
              .slice((page - 1) * POSTS_PER_PAGE, (page - 1) * POSTS_PER_PAGE + POSTS_PER_PAGE)
              .map((post) => (
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
          {filteredPosts && (
            <Pagination
              page={page}
              totalPages={Math.ceil(filteredPosts.length / POSTS_PER_PAGE)}
              setPage={setPage}
            />
          )}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await axios.get(`${API_URL}/api/posts?${query}`)

  return {
    props: {
      posts: posts.data.data,
    },
    revalidate: 1,
  }
}
