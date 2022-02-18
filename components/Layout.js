import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description}></meta>
        <meta name='keywords' content={keywords}></meta>
      </Head>
      <Header />
      <div className='container min-h-screen'>{children}</div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Sole Tarot y Símbolos',
  description: 'Sole Tarot y Símbolos',
  keywords: 'tarot, magia, simbolos, literatura, cartas, interpretacion, mistico, mitologia',
}
