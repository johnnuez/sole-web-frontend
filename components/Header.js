import Link from 'next/link'
import React, { useState } from 'react'
import { Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import routes from '../routes'
import { motion } from 'framer-motion'
import { navBarStates } from './Layout'
import Image from 'next/image'

export default function Header({ isShrunk }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [logoClicked, setLogoClicked] = useState(false)

  const variants = {
    [navBarStates.largeNavBarShrunk]: {
      opacity: 0.7,
      y: -188,
    },
    [navBarStates.smallNavBarShrunk]: {
      opacity: 0.8,
      y: -15,
    },
    [navBarStates.notShrunk]: {},
  }

  return (
    <motion.div
      className={`sticky top-0 z-50 w-full bg-opacity-90 md:pb-20 md:pt-10 bg-zinc-900 backdrop-blur-sm shadow-[0_1.5px_5px_0_rgba(0,0,0,0.5)]`}
      animate={isShrunk}
      variants={variants}
      transition={{ duration: 1 }}
      whileHover={{ opacity: 1 }}
    >
      <div className='px-4 mx-auto md:pt-16 max-w-7xl sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 md:justify-center'>
          <div className='flex items-center'>
            <div className='hidden md:block'>
              <div className='flex-col'>
                <Link href='/'>
                  <a>
                    <div
                      className={`${
                        logoClicked
                          ? 'shadow-[0_0_20px_8px_rgba(255,255,255,0.8)] duration-100'
                          : 'hover:shadow-[0_0_20px_8px_rgba(234,179,8,0.8)] duration-700'
                      } relative mx-auto mb-5 overflow-hidden border border-yellow-500 rounded-full w-36 h-36 border-opacity-30
                      transition-shadow ease-in-out`}
                      onClick={() => {
                        setLogoClicked(true)
                      }}
                      onTransitionEnd={() => {
                        setLogoClicked(false)
                      }}
                    >
                      <div className='absolute -top-[1.15rem] -left-[1.15rem]'>
                        <Image
                          alt='header_image'
                          src='https://res.cloudinary.com/dpvmqdpwk/image/upload/v1649872673/small_cloud_eye_010821_f1b7b046ad.png'
                          layout='fixed'
                          width='180'
                          height='180'
                        />
                      </div>
                    </div>
                  </a>
                </Link>
                <div className='flex pt-2 space-x-10'>
                  {routes.map((route) => (
                    <Link key={route.name} href={route.path}>
                      <a
                        className={`block px-3 py-2 rounded-sm text-neutral-200 hover:bg-opacity-80 hover:bg-yellow-600 transition-all ease-in-out duration-200 ${
                          router.pathname === route.path ? 'bg-opacity-20 bg-yellow-600' : ''
                        }`}
                      >
                        <p className='text-xs tracking-[0.15em] 3xl:text-base'>
                          {route.name.toUpperCase()}
                        </p>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={`flex -mr-2 md:hidden`}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type='button'
              className={` transition-all ease-in-out duration-500 inline-flex items-center justify-center p-2 bg-yellow-500 bg-opacity-50 rounded-md text-zinc-900 hover:bg-yellow-500 hover:bg-opacity-70 ${
                isShrunk === navBarStates.smallNavBarShrunk ? 'mt-4' : ''
              }`}
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              {!isOpen ? (
                <svg
                  className={`block ${
                    isShrunk === navBarStates.smallNavBarShrunk ? 'w-5 h-5' : 'w-6 h-6'
                  } transition-all ease-in-out duration-500`}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              ) : (
                <svg
                  className={`block ${
                    isShrunk === navBarStates.smallNavBarShrunk ? 'w-5 h-5' : 'w-6 h-6'
                  } transition-all ease-in-out duration-500`}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter='transition ease-out duration-100 transform'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='transition ease-in duration-75 transform'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {routes.map((route) => (
              <Link key={route.name} href={route.path}>
                <a
                  className={`block px-3 py-2 rounded-sm text-neutral-200 hover:bg-opacity-80 hover:bg-yellow-600 transition-all ease-in-out duration-200 ${
                    router.pathname === route.path ? 'bg-opacity-20 bg-yellow-600' : ''
                  }`}
                >
                  <p className='text-xs tracking-[0.15em] 3xl:text-base'>
                    {route.name.toUpperCase()}
                  </p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </Transition>
    </motion.div>
  )
}
