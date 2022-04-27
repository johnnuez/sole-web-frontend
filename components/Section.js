import Heading from './Heading'

export default function Section({ children, bgBlend = 'bg-blend-multiply', title }) {
  return (
    <div
      className={`flex flex-col mx-auto bg-fixed bg-cover shadow-2xl bg-opacity-80 bg-slate-700 max-w-[120rem] py-5 ${bgBlend}`}
      style={{
        backgroundImage:
          'url(https://res.cloudinary.com/dpvmqdpwk/image/upload/v1649677006/large_0_eefb7fe9f2.jpg)',
      }}
    >
      <Heading title={title} />
      <div className='flex-1 px-[2%] transition-all ease-in-out'>{children}</div>
    </div>
  )
}
