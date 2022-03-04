// import { Description } from "@material-ui/icons"
import Head from "next/head"
import Script from "next/script"
const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <title>Swoop Elite</title>
        <meta charSet="utf-8" />
        <link
          rel="icon"
          href="https://swoop-landing.s3.us-east-2.amazonaws.com/title-background.svg "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content="airport transfers,wine tours,Point to Point Transportation,City Tours,Weddings,Hourly Chauffer Services,dlxlimousine@gmail.com,dlxlimousine,Deluxe limo, transportation company, Dispatch Software , limo software, Limo Dispatch System,  Flight Tracker, Driver Tracker, Limo Dispatching System, Livery Software, Limo Service Scheduling Software, Best Limo Software, online reservations, friendly limo software"
          //   keywords={
          //     "booking,book,bookinglane,trasnport,transportation,book transport,booking transport,crm mobile, moile crm" +
          //     keywords
          //   }
        ></meta>
        <link rel="canonical" href="https://swoopelite.com/" />
        <link
          rel="apple-touch-icon"
          href="https://swoop-landing.s3.us-east-2.amazonaws.com/header-logo.svg"
        />
        <meta
          name="description"
          content="LUXURY LIMOUSINES, PROFESSIONAL CHAUFFEURS, PREMIUM SERVICE."
        ></meta>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initialscale=1.0, maximum-scale=1.0, user-scalable=no"
        />

        <link
          rel="stylesheet"
          href="https://bookinglane-widgets.s3.us-east-2.amazonaws.com/Global-widget-files/widget.css"
        />

        <meta name="robots" content="all"></meta>
        <meta name="robots" content="max-snippet:-1"></meta>
        <meta name="robots" content="max-image-preview:large"></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta property="og:title" content="Swoop Elite" />
        <meta property="og:url" content="https://swoopelite.com/"></meta>
        <meta property="og:type" content="article"></meta>
        <meta
          property="og:description"
          content="LUXURY LIMOUSINES, PROFESSIONAL CHAUFFEURS, PREMIUM SERVICE."
        ></meta>
        <meta
          property="og:image"
          content="https://swoop-landing.s3.us-east-2.amazonaws.com/header-logo.svg"
        ></meta>
        {/* <meta property="fb:app_id" content="APPID" /> */}
        <meta property="twitter:title" content="Swoop Elite"></meta>
        <meta
          property="twitter:description"
          content="LUXURY LIMOUSINES, PROFESSIONAL CHAUFFEURS, PREMIUM SERVICE."
        ></meta>
        <meta
          property="twitter:image"
          content="https://swoop-landing.s3.us-east-2.amazonaws.com/header-logo.svg"
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="theme-color" content="#000000" />
        {/* <meta http-equiv="X-UA-Compatible" content="ie=edge" /> */}
        <meta property="twitter:card" content="summary"></meta>

        {/* <script
          src="https://apis.google.com/js/api.js"
          type="text/javascript"
        ></script> */}

        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-212872613-1"
        ></script> */}
        {/* <script>
          {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());

         gtag('config', 'UA-212872613-1');`}
        </script> */}
        {/* <script
          src="https://bookinglane-widgets.s3.us-east-2.amazonaws.com/option1-widget-files/swoop-elite.js"
          type="text/javascript"
        ></script> */}
        {/* <script src="https://bookinglane-widgets.s3.us-east-2.amazonaws.com/Global-widget-files/widget.js"></script> */}
      </Head>
      <div>{children}</div>
      <div id="widget-by-bookinglane"></div>
      <Script
        src="https://bookinglane-widgets.s3.us-east-2.amazonaws.com/option1-widget-files/swoop-elite.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://bookinglane-widgets.s3.us-east-2.amazonaws.com/Global-widget-files/widget.js"
        strategy="lazyOnload"
      />
      {/* <Script
        onLoad={() => {
          // let styleForJss3 = `
          //   display: block;
          // `
          // document.getElementsByClassName("jss3").style = styleForJss3
          // document.body.querySelector(".jss3").style.display = "block"
          // console.log(document?.getElementsByClassName("jss4"))
          // console.log("hello its me")
          // document.body.querySelector(".jss5").style.left = "none"
          // document.body.querySelector(".jss5").style.width = "initial"
          // document.body.querySelector(".jss5").style.bottom = "initial"
          // document.body.querySelector(".jss5").style.height = "initial"
          // document.body.querySelector(".jss5").style.position = "initial"
          // document.body.querySelector(".jss5").style.background = "initial"
        }}
      ></Script> */}
      {/* <Script
        src="https://apis.google.com/js/api.js"
        type="text/javascript"
      ></Script>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-N6ZS1BMP1J"
      ></Script>
      <Script
        onLoad={() => {
          window.dataLayer = window.dataLayer || []
          function gtag() {
            " "
          }
          {
            dataLayer.push(arguments)
          }
          gtag("js", new Date())
          gtag("config", "G-N6ZS1BMP1J")
        }}
      ></Script> */}
      {/* <script src="https://bookinglane.com/widgets/142/widget.js"></script> */}
    </>
  )
}

export default MainContainer
