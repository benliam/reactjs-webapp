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
                <meta property="og:title" content="BenZ.Tattoo Design - Tattoo  Piercing studio Da Nang" ></meta>
                <meta property="og:description" content="<%= htmlWebpackPlugin.options.meta.description %>"></meta>
                <meta property="og:url" content="http://benztattoo.ink/"></meta>
                <meta property="og:site_name" content="BENZTATTOO.ink" ></meta>
                <meta property="og:image" content="https://i.imgur.com/YnXT3od.png" />
                <meta property="og:image:secure_url" content="https://i.imgur.com/YnXT3od.png" ></meta>
                <meta name="twitter:card" content="summary"></meta>
                <meta name="twitter:title" content="BenZ.Tattoo Design - Tattoo  Piercing studio Da Nang"></meta>
                <meta name="twitter:image" content="https://i.imgur.com/YnXT3od.png" ></meta>
                
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