import styles from "./OurServices.module.scss"
import { useMediaQuery } from "@material-ui/core"
import { useState } from "react"

const OurServices = ({
  scrollToSectionOurServices,
  scrollToSectionFleet,
  scrollToSectionAboutUs,
  scrollToSectionContacts,
}) => {
  //   const classes = useStyles()
  const isMobile = useMediaQuery("(max-width:700px)")

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>OUR SERVICES</h3>
        </div>
        <div className={styles.firstRowBlock}>
          {/* <div className={styles.rowContainer}>
            </div> */}
          <div className={styles.firstRowTitleContainer}>
            <h4 className={styles.firstRowTitle}>Airport Transfers</h4>
          </div>
          <div className={styles.firstImageBlockContainer}>
            <div className={styles.firstImageBlock}>
              <img
                src="https://swoop-landing.s3.us-east-2.amazonaws.com/ourservices-image1.webp"
                className={styles.firstImageSelf}
              ></img>
              <p className={styles.firstImageBlockText}>
                From the terminal to your front door, Swoop Elite gets you there
                on time and in style. Our drivers will usher you directly to or
                from any airport, in one of our first-class luxury cars or
                limousines.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.secondRowBlock}>
          <div className={styles.secondRowTitleContainer}>
            <h4 className={styles.secondRowTitle}>Hourly Chauffer Services</h4>
          </div>
          <div className={styles.secondImageBlockContainer}>
            <div className={styles.secondImageBlock}>
              <img
                src="https://swoop-landing.s3.us-east-2.amazonaws.com/ourservices-image2.webp"
                className={styles.secondImageSelf}
              ></img>
              <p className={styles.secondImageBlockText}>
                From the terminal to your front door, Swoop Elite gets you there
                on time and in style. Our drivers will usher you directly to or
                from any airport, in one of our first-class luxury cars or
                limousines.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.thirdRowBlock}>
          {/* <div className={styles.rowContainer}>
            </div> */}
          <div className={styles.thirdRowTitleContainer}>
            <h4 className={styles.thirdRowTitle}>
              Point to Point Transportation
            </h4>
          </div>
          <div className={styles.thirdImageBlockContainer}>
            <div className={styles.thirdImageBlock}>
              <img
                src="https://swoop-landing.s3.us-east-2.amazonaws.com/ourservices-image3.webp"
                className={styles.thirdImageSelf}
              ></img>
              <p className={styles.thirdImageBlockText}>
                {`If you need a ride but aren't excited about taking another ride
                service or driving yourself, then our point to point
                transportation service is for you. Choose one of our luxury
                vehicles and ride in style instead!`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
