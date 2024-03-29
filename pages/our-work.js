// Import core layout
import Layout from './Compontents/Layout';
// server side libries
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'

function OurWork({ images }) {

  return (
    <>
    <Layout title="Our work"  header="" footer="default" url="https://benztattoo.ink/our-work">
    <main>
        <section>
          <div className="container-fluid py-4">
            <h1> <span className="d-block in-left">Our Work — tattoo</span></h1>
            <h3 className="d-block in-top">Check out more work at @benz.tattoodesign</h3>
          </div>
          <div className="container-fluid"> 
          <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer />
          <div className="elfsight-app-eeb7b2a8-e989-4eea-b73f-bad4a7f5f225"></div>
          </div>

          <div className="container my-5 mt-5 pt-3 py-6">
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

function PreLoading(){
  return(
    <div>
      <h1>Loading</h1>
    </div>
  )

}


export default OurWork