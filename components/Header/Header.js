// import Image from "next/image"
import { CheckmarkIcon, CloseIcon } from "../../public/icons"
// import menuIcon from "../public/menuIcon.png"
import styles from "./Header.module.scss"
import Drawer from "@mui/material/Drawer"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import { AppBar } from "@material-ui/core"

import { useMediaQuery } from "@material-ui/core"
import { useState } from "react"
import { Divider } from "@mui/material"
import { Link } from "react-scroll"

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "absolute",
    top: "40%",
    right: "7%",
  },
  // appBar: {
  //   transition: theme.transitions.create(['margin', 'width'], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  // },
  // appBarShift: {
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   marginLeft: drawerWidth,
  //   transition: theme.transitions.create(['margin', 'width'], {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
  menuButton: {
    padding: 0,
    // background: "white",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      backgroundColor: "black",
      // height: "100%",
      // width: "60%",
      // left: "0",
    },
    "& .jss5": {
      left: "initial",
      width: "60%",
      bottom: "initial",
      height: "100%",
      position: "none",
      background: "black",
    },
    "& .jss6": {
      left: "initial",
      width: "initial",
      bottom: "initial",
      height: "initial",
      position: "initial",
      background: "initial",
    },
    // "& .MuiDrawer-paperAnchorRight": {
    //   backgroundColor: "black",
    //   height: "100%",
    //   width: "60%",
    //   left: "0",
    // },
    // "& .jss6": {
    //   left: "55%",
    //   width: 0,
    //   bottom: 0,
    //   height: 0,
    //   top: 0,
    //   right: 0,
    // },
    // "& .MuiIconButton-root": {},
    // "& .Header_ulMenuMobile__2Mx8g": {
    //   paddingTop: "40px",
    // },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "black",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    paddingTop: "15px",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  appBar: {
    width: "100%",
    position: "sticky",
    filter: "opacity(4)",
    backdropFilter: "blur(6px)",
    "&::-webkit-filter": "opacity(4)",
    "&::-webkit-backdrop-filter": "blur(6px)",
    backgroundColor: "rgba(255, 255, 255, 0.59)",
    "&.MuiPaper-elevation4": {
      boxShadow: "none",
    },
  },
}))

const Header = ({
  scrollToSectionOurServices,
  scrollToSectionFleet,
  scrollToSectionAboutUs,
  scrollToSectionContacts,
}) => {
  const classes = useStyles()
  const isMobile = useMediaQuery("(max-width:855px)")
  const isSmallestMobile = useMediaQuery("(max-width:562px)")

  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <header className={styles.mainContainer}>
      <div className={styles.mainContainerForCar}>
        <div className={styles.mainContainerForMapBackground}>
          <div className={styles.headerContainer}>
            <div className={styles.menu}>
              {isMobile ? (
                <div>
                  <nav className={classes.root}>
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      onClick={handleDrawerOpen}
                      edge="start"
                      className={classes.menuButton}
                    >
                      <MenuIcon
                        style={{ color: "white", transform: "scale(1.4)" }}
                      />
                    </IconButton>

                    <Drawer
                      className={classes.drawer}
                      anchor="right"
                      open={open}
                      classes={{
                        paper: classes.drawerPaper,
                      }}
                    >
                      <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                          {theme.direction === "ltr" ? (
                            <CloseIcon />
                          ) : (
                            <CloseIcon />
                          )}
                        </IconButton>
                      </div>
                      <ul className={styles.ulMenuMobile}>
                        <li onClick={scrollToSectionOurServices}>
                          Our Services
                        </li>
                        <li onClick={scrollToSectionFleet}>Fleet</li>
                        <li>
                          <a
                            href="https://checkout.bookinglane.com/swoop-elite"
                            style={{ textDecoration: "none" }}
                          >
                            Get a Quote
                          </a>
                        </li>
                        <li onClick={scrollToSectionAboutUs}>About Us</li>
                        <li onClick={scrollToSectionContacts}>Contacts</li>
                      </ul>
                    </Drawer>
                  </nav>
                  <img
                    src="https://swoop-landing.s3.us-east-2.amazonaws.com/header-logo.svg"
                    style={{
                      width: isMobile ? "170px" : "300px",
                      height: isMobile ? "60px" : "123px",
                    }}
                    alt="headerLogo"
                  />
                </div>
              ) : (
                <nav className={styles.ulMenu}>
                  {/* <ul className={styles.leftBlock}> */}
                  <ul className={styles.menuListContainer}>
                    <li onClick={scrollToSectionOurServices}>
                      <Link
                        activeClass="active"
                        className="OurServices"
                        to="OurServices"
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        <span>Our Services</span>
                      </Link>
                    </li>
                    <li onClick={scrollToSectionFleet}>
                      <Link
                        activeClass="active"
                        className="Fleet"
                        to="Fleet"
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        <span>Fleet</span>
                      </Link>
                    </li>
                    <li onClick={scrollToSectionFleet}>
                      <span>
                        <a
                          href="https://checkout.bookinglane.com/swoop-elite"
                          style={{ textDecoration: "none" }}
                        >
                          Get a Quote
                        </a>
                      </span>
                    </li>
                    {/* </ul> */}
                    {/* <li className={styles.imgContainer}>
                    <img
                      src="https://swoop-landing.s3.us-east-2.amazonaws.com/header-logo.svg"
                      // style={{ width: "300px", height: "123px" }}
                    />
                  </li> */}
                    {/* <ul className={styles.rightBlock}> */}
                    <li onClick={scrollToSectionAboutUs}>
                      <Link
                        activeClass="active"
                        className="AboutUs"
                        to="AboutUs"
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        <span>About Us</span>
                      </Link>
                    </li>
                    <li onClick={scrollToSectionContacts}>
                      <Link
                        activeClass="active"
                        className="Contacts"
                        to="Contacts"
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        <span>Contacts</span>
                      </Link>
                    </li>
                  </ul>
                  {/* </ul> */}
                </nav>
              )}
            </div>
            <div className={styles.headerTextContainer}>
              <div className={styles.headerText}>
                <img
                  src="https://swoop-landing.s3.us-east-2.amazonaws.com/header-logo.svg"
                  // style={{
                  //   width: isMobile ? "320px" : "500px",
                  //   height: isMobile ? "190px" : "240px",
                  // }}
                  alt="headerLogo"
                ></img>
                <span>
                  LUXURY LIMOUSINES.
                  <br /> PROFESSIONAL CHAUFFEURS.
                  <br /> PREMIUM SERVICE.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
