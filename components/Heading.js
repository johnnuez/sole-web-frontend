import Link from 'next/link'

export default function Heading({ title, href }) {
  return href ? (
    <Link href={href}>
      <a>
        <div
          className={`mx-auto w-fit text-4xl 3xl:text-5xl tracking-[0.15em] text-center text-yellow-600 opacity-70 hover:opacity-100`}
        >
          <h1>{title}</h1>
        </div>
      </a>
    </Link>
  ) : (
    <div
      className={`mx-auto w-fit text-4xl 3xl:text-5xl tracking-[0.15em] text-center text-yellow-600 opacity-70`}
    >
      <h1>{title}</h1>
    </div>
  )
}
