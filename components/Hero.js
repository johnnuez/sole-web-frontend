export default function Hero({ imageUrl, title }) {
  return (
    <div
      className={`w-full h-[45rem] max-h-[95vh] flex-1 mt-[-12rem] opacity-95 bg-cover bg-center bg-fixed`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900 shadow-lg bg-opacity-10 border-slate-100 border-opacity-20'>
        <div className='text-center px-[1%]'>
          <h1 className='mt-[40%] text-2xl 3xl:text-3xl font-semibold tracking-widest text-white uppercase opacity-30'>
            {title}
          </h1>
        </div>
      </div>
    </div>
  )
}
