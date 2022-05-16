import Layout from '@/components/Layout'
import axios from 'axios'
import { API_URL } from '@/config/index'
import ReactMarkdown from 'react-markdown'
import qs from 'qs'

export default function PostPage({ post }) {
  return (
    <Layout
      hero
      heroTitle={post.title}
      heroImageUrl={post.image.data.attributes.url}
      title={post.title}
    >
      <div className='max-w-3xl px-6 py-8 mx-auto tracking-wide 3xl:max-w-4xl text-neutral-300'>
        <p className='mb-5 text-xl text-justify'>
          {new Date(post.publishedAt).toLocaleDateString('es-AR')}
        </p>
        <ReactMarkdown className='py-5 text-xl text-justify 3xl:text-2xl first-letter:text-5xl'>
          {post.content}
        </ReactMarkdown>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query: { slug } }) {
  const query = qs.stringify(
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

  const post = await axios.get(`${API_URL}/api/posts?${query}`)

  return {
    props: { post: post.data.data[0].attributes },
  }
}
