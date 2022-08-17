import { motion } from 'framer-motion'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import { useEffect, useState } from 'react'

export const navBarStates = {
  notShrunk: 'notShrunk',
  largeNavBarShrunk: 'largeShrunk',
  smallNavBarShrunk: 'smallShrunk',
}

export default function Layout({
  title,
  keywords,
  description,
  children,
  hero = false,
  bgSize = 'bg-cover',
  heroImageUrl = 'https://res.cloudinary.com/dpvmqdpwk/image/upload/v1645638306/hero_Image_fce74872dd.jpg',
  heroTitle,
  heroLoading,
}) {
  const router = useRouter()
  const [isShrunk, setIsShrunk] = useState(navBarStates.notShrunk)

  useEffect(() => {
    const scrollHandler = () => {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
      setIsShrunk((isShrunk) => {
        if (
          isShrunk === navBarStates.notShrunk &&
          (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20)
        ) {
          if (vw <= 767) {
            return navBarStates.smallNavBarShrunk
          }
          return navBarStates.largeNavBarShrunk
        }

        if (
          isShrunk !== navBarStates.notShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return navBarStates.notShrunk
        }

        return isShrunk
      })
    }

    window.addEventListener('scroll', scrollHandler)

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <div className='flex flex-col min-h-screen bg-neutral-900'>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description}></meta>
        <meta name='keywords' content={keywords}></meta>
      </Head>
      <Header isShrunk={isShrunk} />
      <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 1 }}>
        {router.pathname === '/' ? (
          <Hero
            imageUrl='https://res.cloudinary.com/dpvmqdpwk/image/upload/v1649677006/large_0_eefb7fe9f2.jpg'
            bgSize={bgSize}
            loading={heroLoading}
          />
        ) : hero ? (
          <Hero imageUrl={heroImageUrl} title={heroTitle} bgSize={bgSize} loading={heroLoading} />
        ) : (
          ''
        )}
        <div className='mx-auto'>{children}</div>
      </motion.div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Sole Tarot y Símbolos',
  description: 'Sole Tarot y Símbolos',
  keywords:
    'tarot, magia, simbolos, literatura, cartas, interpretacion, mistico, mitologia, dioses, Lenormand',
}
