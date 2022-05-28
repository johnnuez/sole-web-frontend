import Layout from '@/components/Layout'
import axios from 'axios'
import { API_URL } from '@/config/index'
import ReactMarkdown from 'react-markdown'
import qs from 'qs'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Custom404Page from 'pages/404'
import Custom500Page from 'pages/500'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const query = (slug) =>
  qs.stringify(
    {
      populate: '*',
      filters: {
        slug: {
          $eq: slug,
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  )

const fetcher = (url) => axios.get(url).then((res) => res.data.data)

export default function PostPage({ post }) {
  const router = useRouter()
  const { data, error } = useSWR(`${API_URL}/api/posts?${query(router.query.slug)}`, fetcher)

  if (error) {
    return (
      <Layout>
        <Custom500Page />
      </Layout>
    )
  }
  if (!data) {
    return (
      <Layout hero heroLoading>
        <div className='max-w-3xl px-6 py-8 mx-auto 3xl:max-w-4xl'>
          <p className='mb-6 text-xl text-justify'>
            <Skeleton baseColor='#3f3f46' highlightColor='#ca8a04' width='20%' />
          </p>
          <p className='mb-6 text-center'>
            <Skeleton baseColor='#3f3f46' highlightColor='#ca8a04' count={10} className='mb-2' />
          </p>
          <p className='text-center'>
            <Skeleton baseColor='#3f3f46' highlightColor='#ca8a04' count={10} className='mb-2' />
          </p>
        </div>
      </Layout>
    )
  }
  if (!data.length) {
    return <Custom404Page />
  }

  return (
    <>
      {data &&
        data.map(({ attributes: post }, i) => (
          <Layout
            hero
            heroTitle={post.title}
            heroImageUrl={post.image.data.attributes.url}
            title={post.title}
            key={i}
          >
            <div className='max-w-3xl px-6 py-8 mx-auto tracking-wide 3xl:max-w-4xl text-neutral-300'>
              <p className='mb-5 text-xl text-justify'>
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
              <ReactMarkdown
                className='py-5 text-xl text-justify 3xl:text-2xl'
                components={{
                  h2: ({ node, ...props }) => <h2 className='text-2xl 3xl:text-3xl' {...props} />,
                  li: ({ node, ordered, ...props }) => <li className='mb-3' {...props} />,
                  ul: ({ node, ordered, ...props }) => (
                    <ul className='my-5 list-disc list-inside' {...props} />
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </Layout>
        ))}
    </>
  )
}
