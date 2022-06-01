// Page needed libraries
import Head from 'next/head'
import Script from 'next/script'

// Import core layout
import Layout from './Compontents/Layout';


function Shop() {
  return (
    <Layout title="Our Shop" header="text-white" footer="">
      <main>
      <section className="pt-0">
        <div className="jumbotron jumbotron-fluid vh-50 d-flex align-items-center bg-dark text-white">
          <div className="bg o-7" style={{backgroundImage: 'url(/images/slide3.png)'}} />
          <div className="container text-center">
            <h5 className="in-left">Shop</h5>
            <h1 className="in-top">Available items</h1>
          </div>
        </div>

        <div className="container">
        <div className="row pt-5 justify-content-between align-items-center">
              <div className="col-md-12 ">
                <div className="border-bottom pb-5 ">

                <div id="my-store-47457026"></div>
            <Script src="https://app.ecwid.com/script.js?47457026&data_platform=code&data_date=2022-05-31" strategy="beforeInteractive"/>
            <Script
            strategy="afterInteractive"
            id={1}
            dangerouslySetInnerHTML={{
                __html: `
                xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-47457026");
            `,
             }}/>
                    
                </div>
              </div>
            </div>
        </div>
        </section>
    </main>
    </Layout>
  )
}

export default Shop