// Import core layout
import Layout from './Compontents/Layout';

// Import page components
import ContactForm from './Compontents/assets/ContactForm'

//Import Nextjs Libraries
import Link from 'next/link'

function Contact() {
  return (
    <>
    <Layout title="Contact Us"  header="text-white" footer="default">
    <main>
    <section className="jumbotron jumbotron-fluid pb-0 bg-dark">
        <div className="bg o-5" style={{backgroundImage: `url(/images/contact.jpg)`}} />
        <div className="container text-white py-5">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="massive in-left">Contact</h1>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-5 offset-lg-2">
              <p className="in-top">
                   Feel free to reach out if you have any question. We will response your email within 24 hours
                   You can also contact us directly by calling us at +(84) 93 6767-031.
              </p>
            </div>
          </div>
            <ContactForm/>
        </div>
      </section>

      <section className="pb-10 border-bottom pb-6">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h2>Turn your ideas into <br /> stunning tattoos</h2>
                <div className="border-bottom my-5" />
              </div>
            </div>
            <div className="row size-sm">
              <div className="col-lg-4 offset-lg-2">
                <p><strong>Benz.Tattoo Design Studio</strong><br />Floor 2, 106/2 Nguyen Thi Minh Khai street<br />Hai Chau dist, Da Nang, Vietnam</p>
              </div>
              <div className="col-lg-1 offset-lg-1">
                <p> <strong>Phone<br />Mail<br />Instagram<br />Facebook<br /></strong></p>
              </div>
              <div className="col-lg-2 text-right">
                <p>093-6767-031<br />benz.tattoodesign@gmail.com<br />
                <a target="_blank" rel="noreferrer" href="https://instagram.com/benz.tattoodesign" title="Benz.Tattoo Design - Instagram">@benz.tattoodesign</a> <br />
                <a target="_blank" rel="noreferrer" title="Benz.Tattoo Design - Facebook" href="https://facebook.com/benz.tattoo.design">Benz.Tattoo Design</a></p>
              </div>
            </div>
          </div>
        </section>

    </main>
    </Layout>
  </>
  )
}

export default Contact