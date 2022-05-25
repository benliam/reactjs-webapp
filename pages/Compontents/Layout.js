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
                <meta property="fb:app_id"  content="569680180725353"></meta> 
                <meta property="og:type"   content="article"></meta> 
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