// Import core layout
import Layout from './Compontents/Layout';
// server side libries
import { createClient } from '@supabase/supabase-js'
import Image from 'next/image'

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

function ImageBox({src, artist}){
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

   // Configuring Supabase API 
  const supabaseAdmin = createClient(`https://nlgyqjadljvfirahwojf.supabase.co`,`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sZ3lxamFkbGp2ZmlyYWh3b2pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0NzUxMDMsImV4cCI6MTk2OTA1MTEwM30.PUay7bPNKqlnwUOBm1F0CbGwL5n32F1OYlFJowwe9s8`)
  
  // Authorzing and get data from database
  const { data } = await supabaseAdmin.from('images').select('*').order('id')
  
    console.log(data)

  // returning database
  return {
    props: {
      images: data ? data : [],
      result: "hello"
    },
    }
    
}

export default OurWork