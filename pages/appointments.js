// Page needed libraries
import Head from 'next/head'
import Script from 'next/script'
import {useState} from 'react'

// Import core layout
import Layout from './Compontents/Layout';
  
// Import page components
import AppointmentInfo from './Compontents/assets/Appointment/AppointmentInfo'

// import container content
import Vietnamese from '../utils/Vietnamese'
import English from '../utils/English'

// React icons
import {BsFillPatchCheckFill} from 'react-icons/bs'


// Toast notification
import toast from 'react-hot-toast'


function AppointmentEmbed() {


  const [pageContent, setPageContent] = useState(Vietnamese)
  const [curentLanguage, setCurrentLanguage] = useState('en')

 
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
    <>
    <Head>
          <link rel="stylesheet" type="text/css" href="https://npmcdn.com/flatpickr/dist/themes/dark.css"></link>
    </Head>
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
                 <Script src="https://apps.elfsight.com/p/platform.js" defer strategy="beforeInteractive"/>
                 <div className="elfsight-app-a1d8f4e2-4dcf-4298-9844-280e64bea06e"></div>        

            </div>
            
          </div>
        </div>
      </section>
    </main>

    
    </Layout>   
    </>
  )
}






export default AppointmentEmbed