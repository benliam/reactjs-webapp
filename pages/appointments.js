// Page needed libraries
import Head from 'next/head'
import {useState} from 'react'

// Import core layout
import Layout from './Compontents/Layout';
import { Button } from "nextjs-components/dist/components/Button";
  
// Import page components
import AppointmentForm from './Compontents/assets/Appointment/AppointmentForm'
import AppointmentInfo from './Compontents/assets/Appointment/AppointmentInfo'

// import container content
import Vietnamese from '../utils/Vietnamese'
import English from '../utils/English'

// React icons
import {BsFillPatchCheckFill} from 'react-icons/bs'


// Toast notification
import toast from 'react-hot-toast'


function Appointment() {


  const [pageContent, setPageContent] = useState(Vietnamese)
  const [curentLanguage, setCurrentLanguage] = useState('vi')

 
  // Switching language function
  function changeLanguage(locale){

    const msgText = (locale == 'vi' ? "Vietnamese" : "English")

    // Display notification
    toast(`The page has switched to ${msgText}`,{
      icon: '👏',
      position: "top-center",
      style: {
        borderRadius: '50px',
        background: '#333',
        color: '#fff',
      },
    })

    setCurrentLanguage(locale)


  }

  const SwitchLanguage = () => {
    return (
      <div className="social"><a className="trigger"><BsFillPatchCheckFill style={{fontSize: 16, color: `#0761D1`}}/> {curentLanguage == 'vi' ? 'Vietnamese' : 'English'}</a>
                    <ul className="social-nav">
                    <li> <a onClick={() => changeLanguage('vi') }>Vietnamese</a></li>
                    <li> <a onClick={() => changeLanguage('en')}>English</a></li>
                    </ul> 
        </div>)
  }  

  return (
    <Layout title="Book an appointment" 
        header="text-white"
        footer="">
      <main>
      <section className="pt-0">
        <div className="jumbotron jumbotron-fluid vh-50 d-flex align-items-center bg-dark text-white">
          <div className="bg o-7" style={{backgroundImage: 'url(/images/slide3.png)'}} />
          <div className="container text-center">
            <h5 className="in-left">We offer</h5>
            <h1 className="in-top">Request an appointment</h1>
          </div>
        </div>

        <div className="container">
        <div className="row pt-5 justify-content-between align-items-center">
              <div className="col-sm-10 offset-md-1">
                <div className="border-bottom pb-5 ">
                <SwitchLanguage/>
                </div>
              </div>
            </div>
        </div>

        {/** Switch language */}
        <div className="container py-6">
          <div className="row">
             {/** Left col */}
            <div className="col-sm-4 offset-md-1">
            <AppointmentInfo pageContent={curentLanguage} />
            </div>

            {/** Right col - Booking form */}
            <div className="col-sm-6">
             <AppointmentForm pageContent={curentLanguage}/>
            </div>
            
          </div>
        </div>
      </section>
    </main>
    </Layout>   
  )
}






export default Appointment