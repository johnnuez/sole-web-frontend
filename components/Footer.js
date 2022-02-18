import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='w-full py-8 bg-white dark:bg-gray-800'>
      <div className='max-w-screen-xl px-4 mx-auto'>
        <ul className='flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light'>
          {/*menu list*/}
        </ul>
        <div className='flex items-center justify-center max-w-xs pt-8 mx-auto'>
          <Link href='https://www.instagram.com/sole.tarotysimbolos/'>
            <a className='mr-5 text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white'>
              <svg
                width='35'
                height='35'
                fill='currentColor'
                className='text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white'
                viewBox='0 0 512 512'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g>
                  <path d='M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z' />
                  <path d='M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z' />
                  <circle cx='351.5' cy='160.5' r='21.5' />
                </g>
              </svg>
            </a>
          </Link>
          <Link href='https://www.youtube.com/channel/UCExe9d7KqUhbC1GvybXN2ng/about'>
            <a className='text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white'>
              <svg
                width='40'
                height='40'
                fill='currentColor'
                className='text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white'
                viewBox='0 0 512 512'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M422.6 193.6c-5.3-45.3-23.3-51.6-59-54 -50.8-3.5-164.3-3.5-215.1 0 -35.7 2.4-53.7 8.7-59 54 -4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54C426.6 284.8 426.6 227.3 422.6 193.6zM222.2 303.4v-94.6l90.7 47.3L222.2 303.4z' />
              </svg>
            </a>
          </Link>
        </div>
        <div className='flex items-center justify-center pt-10 font-light text-center text-gray-500 dark:text-gray-200 sm:pt-12'>
          Suscribite al newsletter
        </div>
        <div className='flex items-center justify-center pt-4 pb-10 font-light text-center'>
          <form className='flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0'>
            <div className='relative'>
              <input
                type='text'
                id='"form-subscribe-Subscribe'
                className='flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                placeholder='Email'
              />
            </div>
            <button
              className='flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200'
              type='submit'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  )
}
