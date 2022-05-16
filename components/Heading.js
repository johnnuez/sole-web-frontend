export default function Heading({ title }) {
  return (
    <div
      className={`mx-auto w-fit text-4xl 3xl:text-5xl tracking-[0.15em] text-center text-yellow-600 opacity-70`}
    >
      <h1>{title}</h1>
    </div>
  )
}
