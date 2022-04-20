import Heading from '@/components/Heading'
import Layout from '@/components/Layout'
import { InlineWidget } from 'react-calendly'

export default function SchedulePage() {
  return (
    <Layout title='Agenda'>
      <div className='flex flex-col justify-center mt-5 align-middle'>
        <Heading title='reservá tu turno' />
        <div className='flex-grow mx-3 mt-10 mb-5 md:mt-0 md:mb-8'>
          <InlineWidget url='https://calendly.com/sole-tarotysimbolos' />
        </div>
      </div>
    </Layout>
  )
}
