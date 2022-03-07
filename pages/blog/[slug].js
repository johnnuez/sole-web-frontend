import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import axios from 'axios'
import { API_URL } from '@/config/index'

export default function PostPage({ post }) {
  return (
    <Layout>
      <Hero imageUrl={post.image.data.attributes.url} title={post.title} />
      <div className='container px-5 pb-32 md:px-2 lg:px-32'>
        <p className='px-5 mb-5 text-xl text-justify opacity-80 text-amber-50'>
          {new Date(post.date).toLocaleDateString('es-AR')}
        </p>
        <p className='px-5 text-xl text-justify opacity-80 text-amber-50 first-letter:text-4xl'>
          {post.content}
        </p>
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
