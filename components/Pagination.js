import React from 'react'
import Link from 'next/link'

export default function Pagination({ page, totalPages, date }) {
  return (
    <div className='flex flex-row p-3 space-x-4 transition-all duration-200 ease-in-out rounded-full hover:bg-yellow-500 hover:bg-opacity-20'>
      {page > 1 && (
        <Link href={`/blog?page=${page - 1}&date=${date}`}>
          <a>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 stroke-gray-200'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 19l-7-7m0 0l7-7m-7 7h18'
              />
            </svg>
          </a>
        </Link>
      )}
      {page < totalPages && (
        <Link href={`/blog?page=${page + 1}&date=${date}`}>
          <a>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 stroke-gray-200'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M14 5l7 7m0 0l-7 7m7-7H3'
              />
            </svg>
          </a>
        </Link>
      )}
    </div>
  )
}
