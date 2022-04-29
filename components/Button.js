import Link from 'next/link'

export default function Button({ href, size = 'lg', text }) {
  return (
    <div className='flex items-center justify-center'>
      <div className='text-center'>
        <Link href={`${href}`}>
          <a
            className={`hover:text-neutral-50 block transition-all ease-in-out duration-300 px-8 py-3 text-${size} tracking-widest sm:tracking-[0.2em] text-neutral-300 bg-gray-900 border-2 border-yellow-600 bg-opacity-0 hover:shadow-yellow-600 hover:shadow-[0_0_2px_2px_rgba(0,0,0,0.10)] hover:bg-opacity-70 border-opacity-50`}
          >
            {text.toUpperCase()}
          </a>
        </Link>
      </div>
    </div>
  )
}
