"use client";

import { useState } from "react";
import styles from "./ProductGallery.module.css";
import Image, { StaticImageData } from "next/image";

interface Props {
  imagesArray: StaticImageData[];
}

function ProductGallery({ imagesArray }: Props) {
  const [selectedImage, setSelectedImage] = useState(0);

  function selectedImageHandler(index: number) {
    setSelectedImage(index);
  }

  return (
    <div className={styles["product__images__container"]}>
      {/* Images-Grid  */}
      <div className={styles["images__group"]}>
        {imagesArray.map((image, index) => {
          return (
            <Image
              className={styles["images__group__single__image"]}
              key={index}
              src={image}
              alt="altk"
              sizes="100vw"
              style={{
                width: "100%",
                height: "140px",
              }}
              onClick={() => selectedImageHandler(index)}
            />
          );
        })}
      </div>
      <div className={styles["main__image__wrapper"]}>
        <Image
          className={styles["main__image"]}
          src={imagesArray[selectedImage]}
          alt="altk"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
}

export default ProductGallery;
