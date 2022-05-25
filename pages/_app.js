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
    <div id="fb-root"></div>
        <div className="fb-customerchat"
          attribution='setup_tool'
          page_id="263952664181437">
      </div>
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

    <Script
      id={2}
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v9.0'
          });
        };

        (function(d, s, id) {
        //if(document.body.clientWidth<769) return;
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
      `,
      }}/>



    </>
  )
}

export default MyApp

