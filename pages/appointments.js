// Page needed libraries
import Head from 'next/head'

// Import core layout
import Layout from './Compontents/Layout';

// Import page components
import AppointmentForm from './Compontents/assets/Appointment/AppointmentForm'
import AppointmentInfo from './Compontents/assets/Appointment/AppointmentInfo'

function Appointment() {
  return (
    <Layout title="Book an appointment" 
        header="text-white"
        footer="">
      <main>
      <section className="pt-0">
        <div className="jumbotron jumbotron-fluid vh-50 d-flex align-items-center bg-dark text-white">
          <div className="bg o-7" style={{backgroundImage: 'url(/images/slide3.png)'}} />
          <div className="container text-center">
            <h5 className="in-left">Inside story</h5>
            <h1 className="in-top">Request an appointment</h1>
          </div>
        </div>
        <div className="container py-6">
          <div className="row">
             {/** Left col */}
            <div className="col-sm-4 offset-md-1">
              <AppointmentInfo/>
            </div>

            {/** Right col - Booking form */}
            <div className="col-sm-6">
             <AppointmentForm/>
            </div>
          </div>
        </div>
      </section>
    </main>
    </Layout>   
  )
}

export default Appointment