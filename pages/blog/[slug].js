import Hero from '@/components/Hero'
import Layout from '@/components/Layout'

export default function PostPage() {
  return (
    <Layout>
      <Hero imageUrl='/bioImage.jpg' title='Blog Post' />
      <div className='container py-14'>
        <p className='px-5 text-xl text-justify opacity-80 text-amber-50 first-letter:text-4xl'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, soluta modi quaerat
          aut esse, ad, fugit iusto aliquid officia et aliquam voluptatibus. Asperiores dolore hic,
          earum beatae saepe laudantium doloremque cumque eligendi laborum fuga sed quis, impedit
          quibusdam vitae voluptatibus dolores tenetur repellat libero? Quas assumenda et qui alias
          distinctio quod aliquam sunt non! Veritatis incidunt magnam cupiditate repellat ab veniam
          neque laboriosam.
          <br />
          <br />
          Provident non et animi tempore quibusdam debitis totam incidunt sunt cumque ad rerum eius
          nostrum quod veritatis, laborum commodi? Deleniti molestiae reiciendis dolores tempora
          quam recusandae dolor, perferendis laborum numquam cum similique ipsam animi itaque natus
          enim veritatis maiores voluptatum totam possimus eligendi dignissimos. Deleniti, delectus
          dolores. Pariatur nulla impedit reiciendis iure amet quaerat, labore quas dignissimos fuga
          perferendis voluptates error velit, quia architecto voluptatibus qui ex, consequuntur
          saepe inventore soluta recusandae dolorem deserunt nam. Eligendi, esse quo quam illum
          nulla excepturi quia nemo, delectus voluptas tempore aspernatur itaque voluptatibus
          debitis. Iste temporibus maxime beatae et, dolores, quam sed consequatur mollitia aut
          quidem dignissimos inventore atque velit exercitationem fugit accusantium necessitatibus
          sit expedita! Consequatur ad temporibus, totam dolore non culpa? Quod, eum. Commodi rerum
          corporis voluptatibus, praesentium consequatur dolor eligendi voluptates totam quod, autem
          animi explicabo possimus?
        </p>
      </div>
    </Layout>
  )
}
