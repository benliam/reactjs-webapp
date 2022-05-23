// Import core layout
import Layout from './Compontents/Layout';
// server side libries
import { createClient } from '@supabase/supabase-js'

function OurWork({ images }) {

  return (
    <>
    <Layout title="Our work"  header="" footer="default">
    <main>
        <section>
          <div className="container-fluid py-6">
            <h1> <span className="d-block in-left">Our Work — tattoo</span></h1>
            <h3 className="d-block in-top">Check out more work at @benz.tattoodesign</h3>
          </div>
          <div className="container-fluid"> 
            <div className="grid gallery">
              <div className="grid-sizer col-1" />
              {images.map((image) => (
          <ImageBox key={image.id} src={image.src} artist={image.artist} />
          ))}
            </div>
          </div>
          <div className="container my-5 mt-5 pt-5 py-6">
            <div className="row justify-content-md-center text-center">
              <div className="col-sm-8">
                <h3>We work with 100% our passion</h3>
                <p>We strive to be as unique as possible in each project. Your tattoo will be the greatest thanks to our zeal and inventiveness.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  </>
  )
}

function ImageBox({src, artist, key}){
  return (
    <a className="lightbox grid-item col-3" href={src}>
      <img alt="" layout="fill" objectFit="cover" src={src}/>
      <div className="caption p-3">
        <div className="title">{artist}</div>
      </div>
  </a>
  )
}



export async function getStaticProps(){
  const supabaseAdmin = createClient('https://cvksvmnlyajtrblsbwza.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2a3N2bW5seWFqdHJibHNid3phIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1MzMxODkzNSwiZXhwIjoxOTY4ODk0OTM1fQ.I6NVHEGgiIndzUBh4JG80xkItl5RjSYAVHbSGrdGbMo')
  const { data } = await supabaseAdmin.from('images').select('*').order('id')
  return {
    props: {
      images: data ? data : [],
      result: "hello"
    },
    }
    
}

export default OurWork