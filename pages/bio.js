import Layout from '@/components/Layout'
import Image from 'next/image'

export default function BioPage() {
  return (
    <Layout title='Bio'>
      <div className='container flex flex-col items-center justify-center w-full h-full px-3 py-8'>
        <div className='relative w-full max-w-2xl h-80 md:h-96'>
          <Image
            src='https://res.cloudinary.com/dpvmqdpwk/image/upload/v1645638306/hero_Image_fce74872dd.jpg'
            alt=''
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
        </div>
        <div className='max-w-2xl p-3 my-5 text-gray-300'>
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
