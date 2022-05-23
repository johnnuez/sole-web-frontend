import Button from '@/components/Button'
import Layout from '@/components/Layout'

export default function Custom404Page() {
  return (
    <Layout title='404 | Página no encontrada'>
      <div className='flex flex-col items-center justify-center min-h-[60vh]'>
        <div className='flex items-center justify-center px-10 mb-20'>
          <p className='flex-[1] text-yellow-600 opacity-70 text-7xl text-center'>404</p>
          <p className='flex-1 mt-2 text-3xl text-center text-neutral-300'>|</p>
          <p className='flex-[1] mt-2 text-3xl text-neutral-300 text-center'>
            Página no encontrada
          </p>
        </div>
        <div>
          <Button text='volver a inicio' href='/' />
        </div>
      </div>
    </Layout>
  )
}
