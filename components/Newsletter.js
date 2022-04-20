import axios from 'axios'
import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('IDLE')
  const [errorMessage, setErrorMessage] = useState(null)

  const subscribe = async () => {
    setState('LOADING')
    setErrorMessage(null)
    try {
      const response = await axios.post('/api/newsletter', { email })
      setState('SUCCESS')
    } catch (e) {
      setErrorMessage(e.response.data.error)
      setState('ERROR')
    }
  }

  return (
    <div className='flex-col align-middle justify-items-center'>
      <form className='flex flex-col justify-center w-3/4 max-w-sm mx-auto space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0'>
        <div className='flex flex-col items-center justify-center flex-1 space-x-4 md:flex-row'>
          <input
            className='flex-1 px-4 py-2 mb-2 text-base text-gray-700 placeholder-gray-400 bg-gray-100 shadow-sm md:mb-0 focus:outline-none focus:outline-1 focus:outline-slate-600'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className={`px-4 py-2 text-base font-semibold text-white bg-yellow-600 bg-opacity-50 rounded-sm shadow-md hover:bg-opacity-80 ${
              state === 'LOADING' ? 'flex' : ''
            }`}
            disabled={state === 'LOADING'}
            onClick={subscribe}
          >
            <svg
              className={`w-5 h-5 mr-3 mt-0.5 -ml-1 text-white animate-spin ${
                state !== 'LOADING' ? 'hidden' : ''
              }`}
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
            <p className='text-lg text-center'>
              {state === 'LOADING' ? 'Enviando...' : 'Suscribirse'}
            </p>
          </button>
        </div>
      </form>
      {state === 'ERROR' && <p className='mt-2 text-lg text-center text-red-500'>{errorMessage}</p>}
      {state === 'SUCCESS' && <p className='mt-2 text-lg text-center text-green-600'>Suscrito!</p>}
    </div>
  )
}
