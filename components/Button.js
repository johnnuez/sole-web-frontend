import Link from 'next/link'

export default function Button({ href, size = 'lg', text }) {
  return (
    <div className='flex items-center justify-center'>
      <div className='text-center'>
        <Link href={`${href}`}>
          <a
            className={`block hover:font-light transition-all ease-in-out duration-300 px-8 py-3 text-${size} font-extralight tracking-wider sm:tracking-[0.2em] text-yellow-50 bg-gray-900 border-2 border-yellow-500 bg-opacity-20 hover:shadow-yellow-400 hover:shadow-[0_0_2px_2px_rgba(0,0,0,0.10)] hover:bg-opacity-100 border-opacity-30 hover:text-yellow-500`}
          >
            {text.toUpperCase()}
          </a>
        </Link>
      </div>
    </div>
  )
}
