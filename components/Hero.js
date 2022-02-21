export default function Hero() {
  return (
    <div className='w-full bg-center bg-cover h-[32rem] bg-[url("/heroImage.jpg")] bg-fixed'>
      <div className='flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 border-b border-slate-100 border-opacity-20'>
        <div className='text-center'>
          <h1 className='text-2xl font-semibold tracking-widest text-white uppercase lg:text-3xl opacity-30'>
            Sole Tarot y Símbolos
          </h1>
        </div>
      </div>
    </div>
  )
}
