// Import core layout
import Layout from './Compontents/Layout'

// Import page needed libraries
import Image from 'next/image'
import Head from 'next/head'
import {useState} from 'react'

// import page assets
import BlogAlt1 from '../public/images/blog-alt1.jpg'
import BlogAlt2 from '../public/images/blog-alt2.jpg'



// Boootstrap icon
import {BsArrowDownShort} from "react-icons/bs"

// Toast notification
import toast from 'react-hot-toast'

// Import Contents
import Vietnamese from './Compontents/assets/AftercareInstruction/vi'
import English from './Compontents/assets/AftercareInstruction/en'


function Aftercare() {

  const [Language, setLanguage] = useState('vi')

  // Switch Content
  function SwitchLanguage(Language){

    const msgText = (Language == 'vi' ? "Tiếng Việt" : "English")

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

    // set state
    setLanguage(Language)
  }

  // Switch Button
  function LanguageButtons(){
    return <div>
      <button className="btn mr-2" onClick={() => SwitchLanguage('vi')}>Tiếng Việt</button> 
      <button className="btn mr-2" onClick={() => SwitchLanguage('en')}>English</button> 
    </div>
  }

  return (
    <>
    <Layout title="Aftercare Instruction"  header="" footer="default" url="https://wwww.benztattoo.ink/aftercare">
    <main>
        <section className="pt-0 border-bottom">
          <div className="container pb-5">
            <div className="row">
              <div className="col-sm-6 offset-sm-3"><Image className="img-fluid w-100"  placeholder="blur" src={BlogAlt1} /></div>
            </div>
            <div className="row pt-5">
              <div className="col-sm-3 offset-sm-3">
                <h2 className="in-left">Tattoo Aftercare Instruction</h2>
              </div>
              <div className="col-sm-3">
                <p className="in-top">What to expect and do after getting your tattoo</p>
                <p className="in-top" onClick={() =>{ document.getElementById("_page_content").scrollIntoView(); }}>Please Read below <BsArrowDownShort style={{fontSize: 30}} /> </p>
              </div>
            </div>
          </div><img className="img-fluid vw-100" placeholder="blur" src="/images/blog-alt2.jpg" />
          <div className="container" id="_page_content">
            <div className="row pt-5 justify-content-between align-items-center">
              <div className="col-sm-6 offset-sm-3">
                <div className="border-bottom pb-5 text-center">
                <LanguageButtons/>
                </div>
              </div>
            </div>
          <div className="content">
              {Language == 'vi' ? <Vietnamese/> : <English/>}
          </div>
          </div>
        </section>
      </main>
    </Layout>
  </>
  )
}



export default Aftercare