// // import Image from "next/image"
// import { CheckmarkIcon, CloseIcon } from "../public/icons"
// // import menuIcon from "../public/menuIcon.png"
// import styles from "../styles/Header.module.scss"
// import Drawer from "@material-ui/core/Drawer"
// import { makeStyles, useTheme } from "@material-ui/core/styles"
// import IconButton from "@material-ui/core/IconButton"
// import MenuIcon from "@material-ui/icons/Menu"
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
// import ChevronRightIcon from "@material-ui/icons/ChevronRight"
// import { AppBar } from "@material-ui/core"

// import { useMediaQuery } from "@material-ui/core"
// import { useState } from "react"

// const drawerWidth = 240

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     position: "absolute",
//     right: "13px",
//   },
//   // appBar: {
//   //   transition: theme.transitions.create(['margin', 'width'], {
//   //     easing: theme.transitions.easing.sharp,
//   //     duration: theme.transitions.duration.leavingScreen,
//   //   }),
//   // },
//   // appBarShift: {
//   //   width: `calc(100% - ${drawerWidth}px)`,
//   //   marginLeft: drawerWidth,
//   //   transition: theme.transitions.create(['margin', 'width'], {
//   //     easing: theme.transitions.easing.easeOut,
//   //     duration: theme.transitions.duration.enteringScreen,
//   //   }),
//   // },
//   menuButton: {
//     padding: 0,
//   },
//   hide: {
//     display: "none",
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//     "& .MuiDrawer-paper": {
//       backgroundColor: "black",
//       // height: "100%",
//       // width: "60%",
//       // left: "0",
//     },
//     "& .jss5": {
//       left: "initial",
//       width: "60%",
//       bottom: "initial",
//       height: "100%",
//       position: "none",
//       background: "black",
//     },
//     "& .jss6": {
//       left: "initial",
//       width: "initial",
//       bottom: "initial",
//       height: "initial",
//       position: "initial",
//       background: "initial",
//     },
//     // "& .MuiDrawer-paperAnchorRight": {
//     //   backgroundColor: "black",
//     //   height: "100%",
//     //   width: "60%",
//     //   left: "0",
//     // },
//     // "& .jss6": {
//     //   left: "55%",
//     //   width: 0,
//     //   bottom: 0,
//     //   height: 0,
//     //   top: 0,
//     //   right: 0,
//     // },
//     // "& .MuiIconButton-root": {},
//     // "& .Header_ulMenuMobile__2Mx8g": {
//     //   paddingTop: "40px",
//     // },
//   },
//   drawerPaper: {
//     width: drawerWidth,
//     backgroundColor: "black",
//   },
//   drawerHeader: {
//     display: "flex",
//     alignItems: "center",
//     padding: theme.spacing(0, 1),
//     paddingTop: "15px",
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//     justifyContent: "flex-end",
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: -drawerWidth,
//   },
//   contentShift: {
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   },
//   appBar: {
//     width: "100%",
//     position: "sticky",
//     filter: "opacity(4)",
//     backdropFilter: "blur(6px)",
//     "&::-webkit-filter": "opacity(4)",
//     "&::-webkit-backdrop-filter": "blur(6px)",
//     backgroundColor: "rgba(255, 255, 255, 0.59)",
//     "&.MuiPaper-elevation4": {
//       boxShadow: "none",
//     },
//   },
// }))

// const Header = ({
//   scrollToSectionOurServices,
//   scrollToSectionFleet,
//   scrollToSectionAboutUs,
//   scrollToSectionContacts,
// }) => {
//   const classes = useStyles()
//   const isMobile = useMediaQuery("(max-width:700px)")

//   const theme = useTheme()
//   const [open, setOpen] = useState(false)

//   const handleDrawerOpen = () => {
//     setOpen(true)
//   }

//   const handleDrawerClose = () => {
//     setOpen(false)
//   }

//   return (
//     <div className={styles.mainContainer}>
//       <header className={styles.headerContainer}>
//         <div className={styles.menu}>
//           <div className={styles.imgContainer}>
//             <img
//               src="https://delux-limo.s3.us-east-2.amazonaws.com/menuIcon.png"
//               style={{ width: "100%", height: "100%" }}
//             />
//           </div>
//           {isMobile ? (
//             <div className={classes.root}>
//               <IconButton
//                 color="inherit"
//                 aria-label="open drawer"
//                 onClick={handleDrawerOpen}
//                 edge="start"
//                 className={classes.menuButton}
//               >
//                 <MenuIcon style={{ color: "white", transform: "scale(1.4)" }} />
//               </IconButton>

//               <Drawer
//                 className={classes.drawer}
//                 anchor="right"
//                 open={open}
//                 classes={{
//                   paper: classes.drawerPaper,
//                 }}
//               >
//                 <div className={classes.drawerHeader}>
//                   <IconButton onClick={handleDrawerClose}>
//                     {theme.direction === "ltr" ? <CloseIcon /> : <CloseIcon />}
//                   </IconButton>
//                 </div>
//                 <ul className={styles.ulMenuMobile}>
//                   <li onClick={scrollToSectionOurServices}>Our Services</li>
//                   <li onClick={scrollToSectionFleet}>Fleet</li>
//                   <li onClick={scrollToSectionAboutUs}>About Us</li>
//                   <li onClick={scrollToSectionContacts}>Contacts</li>
//                 </ul>
//               </Drawer>
//             </div>
//           ) : (
//             <ul className={styles.ulMenu}>
//               <li onClick={scrollToSectionOurServices}>
//                 <span>Our Services</span>
//               </li>
//               <li onClick={scrollToSectionFleet}>
//                 <span>Fleet</span>
//               </li>
//               <li onClick={scrollToSectionAboutUs}>
//                 <span>About Us</span>
//               </li>
//               <li onClick={scrollToSectionContacts}>
//                 <span>Contacts</span>
//               </li>
//             </ul>
//           )}
//         </div>
//         <div className={styles.headerTextContainer}>
//           <div className={styles.headerText}>
//             <span>
//               LUXURY LIMOUSINES, PROFESSIONAL CHAUFFEURS, PREMIUM SERVICE.
//             </span>
//           </div>
//           <div className={styles.headerCheckmarksContainer}>
//             <div className={styles.item1}>
//               <div className={styles.checkmarkIconContainer}>
//                 <CheckmarkIcon />
//               </div>
//               <span>Airport Transfers</span>
//             </div>
//             <div className={styles.item2}>
//               <div className={styles.checkmarkIconContainer}>
//                 <CheckmarkIcon />
//               </div>
//               <div>Wine Tours</div>
//             </div>
//             <div className={styles.item3}>
//               <div className={styles.checkmarkIconContainer}>
//                 <CheckmarkIcon />
//               </div>
//               <div>Point to Point Transportation</div>
//             </div>
//             <div className={styles.item4}>
//               <div className={styles.checkmarkIconContainer}>
//                 <CheckmarkIcon />
//               </div>
//               <div>City Tours</div>
//             </div>
//             <div className={styles.item5}>
//               <div className={styles.checkmarkIconContainer}>
//                 <CheckmarkIcon />
//               </div>
//               <div>Weddings</div>
//             </div>
//             <div className={styles.item6}>
//               <div className={styles.checkmarkIconContainer}>
//                 <CheckmarkIcon />
//               </div>
//               <div>Hourly Chauffer Services</div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </div>
//   )
// }

// export default Header
