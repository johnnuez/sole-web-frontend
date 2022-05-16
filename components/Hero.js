export default function Hero({ imageUrl, title, bgSize }) {
  return (
    <div
      className={`h-[49rem] max-h-[95vh] mt-[-16rem] opacity-95 ${bgSize} bg-fixed bg-black bg-opacity-75 shadow-lg bg-blend-color`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className='flex items-center justify-center w-full h-full backdrop-blur-sm'>
        <div className='text-center p-[1%] max-w-4xl mt-52'>
          <h1 className='text-5xl tracking-[0.2em] text-yellow-600 opacity-70 3xl:text-6xl line-clamp-6 py-2'>
            {title}
          </h1>
        </div>
      </div>
    </div>
  )
}
