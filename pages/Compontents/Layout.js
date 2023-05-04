//import layout needed libraries
import Head from 'next/head'

// Import layout partials
import Header from './partials/Header'
import Footer from './partials/Footer'
import FixedFooter from './partials/FixedFooter'
import ProjectFooter from './partials/ProjectFooter'


import { Toaster } from 'react-hot-toast'



function Layout (props) {

    const FooterLayout = props.footer
    
    return(
        <div>
          <Head>
                <title>{!props.title ? `Benz.Tattoo Design` : props.title}</title>
                <link rel="icon" href="/images/favicon/benz-logo-icon-200.png"></link>
                <meta name="description" content='The Tattoo  Piercing Studio based in Da Nang, Vietnam. The best Tattoo studio located at the heart of Da Nang. We ink what you dream!'></meta>
                <meta name="keywords" content="tattoo shop, tattoo studio, tiệm xăm đà nẵng, tiệm xăm đẹp, tattoo đà nẵng, good tattoo shop, tattoo da nang, tattoo shop da nang, đà nẵng tattoo, hình xăm đẹp, hình xăm, piercing đà nẵng, piercing, đà nẵng piercing, best tattoo shop, studio tattoo da nang"></meta>
                <meta property="og:locale" content="vi_VN" />
                <meta property="og:title" content={!props.title ? `Benz.Tattoo Design` : props.title} ></meta>
                <meta property="og:description" content='The Tattoo  Piercing Studio based in Da Nang, Vietnam. The best Tattoo studio located at the heart of Da Nang. We ink what you dream!'></meta>
                <meta property="og:site_name" content="BENZTATTOO.ink" ></meta>
                <meta property="og:image" content="https://i.imgur.com/YnXT3od.png" />
                <meta name="twitter:card" content="summary"></meta>
                <meta name="twitter:title" content="BenZ.Tattoo Design - Tattoo  Piercing studio Da Nang"></meta>
                <meta name="twitter:image" content="https://i.imgur.com/YnXT3od.png" ></meta>
                <meta property="fb:app_id"  content="569680180725353"></meta> 
                <meta property="og:type"   content="article"></meta> 
                <meta property="article:tag" content="Benz.Tattoo Design Đà Nẵng" />
                <meta property="article:tag" content="Benz Tattoo Da Nang" />
                <meta property="article:tag" content="địa chỉ xăm hình đà nẵng" />
                <meta property="article:tag" content="học xăm hình đà nẵng" />
                <meta property="article:tag" content="tattoo đà nẵng" />
                <meta property="article:tag" content="vẽ hình xăm ở đà nẵng" />
                <meta property="article:tag" content="xăm hình đà nẵng" />
                <meta property="article:tag" content="xăm hình đà nẵng dep" />
                <meta property="article:tag" content="xăm hình đà nẵng rẻ" />
                <meta property="article:tag" content="xăm hình đà nẵng uy tín" />
                <meta property="article:tag" content="xăm hình đẹp ở đà nẵng" />
                <meta property="article:tag" content="xăm hình giá rẻ đà nẵng" />
                <meta property="article:tag" content="xăm hình nghệ thuật đà nẵng" />
                <meta property="article:tag" content="xăm hình nghệ thuật tại đà nẵng" />
                <meta property="article:tag" content="xăm hình ở đà nẵng" />
                <meta property="article:tag" content="xăm hình tại đà nẵng" />
                <meta property="article:tag" content="xem hình xăm ở đà nẵng" />
                <meta property="article:published_time" content="2022-11-30T09:56:40+00:00" />
                <meta property="article:modified_time" content="2022-10-12T09:04:59+00:00" />
                <meta property="og:image:secure_url" content="https://i.imgur.com/YnXT3od.png" />
                <meta property="og:image:width" content="960" />
                <meta property="og:image:height" content="768" />
                
          </Head>  
        <Header option={props.header} />
        {props.children}
        
        <Toaster/>
          {(() => {
          if (FooterLayout == "fixed") {
            return (
              <FixedFooter/>
            )
          } else if (FooterLayout == 'project') {
            return (
              <ProjectFooter/>
            )
          } else {
            return (
            <Footer/>
            )
          }
        })()}

        </div>
    )
}

export default Layout