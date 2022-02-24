import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter()

  return (
    <div className='flex flex-col min-h-screen scroll-smooth bg-slate-800'>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description}></meta>
        <meta name='keywords' content={keywords}></meta>
      </Head>
      <Header />
      {router.pathname === '/' && (
        <Hero
          imageUrl='https://res.cloudinary.com/dpvmqdpwk/image/upload/v1645638308/large_hero_Image_fce74872dd.jpg'
          title='Sole Tarot y Símbolos'
        />
      )}
      <div className=''>{children}</div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Sole Tarot y Símbolos',
  description: 'Sole Tarot y Símbolos',
  keywords: 'tarot, magia, simbolos, literatura, cartas, interpretacion, mistico, mitologia',
}
