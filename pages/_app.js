import Script from 'next/script'
import Image from 'next/image'
import Head from 'next/head'

//import '../styles/globals.css'
import '../styles/App.css'

import "nextjs-components/dist/styles/globals.css";


function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <>
    <Head>
        <meta name="msapplication-TileColor" content="#999999"></meta>
        <meta name="theme-color" content="#999999"></meta>
    </Head>
    <Component {...pageProps} />
    <Script src="js/main.bundle.js" strategy="beforeInteractive"/>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FDRP593V6T" strategy="afterInteractive"/>
    <Script
      strategy="afterInteractive"
      id={1}
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-FDRP593V6T');
      `,
      }}/>

    </>
  )
}

export default MyApp

