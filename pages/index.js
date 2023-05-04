// Page needed libraries
import Head from 'next/head'
// Import core layout
import Layout from './Compontents/Layout';

function Home() {
  return (
    <>
    <Layout title="Benz.Tattoo Design - Tattoo Studio in Da Nang" header="" footer="fixed" url="https://wwww.benztattoo.ink/">
     <div>	
     <main>
        <div className="glide slider">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
             <li className="glide__slide invert">
                <div className="jumbotron jumbotron-fluid vh-100 d-flex align-items-center">
                  <div className="bg o-8" style={{backgroundImage: `url('/images/slider/slide1.png')` }}  />
                  <div className="container-fluid py-6"><a className="tilt no-link mx-auto" href="#">
                      <h6>We are tattoo studio</h6>
                      <h1 className="massive" > <span className="d-block">Benz.Tattoo</span><span className="d-block">Design</span></h1>
                      <p className="w-50">We turn your ideas into our one of a kind uniqued tattoo design. You think it, we make it  </p>
                    </a>
                    </div>
                </div>
              </li>

              <li className="glide__slide invert">
                <div className="jumbotron jumbotron-fluid vh-100 d-flex align-items-center">
                  <div className="bg o-8" style={{backgroundImage: `url('/images/slider/slide4.jpg')` }} />
                  <div className="container-fluid py-6"><a className="tilt no-link mx-auto" href="/about">
                      <h6>Design inquires</h6>
                      <h4 className="massive">
                        <span className="d-block">Tattoo</span>
                        <span className="d-block">Design</span></h4>
                      <p className="w-50">We create art base on your ideas turn into stunning tattoo for you</p>
                    </a></div>
                </div>
              </li>
              <li className="glide__slide">
                <div className="jumbotron jumbotron-fluid vh-100 d-flex align-items-end">
                  <div className="bg o-8" style={{backgroundImage: `url('/images/slider/slide3.jpg')` }}  />
                  <div className="container-fluid py-6"><a className="tilt no-link" href="/contact">
                      <h4>Get your tattoo</h4>
                      <h1 className="massive"><span className="d-block">Booking</span><span className="d-block">Appointment</span></h1>
                    </a></div>
                </div>
              </li>
            </ul>
          </div>
          <div className="glide__bullets" data-glide-el="controls[nav]">
            <div className="glide__bullet" data-glide-dir="=0">1</div>
            <div className="glide__bullet" data-glide-dir="=1">2</div>
            <div className="glide__bullet" data-glide-dir="=2">3</div>
            <div className="glide__bullet total">3</div>
          </div>
        </div>
      </main>
			</div>		   
    </Layout>
    </>
  )
}

export default Home