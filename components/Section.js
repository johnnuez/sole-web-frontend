import Heading from './Heading'

export default function Section({
  children,
  bgBlend = 'bg-blend-multiply',
  title = '',
  bgUrl = 'https://res.cloudinary.com/dpvmqdpwk/image/upload/v1649677006/large_0_eefb7fe9f2.jpg',
}) {
  return (
    <div
      className={`flex flex-col mx-auto bg-fixed bg-cover rounded-md overflow-hidden shadow-2xl bg-opacity-70 bg-zinc-800 max-w-[110rem] ${bgBlend}`}
      style={{
        backgroundImage: `url(${bgUrl})`,
      }}
    >
      <div className='py-3 backdrop-blur-[6px]'>
        <Heading title={title} />
        <div className='flex-1 px-[2%] transition-all ease-in-out'>{children}</div>
      </div>
    </div>
  )
}
