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
        <div className={styles.title}>
          <h2 className={styles.titleSelf}>OUR SERVICES</h2>
        </div>
        <div className={styles.firstRowBlock}>
          {/* <div className={styles.rowContainer}>
            </div> */}
          <div className={styles.firstRowTitleContainer}>
            <h3 className={styles.firstRowTitle}>Airport Transfers</h3>
          </div>
          <div className={styles.firstImageBlockContainer}>
            <div className={styles.firstImageBlock}>
              <img
                src="https://swoop-landing.s3.us-east-2.amazonaws.com/ourservices-image1.svg"
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
            <h3 className={styles.secondRowTitle}>Hourly Chauffer Services</h3>
          </div>
          <div className={styles.secondImageBlockContainer}>
            <div className={styles.secondImageBlock}>
              <img
                src="https://swoop-landing.s3.us-east-2.amazonaws.com/ourservices-image2.svg"
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
      </div>
    </div>
  )
}

export default OurServices
