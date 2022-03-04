import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  InstagramIconForContacts,
  LinkedinIcon,
  MobilePhoneIcon,
  TitleUnderline,
  TwitterIcon,
} from "../../public/icons"
import styles from "./Contacts.module.scss"

const Contacts = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.wrapper}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>CONTACTS</h3>
          {/* <TitleUnderline
            color={"white"}
            width={"170px"}
            height={"22px"}
            firstViewBox={"40"}
            thirdViewBox={"165"}
          /> */}
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.mobilePhone}>
            <MobilePhoneIcon />
            <span>(415) 535-3501</span>
          </div>
          <div className={styles.email}>
            <EmailIcon />
            <span>swoopelite@gmail.com</span>
          </div>
          {/* <div className={styles.socialNetworks}>
            
            <div className={styles.iconsContainer}>
              <a
                href=""
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <FacebookIcon />
              </a>
              <a
                href=""
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <TwitterIcon />
              </a>
              <a
                href=""
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <InstagramIcon />
              </a>
              <a
                href=""
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <LinkedinIcon />
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Contacts
