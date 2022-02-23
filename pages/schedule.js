import Layout from '@/components/Layout'
import { InlineWidget } from 'react-calendly'

export default function SchedulePage() {
  return (
    <Layout>
      <div className='flex flex-col justify-center align-middle'>
        <div className='flex-1 mt-8 sm:mt-12'>
          <p className='text-3xl text-center opacity-80 text-amber-50'>Reservá tu turno</p>
        </div>
        <div className='flex-grow mx-3 mt-10 mb-5 md:mt-0 md:mb-8'>
          <InlineWidget url='https://calendly.com/sole-tarotysimbolos' />
        </div>
      </div>
    </Layout>
  )
}
