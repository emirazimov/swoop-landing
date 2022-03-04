import styles from "./Fleet.module.scss"
// import Image from "next/image"
// import sedan from "../public/sedan-min.png"
// import bus from "../public/bus-min.png"
// import suv from "../public/suv-min.png"
// import limousine from "../public/limousine-min.png"
import { useEffect, useState } from "react"
import Slider from "react-slick"
// import CarouselCustom from "./Carousel"
// import Carousel, { consts } from "react-elastic-carousel"
import dynamic from "next/dynamic"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { style } from "@mui/system"
// import { NextArrowIcon, PrevArrowIcon, TitleUnderline } from "../public/icons"

// const CarouselCustom = dynamic(() => import("./Carousel"), {
//   ssr: false,
// })

const images = [
  ["https://delux-limo.s3.us-east-2.amazonaws.com/sedan-min.webp"],
  ["https://delux-limo.s3.us-east-2.amazonaws.com/suv-min.webp"],
  ["https://delux-limo.s3.us-east-2.amazonaws.com/limousine-min.webp"],
  ["https://delux-limo.s3.us-east-2.amazonaws.com/bus-min.webp"],
]

const Fleet = () => {
  // const NextArrow = ({ onClick }) => {
  //   return (
  //     <div className="arrow next" onClick={onClick}>
  //       <NextArrowIcon />
  //     </div>
  //   )
  // }

  // const PrevArrow = ({ onClick }) => {
  //   return (
  //     <div className="arrow prev" onClick={onClick}>
  //       <PrevArrowIcon />
  //     </div>
  //   )
  // }

  const [imageIndex, setImageIndex] = useState(0)

  const title = (i) => {
    if (i == 0) {
      return (
        <span
          // style={{ fontWeight: "700", fontSize: "26px", cursor: "pointer" }}
          className={styles.reactSlickDotSelf}
        >
          SEDAN
        </span>
      )
    } else if (i == 1) {
      return (
        <span
          // style={{ fontWeight: "700", fontSize: "26px", cursor: "pointer" }}
          className={styles.reactSlickDotSelf}
        >
          SUV
        </span>
      )
    } else if (i == 2) {
      return (
        <span
          // style={{ fontWeight: "700", fontSize: "26px", cursor: "pointer" }}
          className={styles.reactSlickDotSelf}
        >
          LIMOUSINE
        </span>
      )
    } else if (i == 3) {
      return (
        <span
          // style={{ fontWeight: "700", fontSize: "26px", cursor: "pointer" }}
          className={styles.reactSlickDotSelf}
        >
          VANS/BUSES
        </span>
      )
    }
  }

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 781px)").matches
  )

  useEffect(() => {
    const handler = (e) => setMatches(e.matches)
    window.matchMedia("(min-width: 781px)").addListener(handler)
  }, [])

  const settings = {
    infinite: false,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    vertical: true,
    verticalSwiping: true,
    dots: true,
    arrows: false,
    dotsClass: styles.reactSlickDots,
    appendDots: (dots) => (
      <ul
        style={{
          position: "static",
          order: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: matches ? "center" : "flex-start",
        }}
      >
        {dots}
      </ul>
    ),
    customPaging: (i) => title(i),
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  }
  //   let slides = [

  //     <Image src={sedan} alt="1" />,
  //     <Image src={bus} alt="2" />,
  //     <Image src={suv} alt="3" />,
  //     <Image src={limousine} alt="4" />,
  //   ]

  // const myArrow = ({ type, onClick, isEdge }) => {
  //   const pointer = type === consts.PREV ? <PrevArrowIcon /> : <NextArrowIcon />
  //   return (
  //     <button
  //       onClick={onClick}
  //       disabled={isEdge}
  //       style={{
  //         height: "44px",
  //         border: "none",
  //         background: "transparent",
  //         marginTop: "100px",
  //       }}
  //     >
  //       {pointer}
  //     </button>
  //   )
  // }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.wrapper}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>FLEET</h3>
          {/* <TitleUnderline
            color={"black"}
            width={"94px"}
            height={"22px"}
            firstViewBox={"80"}
            thirdViewBox={"90"}
          /> */}
        </div>
        <div className={styles.carouselContainer}>
          {/* <CarouselCustom /> */}
          {/* {!matches ? ( */}
          <Slider
            {...settings}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: matches ? "column" : "row",
              alignItems: "center",
              // order: "2",
            }}
          >
            {images.map((img) => (
              // <div
              //   className={idx === imageIndex ? "slide activeSlide" : "slide"}
              // >
              //   <div className={styles.carouselItem}>
              //     <div className={styles.carouselItemImgContainer}>
              <>
                <div className={styles.imageBackground}></div>
                <img
                  src={img}
                  alt={img}
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    zIndex: "3",
                  }}
                />
              </>
              //     </div>
              //     <span
              //       className={
              //         idx === imageIndex ? "slide-text-hidden" : "slide-text"
              //       }
              //     >
              //       {img[1]}
              //     </span>
              //   </div>
              // </div>
            ))}
          </Slider>
          {/* ) : (
            <Carousel renderArrow={myArrow} pagination={false}>
              <div className={styles.carouselItemMobile}>
                <img
                  src="https://delux-limo.s3.us-east-2.amazonaws.com/sedan-min.webp"
                  alt="1"
                  style={{ width: "100%", height: "100%" }}
                />
                <span>SEDAN</span>
              </div>
              <div className={styles.carouselItemMobile}>
                <img
                  src="https://delux-limo.s3.us-east-2.amazonaws.com/bus-min.webp"
                  alt="2"
                  style={{ width: "100%", height: "100%" }}
                />
                <span>BUS</span>
              </div>
              <div className={styles.carouselItemMobile}>
                <img
                  src="https://delux-limo.s3.us-east-2.amazonaws.com/suv-min.webp"
                  alt="3"
                  style={{ width: "100%", height: "100%" }}
                />
                <span>SUV</span>
              </div>
              <div className={styles.carouselItemMobile}>
                <img
                  src="https://delux-limo.s3.us-east-2.amazonaws.com/limousine-min.webp"
                  alt="4"
                  style={{ width: "100%", height: "100%" }}
                />
                <span>LIMOUSINE</span>
              </div>
            </Carousel>
          )} */}
        </div>
      </div>
    </div>
  )
}

export default Fleet
