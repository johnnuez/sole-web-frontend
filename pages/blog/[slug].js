import Layout from '@/components/Layout'
import axios from 'axios'
import { API_URL } from '@/config/index'
import ReactMarkdown from 'react-markdown'

export default function PostPage({ post }) {
  return (
    <Layout
      hero
      heroTitle={post.title}
      heroImageUrl={post.image.data.attributes.url}
      title={post.title}
    >
      <div className='max-w-3xl px-6 py-8 mx-auto 3xl:max-w-4xl'>
        <p className='mb-5 text-xl text-justify opacity-80 text-amber-50'>
          {new Date(post.publishedAt).toLocaleDateString('es-AR')}
        </p>
        <ReactMarkdown className='py-8 text-xl tracking-wide text-justify 3xl:text-2xl opacity-80 text-amber-50 first-letter:text-4xl'>
          {post.content}
        </ReactMarkdown>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query: { slug } }) {
  const post = await axios.get(`${API_URL}/api/posts?filters[slug][$eq]=${slug}&populate=%2A`)

  return {
    props: { post: post.data.data[0].attributes },
  }
}
