"use client";
import { useState } from "react";
import styles from "./Slider.module.css";
//Arrows

import LeftArrow from "./ArrowsSvg/LeftArrow";
import RightArrow from "./ArrowsSvg/RightArrow";

function Slider() {
  const [currentSlide, setcurrentSlide] = useState(0);

  function prevSlide() {
    setcurrentSlide(
      currentSlide === 0
        ? 1
        : currentSlide === images.length - 1
        ? 0
        : (prevState) => prevState + 1
    );
  }

  function nextSlide() {
    setcurrentSlide(currentSlide === 3 ? 0 : (prevState) => prevState + 1);
  }

  const images = [
    "https://i.postimg.cc/yx265Gky/s1.jpg",
    "https://i.postimg.cc/yYS897bQ/s2.jpg",
    "https://i.postimg.cc/x1DT3Wr0/s3.jpg",
    "https://i.postimg.cc/RCY0NWXJ/s4.jpg",
  ];

  const image1 = images[0];

  return (
    <div className={styles.slider}>
      <div
        className={styles["slider-container"]}
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <div className={styles.slide_container}>
          <a href="#">
            <img className={styles.slide} src={images[0]} alt="slider" />
          </a>
        </div>
        <div className={styles.slide_container}>
          <a href="#">
            <img className={styles.slide} src={images[1]} alt="slider" />
          </a>
        </div>
        <div className={styles.slide_container}>
          <a href="#">
            <img className={styles.slide} src={images[2]} alt="slider" />
          </a>
        </div>
        <div className={styles.slide_container}>
          <a href="#">
            <img className={styles.slide} src={images[3]} alt="slider" />
          </a>
        </div>
      </div>

      <div className={styles["arrow-icons"]}>
        <div onClick={prevSlide} className={styles["right-arrow"]}>
          <LeftArrow />
        </div>
        <div onClick={nextSlide} className={styles["left-arrow"]}>
          <RightArrow />
        </div>
      </div>
    </div>
  );
}

export default Slider;
