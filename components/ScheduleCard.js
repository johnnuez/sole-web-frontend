import Image from 'next/image'
import Button from './Button'

export default function ScheduleCard() {
  return (
    <div className='flex flex-col items-center max-w-5xl py-5 mx-auto lg:pt-0 lg:pb-0 lg:flex-row rounded-3xl 3xl:max-w-6xl'>
      <div className='z-10 flex-[3] border-2 border-yellow-500 rounded-full border-opacity-30 lg:w-full w-80 bg-zinc-900 bg-opacity-50'>
        <Image
          src='https://res.cloudinary.com/dpvmqdpwk/image/upload/v1650890555/large_schedule_card_3d16c7cb35.jpg'
          layout='responsive'
          width={100}
          height={100}
          alt=''
          className='rounded-full'
          objectFit='cover'
        />
      </div>
      <div className='flex flex-col items-center justify-center lg:py-20 rounded-3xl 2xl:px-0 lg:flex-[5]'>
        <p className='my-8 text-2xl tracking-widest text-center text-yellow-500'>
          Reservá tu turno para una sesión de tarot
        </p>
        <div className='lg:mt-10'>
          <Button href='/schedule' text='agenda' size='xl' />
        </div>
      </div>
    </div>
  )
}
