import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Hero({ imageUrl, title, bgSize, loading = false }) {
  if (loading) {
    return (
      <div className='mt-[-16rem] opacity-20'>
        <Skeleton height='42rem' baseColor='#3f3f46' highlightColor='#ca8a04' />
      </div>
    )
  }

  return (
    <div
      className={`h-[49rem] max-h-[95vh] mt-[-16rem] opacity-95 ${bgSize} lg:bg-fixed bg-black bg-opacity-75 shadow-lg bg-blend-color bg-center bg-cover`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className='flex items-center justify-center w-full h-full backdrop-blur-sm'>
        <div className='text-center p-[1%] max-w-4xl mt-52'>
          {title ? (
            <h1 className='text-5xl tracking-[0.2em] text-yellow-600 opacity-70 3xl:text-6xl line-clamp-6 py-2'>
              {title}
            </h1>
          ) : (
            <>
              <h1 className='text-6xl tracking-[0.2em] text-yellow-600 opacity-70 3xl:text-7xl line-clamp-6 py-2'>
                Sole
              </h1>
              <p className='text-3xl text-yellow-600 opacity-50 tracking-[0.3em] mt-2 3xl:text-4xl'>
                Tarot & Símbolos
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
