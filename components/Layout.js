import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter()

  return (
    <div className='w-full h-full bg-slate-800'>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description}></meta>
        <meta name='keywords' content={keywords}></meta>
      </Head>
      <Header />
      {router.pathname === '/' && <Hero />}
      <div className='container min-h-[70vh]'>{children}</div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Sole Tarot y Símbolos',
  description: 'Sole Tarot y Símbolos',
  keywords: 'tarot, magia, simbolos, literatura, cartas, interpretacion, mistico, mitologia',
}
