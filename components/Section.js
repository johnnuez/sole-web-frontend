import Heading from './Heading'

export default function Section({
  children,
  bgBlend = 'bg-blend-multiply',
  title = '',
  bgUrl = 'https://res.cloudinary.com/dpvmqdpwk/image/upload/v1649677006/large_0_eefb7fe9f2.jpg',
  blurOnMobile = false,
  href,
}) {
  return (
    <div
      className={`flex flex-col mx-auto lg:bg-fixed bg-cover bg-center rounded-md overflow-hidden shadow-2xl bg-opacity-80 lg:bg-opacity-70 bg-zinc-800 max-w-[110rem] ${bgBlend} overflow-visible`}
      style={{
        backgroundImage: `url(${bgUrl})`,
      }}
    >
      <div
        className={`py-3 ${blurOnMobile ? 'backdrop-blur-sm' : 'lg:backdrop-blur-sm'} rounded-md`}
      >
        <Heading title={title} href={href} />
        <div className='flex-1 px-[2%]'>{children}</div>
      </div>
    </div>
  )
}
