export default function Hero({ imageUrl, title }) {
  return (
    <div
      className={`w-full bg-center bg-cover h-[40rem] flex-1 mt-[-12rem] mb-14`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 shadow-lg border-slate-100 border-opacity-20'>
        <div className='text-center'>
          <h1 className='mt-24 text-2xl font-semibold tracking-widest text-white uppercase lg:text-3xl opacity-30'>
            {title}
          </h1>
        </div>
      </div>
    </div>
  )
}
