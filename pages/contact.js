// Import core layout
import Layout from './Compontents/Layout';

// Import page components
import ContactForm from './Compontents/assets/ContactForm'

//Import Nextjs Libraries
import Link from 'next/link'
import Head from 'next/head'

function Contact() {
  return (
    <> 
    <Layout title="Contact Us"  header="text-white" footer="default" url="https://wwww.benztattoo.ink/contact">
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
                <p><strong>Benz.Tattoo Design Studio</strong><br /><a rel="noreferrer" style={{color: "#2B3499"}} href="https://www.google.com/maps/dir//Benz.Tattoo+Design+-+Tattoo+Studio,+334%2F6+%C4%90%E1%BB%91ng+%C4%90a,+Thanh+B%C3%ACnh,+H%E1%BA%A3i+Ch%C3%A2u,+%C4%90%C3%A0+N%E1%BA%B5ng+550000/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x314219a0ef6f61b1:0xc4eab2b582107090?sa=X&ved=2ahUKEwi8idjdw8CCAxX3qFYBHXz8ASgQ48ADegQIGxAA">334/6 Dong Da street<br />Hai Chau dist, Da Nang, Vietnam</a></p>
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