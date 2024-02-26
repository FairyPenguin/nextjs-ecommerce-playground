"use client";
import Image from "next/image";
import styles from "./HomeSlider.module.css";
import { SetStateAction, useState } from "react";
import RightArrow from "../SvgIcons/RightArrow";
import LeftArrow from "../SvgIcons/LeftArrow";
import DashIconSvg from "../SvgIcons/DashIconSvg";

// Slides & Each Slide types
type Slide = {
  url: string;
  alt: string;
  index?: number
};

interface Props {
  slides: Slide[];
}

export default function HomeSlider({ slides }: Props) {
  const [slideIndex, setSlideIndex] = useState(0);

  function prevSlide() {
    const firstSlide = slideIndex === 0;
    const newSlide = firstSlide ? slides.length - 1 : slideIndex - 1;
    setSlideIndex(newSlide);
  }

  function nextSlide() {
    const lastSlide = slideIndex === slides.length - 1;
    const newSlide = lastSlide ? 0 : slideIndex + 1;
    setSlideIndex(newSlide);
  }

  function goToSlide(index: SetStateAction<number>) {
    setSlideIndex(index)
  }

  return (
    <div className={styles["slider__container"]}>
      <div className={styles["slide__wrapper"]}>
        <div>
          <LeftArrow
            onClick={prevSlide}
            className={`${styles["arrow__icon"]} ${styles["arrow__left"]} `}
          />
        </div>
        <div>
          <RightArrow
            onClick={nextSlide}
            className={`${styles["arrow__icon"]} ${styles["arrow__right"]}`}
          />
        </div>
        <div
          style={{ backgroundImage: `url(${slides[slideIndex].url})` }}
          className={styles["slide__image"]}
          key={"1"}
        ></div>

        <div className={styles["dots_wrapper"]}>
          {slides.map((_slide, index) => {
            return <div
              onClick={() => goToSlide(index)} key={index}>
              <DashIconSvg
                // fill={index === slideIndex ? "#774dd3" : ""}
                activecolor={index === slideIndex ? "#774dd3" : "#323232"}
                width={28}
                height={28}
                className={`${styles
                ["dot"]}`}
              />
            </div>;
          })}
        </div>
      </div>
    </div>
  );
}
