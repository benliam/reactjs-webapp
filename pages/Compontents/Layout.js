//import layout needed libraries
import Head from 'next/head'

// Import layout partials
import Header from './partials/Header'
import Footer from './partials/Footer'
import FixedFooter from './partials/FixedFooter'
import ProjectFooter from './partials/ProjectFooter'



function Layout (props) {


    const FooterLayout = props.footer
  

    return(
        <div>
          <Head>
                <title>{!props.title ? `Benz.Tattoo Design` : props.title}</title>
                <meta name="viewport" content="user-scalable=no"></meta>
          </Head>  
        <Header option={props.header} />
        {props.children}
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