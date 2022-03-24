// import Image from "next/image"
// import { TitleUnderline } from "../public/icons"
import styles from "./AboutUs.module.scss"
// import aboutUs from "../public/AboutUs-min.jpg"

const AboutUs = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.wrapper}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>ABOUT US</h3>
          {/* <TitleUnderline
            color={"white"}
            width={"160px"}
            height={"22px"}
            firstViewBox={"40"}
            thirdViewBox={"165"}
          /> */}
        </div>
        <figure className={styles.contentContainer}>
          <div className={styles.imgContainer}>
            <img
              src="https://swoop-landing.s3.us-east-2.amazonaws.com/about-us-image.webp"
              alt="aboutUs"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className={styles.textContainer}>
            <figcaption>
              At Swoop Elite Services our employees and chauffeurs understand
              the importance of delivering exemplary service throughout every
              ride. Whether your destination is twenty minutes or two hours
              away, Swoop Elite Services will assure you are in control, on
              time, and enjoying your journey. Enlist our experts for your next
              corporate or leisure travel and we guarantee you will never need
              another transportation company again.
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  )
}

export default AboutUs
