import Link from 'next/link'
import React, { useState } from 'react'
import { Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import routes from '../routes'
import { motion } from 'framer-motion'
import { navBarStates } from './Layout'

export default function Header({ isShrunk }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const variants = {
    [navBarStates.largeNavBarShrunk]: {
      opacity: 0.7,
      y: -130,
    },
    [navBarStates.smallNavBarShrunk]: {
      opacity: 0.8,
      y: -8,
    },
    [navBarStates.notShrunk]: {
      opacity: 0.98,
    },
  }

  return (
    <motion.div
      className={`bg-gray-900 border-b w-full top-0 z-50 border-black shadow-sm border-opacity-60 shadow-black md:py-16 sticky`}
      animate={isShrunk}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <div className={`px-4 mx-auto max-w-7xl sm:px-6 lg:px-8`}>
        <div className='flex items-center justify-between h-16 md:justify-center'>
          <div className='flex items-center'>
            <div className='hidden md:block'>
              <div className='flex-col'>
                <div
                  className={`mx-auto mb-5 bg-black border rounded-full  w-28 h-28 border-slate-100 border-opacity-20`}
                ></div>
                <div className='flex space-x-10'>
                  {routes.map((route) => (
                    <Link key={route.name} href={route.path}>
                      <a
                        className={`block px-3 py-2 text-base font-medium rounded-sm text-white hover:bg-gray-800 ${
                          router.pathname === route.path ? 'bg-gray-700' : ''
                        }`}
                      >
                        <p className='text-xs tracking-widest opacity-80'>
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
              className='inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:bg-gray-800'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              {!isOpen ? (
                <svg
                  className='block w-6 h-6'
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
                  className='block w-6 h-6'
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
                  className={`block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700 ${
                    router.pathname === route.path ? 'bg-gray-700' : ''
                  }`}
                >
                  <p className='text-xs tracking-widest'>{route.name.toUpperCase()}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </Transition>
    </motion.div>
  )
}
