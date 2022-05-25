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
    <Head>
                <meta name="description" content='The Tattoo  Piercing Studio based in Da Nang, Vietnam. The best Tattoo studio located at the heart of Da Nang. We ink what you dream!'></meta>
                <meta name="keywords" content="tattoo shop, tattoo studio, tiệm xăm đà nẵng, tiệm xăm đẹp, tattoo đà nẵng, good tattoo shop, tattoo da nang, tattoo shop da nang, đà nẵng tattoo, hình xăm đẹp, hình xăm, piercing đà nẵng, piercing, đà nẵng piercing, best tattoo shop, studio tattoo da nang"></meta>
                <meta property="og:title" content="Aftercare Instruction" ></meta>
                <meta property="og:description" content='Tattoo Aftercare Instruction - Hướng dẫn chăm sóc hình xăm sau khi xăm, cách chăm sóc hình xăm tốt nhất'></meta>
                <meta property="og:url" content="http://benztattoo.ink/"></meta>
                <meta property="og:site_name" content="BENZTATTOO.ink" ></meta>
                <meta property="og:image" content="https://i.imgur.com/YnXT3od.png" />
                <meta property="og:image:secure_url" content="https://i.imgur.com/YnXT3od.png" ></meta>
                <meta name="twitter:card" content="summary"></meta>
                <meta name="twitter:title" content="BenZ.Tattoo Design - Tattoo  Piercing studio Da Nang"></meta>
                <meta name="twitter:image" content="https://i.imgur.com/YnXT3od.png" ></meta>
     </Head> 
    <Layout title="Aftercare Instruction"  header="" footer="default">
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