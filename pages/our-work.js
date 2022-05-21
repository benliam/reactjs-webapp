// Import core layout
import Layout from './Compontents/Layout';

const FOLDER = 'mywork'

function OurWork(props) {

  return (
    <>
    <Layout title="Our work"  header="" footer="default">
    <main>
        <section>
          <div className="container-fluid py-6">
            <h1> <span className="d-block in-left">Our Work — Lightbox</span></h1>
            <h3 className="d-block in-top">Check out more work at @benz.tattoodesign</h3>
          </div>
          <div className="container-fluid"> 
            <div className="grid gallery">
              <div className="grid-sizer col-1" /><a className="lightbox grid-item col-3" href="/images/16.jpg"><img alt="Neoto - Creative Studio Portfolio Template" src="images/16.jpg" />
                <div className="caption p-3">
                  <div className="title">Flourish Away</div>
                </div>
              </a><a className="lightbox grid-item col-3" href="/images/10.jpg"><img alt="Neoto - Creative Studio Portfolio Template" src="images/10.jpg" />
                <div className="caption p-3">
                  <div className="title">Suit up</div>
                </div>
              </a><a className="lightbox grid-item col-3" href="/images/8.jpg"><img alt="Neoto - Creative Studio Portfolio Template" src="images/8.jpg" />
                <div className="caption p-3">
                  <div className="title">Mix it up</div>
                </div>
              </a><a className="lightbox grid-item col-3" href="/images/17.jpg"><img alt="Neoto - Creative Studio Portfolio Template" src="images/17.jpg" />
                <div className="caption p-3">
                  <div className="title">Next-gen Shoes</div>
                </div>
              </a><a className="lightbox grid-item col-3" href="/images/6.jpg"><img alt="Neoto - Creative Studio Portfolio Template" src="images/6.jpg" />
                <div className="caption p-3">
                  <div className="title">Back to Tapes</div>
                </div>
              </a><a className="lightbox grid-item col-3" href="/images/7.jpg"><img alt="Neoto - Creative Studio Portfolio Template" src="images/7.jpg" />
                <div className="caption p-3">
                  <div className="title">Turn the page</div>
                </div>
              </a><a className="lightbox grid-item col-3" href="/images/15.jpg"><img alt="Neoto - Creative Studio Portfolio Template" src="images/15.jpg" />
                <div className="caption p-3">
                  <div className="title">Silk White</div>
                </div>
              </a><a className="lightbox grid-item col-3" href="/images/5.jpg"><img alt="Neoto - Creative Studio Portfolio Template" src="images/5.jpg" />
                <div className="caption p-3">
                  <div className="title">Branch X</div>
                </div>
              </a>
            </div>
          </div>
          <div className="container my-5 py-6">
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

export async function getStaticProps(){


    const results = await fetch(`https://185867122132969:3GFjj8-adY2GMbTCOOmkTGcAweY@api.cloudinary.com/v1_1/benztattoodessign/resources/image`)
    .then(response => response.json())
    .catch((error) => {
        console.log(error)
    })

    const { resources } = results;

    const images = resources.map(resource => {
    const { width, height } = resource
    return {
        id: resource.asset_id,
        title: resource.public_id,
        image: resource.secure_url,
        width,
        height
    }
    })


    // return to props
    return {
        props: {result: results,images }
    }
}

export default OurWork