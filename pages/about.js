// Import core layout
import Layout from './Compontents/Layout';

import Image from 'next/image'

// hero image
import HeroPage from '../public/images/about-page-hero.jpg'


// Sponser images
import Logo1 from '../public/images/brands/brand1.png';
import Logo2 from '../public/images/brands/brand2.png';
import Logo3 from '../public/images/brands/brand3.png';
import Logo4 from '../public/images/brands/brand4.png';
import Logo5 from '../public/images/brands/brand5.png';
import Logo6 from '../public/images/brands/brand6.png';

// Member artist
import Artist1 from '../public/images/team/artist1.png';
import Artist2 from '../public/images/team/artist2.png';

import Member1 from '../public/images/member2.png';

function AboutUs() {
    
  return (
    <>
    <Layout title="About us"  header="" footer="" url="https://wwww.benztattoo.ink/about">
    <main>
        <section>
          <div className="container py-6">
            <div className="row">
              <div className="col-12 col-lg-8">
                <h1 className="massive"><span className="d-block in-left">About </span><span className="d-block in-top">Us</span></h1>
              </div>
              <div className="col-12 col-lg-4 d-lg-flex align-items-end justify-content-end">
                <p className="mt-4">We have revamped 2021s most professional tattoo brand.</p>
              </div>
            </div>
          </div>

        <div className="container py-6">
        <div className="row justify-content-md-center in-top">
  <div className="col-sm-6">
    <h2>We don&lsquo;t just do tattoo!</h2>
    <p>
    Established in 2018 by Liam Ng, located at the centrer of Da Nang. Our main goal is to create a one of a kind custom tattoo just for you and focusing on providing clean, professional and friendly tattooing in a modern and relaxing environment.
    </p>
  </div>
</div>

          </div>  


 <div className="container">
      <h5 className="border-top py-5 mb-0">Team</h5>
        <div className="row mx-0 pb-5">
          <div className="col-sm-3 col-4 px-0">
            <div className="card bg-dark text-white hoverable"><Image className="card-img"  src={Artist1} />
              <div className="card-img-overlay">
                <div className="card-title">
                  <div className="title">Senior Artist</div>
                  <div className="name">Liam Ng (@nl.liam)</div>
                  <p className="title">Blackwork / Minimalist / Mandala</p>
                </div>
              </div>
            </div>
          </div>
   
       <div className="col-sm-3 col-4 px-0">
            <div className="card bg-dark text-white hoverable"><Image className="card-img" src={Member1} />
              <div className="card-img-overlay">
                <div className="card-title">
                  <div className="title">We are hiring</div>
                  <div className="name">Looking for artist</div>
                </div>
              </div>
            </div>  
          </div>

          <div className="col-sm-3 col-4 px-0">
            <div className="card bg-dark text-white hoverable"><Image className="card-img" src={Member1} />
              <div className="card-img-overlay">
                <div className="card-title">
                  <div className="title">We are hiring</div>
                  <div className="name">Looking for artist</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-3 col-4 px-0">
            <div className="card bg-dark text-white hoverable"><Image className="card-img" src={Member1} />
              <div className="card-img-overlay">
                <div className="card-title">
                  <div className="title">We are hiring</div>
                  <div className="name">Looking for artist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


        <div>
        <div className="container">
          <h5 className="border-bottom pb-5">Sponsored</h5>
        </div>
        <div className="py-3">
              <div className="container">
                <div className="row text-center">
                  <div className="p-4 col-sm col-3 center"><Image className="img-fluid" placeholder="blur"  src={Logo1} /></div>
                  <div className="p-4 col-sm col-3 center"><Image className="img-fluid" placeholder="blur"  src={Logo2} /></div>
                  <div className="p-4 col-sm col-3 center"><Image className="img-fluid" placeholder="blur" src={Logo3} /></div>
                  <div className="p-4 col-sm col-3 center"><Image className="img-fluid" placeholder="blur" src={Logo4} /></div>
                  <div className="p-4 col-sm col-3 center"><Image className="img-fluid" placeholder="blur" src={Logo5} /></div>
                  <div className="p-4 col-sm col-3 center"><Image className="img-fluid" placeholder="blur" src={Logo6} /></div>
                </div>
              </div>
            </div>
          </div> 
        </section>
      </main>
    </Layout>
  </>
  )
}

export default AboutUs