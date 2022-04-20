export default function Heading({ title }) {
  return (
    <div className='mx-auto w-fit text-xl sm:text-2xl tracking-[0.4em] text-center text-yellow-500 font-extralight'>
      <p>{title.toUpperCase()}</p>
    </div>
  )
}
