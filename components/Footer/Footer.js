import styles from "./Footer.module.scss"
// import menuIcon from "../public/menuIcon.png"
// import Image from "next/image"
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  PoweredByBookinglane,
  TwitterIcon,
} from "../../public/icons"
// import poweredByBookinglane from "../public/poweredByBookinglane.png"

const Footer = () => {
  return (
    <footer className={styles.mainContainer}>
      <hr className={styles.hrFooter}></hr>
      <div className={styles.wrapper}>
        <div className={styles.firstRow}>
          <img
            src="https://swoop-landing.s3.us-east-2.amazonaws.com/header-logo.svg"
            alt="footer"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className={styles.secondRow}>
          <span>Copyright © 2021. All rights reserved.</span>
        </div>
        {/* <div className={styles.socialNetworkIcons}>
          <div className={styles.bookinglaneIcon}>
            
            <a
              href="https://bookinglane.com/"
              style={{ color: "none", textDecoration: "none" }}
            >
              <PoweredByBookinglane />
            </a>
          </div>
          <div className={styles.iconsContainer}>
            <a
              href="https://www.facebook.com/bookinglane"
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <FacebookIcon />
            </a>
            <a
              href="https://twitter.com/bookinglane"
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <TwitterIcon />
            </a>
            <a
              href="https://www.instagram.com/bookinglane/"
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/bookinglane"
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <LinkedinIcon />
            </a>
          </div>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer
