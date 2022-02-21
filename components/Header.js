import Link from 'next/link'
import React, { useState } from 'react'
import { Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import routes from '../routes'

export default function Header() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='bg-gray-900 border-b border-slate-100 border-opacity-10 drop-shadow-2xl'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 md:py-16'>
        <div className='flex items-center justify-between h-16 md:justify-center'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>{/*Image component here*/}</div>
            <div className='hidden md:block'>
              <div className='flex-col'>
                <div className='w-24 h-24 mx-auto bg-black border rounded-full mb-7 border-slate-100 border-opacity-20'></div>
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
          <div className='flex -mr-2 md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type='button'
              className='inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
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
        <div className='md:hidden' id='mobile-menu'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {routes.map((route) => (
              <Link key={route.name} href={route.path}>
                <a
                  className={`block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700 ${
                    router.pathname === route.path ? 'bg-gray-700' : ''
                  }`}
                >
                  <p className='text-xs tracking-widest opacity-80'>{route.name.toUpperCase()}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </Transition>
    </nav>
  )
}
