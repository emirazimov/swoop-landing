import Head from "next/head"
// import Image from "next/image"
// import Fleet from "../components/Fleet/Fleet"
import Header from "../components/Header/Header"
import OurServices from "../components/OurServices/OurServices"
import styles from "../styles/Home.module.css"
import dynamic from "next/dynamic"
import AboutUs from "../components/AboutUs/AboutUs"
import Contacts from "../components/Contacts/Contacts"
import Footer from "../components/Footer/Footer"
import MainContainer from "../components/MainContainer"
import { Element, Events } from "react-scroll"
import { useEffect } from "react"

const Fleet = dynamic(() => import("../components/Fleet/Fleet"), {
  ssr: false,
})

// const scrollToSectionOurServices = () => {
//   scroller.scrollTo("OurServices", {
//     duration: 800,
//     delay: 0,
//     smooth: "easeInOutQuart",
//   })
// }
// const scrollToSectionFleet = () => {
//   scroller.scrollTo("Fleet", {
//     duration: 800,
//     delay: 0,
//     smooth: "easeInOutQuart",
//   })
// }
// const scrollToSectionAboutUs = () => {
//   scroller.scrollTo("AboutUs", {
//     duration: 800,
//     delay: 0,
//     smooth: "easeInOutQuart",
//   })
// }
// const scrollToSectionContacts = () => {
//   scroller.scrollTo("Contacts", {
//     duration: 800,
//     delay: 0,
//     smooth: "easeInOutQuart",
//   })
// }

export default function Home() {
  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments)
    })

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments)
    })
  }, [])
  return (
    <MainContainer>
      <Header />
      <main>
        <Element name="OurServices" className="element">
          <OurServices />
        </Element>
        <Element name="Fleet" className="element">
          <Fleet />
        </Element>
        <Element name="AboutUs" className="element">
          <AboutUs />
        </Element>
        <Element name="Contacts" className="element">
          <Contacts />
        </Element>
      </main>
      <Footer />
    </MainContainer>
    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{' '}
    //       <code className={styles.code}>pages/index.js</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h2>Documentation &rarr;</h2>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h2>Learn &rarr;</h2>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/canary/examples"
    //         className={styles.card}
    //       >
    //         <h2>Examples &rarr;</h2>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //       >
    //         <h2>Deploy &rarr;</h2>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>
  )
}
