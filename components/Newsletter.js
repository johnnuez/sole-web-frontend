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
        <div className='relative'>
          <input
            type='text'
            id='"form-subscribe-Subscribe'
            className='flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-sm shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          className={`flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-gray-600 rounded-sm shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-200 ${
            state === 'LOADING' ? 'flex' : ''
          }`}
          type='button'
          disabled={state === 'LOADING'}
          onClick={subscribe}
        >
          <svg
            className={`w-5 h-5 mr-3 mt-0.5 -ml-1 text-white animate-spin ${
              state !== 'LOADING' ? 'hidden flex-0' : ''
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
          <p className='text-center'>{state === 'LOADING' ? 'Enviando...' : 'Suscribirse'}</p>
        </button>
      </form>
      {state === 'ERROR' && <p className='mt-2 text-center text-red-600'>{errorMessage}</p>}
      {state === 'SUCCESS' && <p className='mt-2 text-center text-green-600'>Suscrito!</p>}
    </div>
  )
}
