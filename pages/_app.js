import Script from 'next/script'
import Image from 'next/image'
import Head from 'next/head'

//import '../styles/globals.css'
import '../styles/App.css'


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
    </>
  )
}

export default MyApp

