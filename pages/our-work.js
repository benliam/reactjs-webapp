// Import core layout
import Layout from './Compontents/Layout';

const FOLDER = 'mywork'

function OurWork(props) {

  return (
    <>
    <Layout title="Our work"  header="" footer="fixed">
    <main>
      <div className="jumbotron jumbotron-fluid vh-100 d-flex align-items-center">
        <div className="container-fluid py-6 text-center">
          <h6 className="in-left">Our work</h6>
          <h1 className="in-top">{props.text} <i className="bi-alarm"></i></h1>
        </div>
      </div>
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
        props: {text: process.env.CLOUDINARY_CLOUD_NAME, result: results,images }
    }
}

export default OurWork