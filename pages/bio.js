import Heading from '@/components/Heading'
import Layout from '@/components/Layout'
import Image from 'next/image'

export default function BioPage() {
  return (
    <Layout title='Bio'>
      <Heading title='bio' />
      <div className='max-w-3xl mx-auto'>
        <div className='relative w-full my-8 shadow-xl h-80 md:h-96'>
          <Image
            src='https://res.cloudinary.com/dpvmqdpwk/image/upload/v1645638306/hero_Image_fce74872dd.jpg'
            alt=''
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            className='rounded-md'
          />
        </div>
        <div className='p-1 text-xl text-amber-50 opacity-80'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat qui iste sit quisquam.
            Minus ipsum provident molestiae adipisci voluptatibus nam sint nobis mollitia illum,
            accusantium eaque deserunt doloremque temporibus? Minus, alias rerum consequuntur
            possimus fugiat iusto facere nemo? Sit tenetur doloremque natus delectus nesciunt,
            excepturi quam laudantium consectetur dolorem reprehenderit.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, assumenda maxime magni
            ducimus doloremque enim pariatur! At eveniet deserunt animi dolorum velit ipsa
            voluptatibus, praesentium, quisquam excepturi commodi saepe soluta eum! Corporis, sit.
            Sit ipsam libero tempora reiciendis aperiam repudiandae.
          </p>
        </div>
      </div>
    </Layout>
  )
}
