import styles from "./ProductsList.module.css";
import Image from "next/image";
// import ProductImage from "public/images/shopping-cart-page-01-product-01.jpg";
// import ProductImage2 from "public/images/shopping-cart-page-01-product-02.jpg";
// import ProductImage3 from "/public/images/shopping-cart-page-01-product-01.jpg";
// import ProductImage4 from "/public/images/category-page-02-image-card-06.jpg";
// import ProductImage5 from "/public/images/category-page-02-image-card-05.jpg";
// import ProductImage6 from "/public/images/category-page-02-image-card-01.jpg";

import Products from "../../Data/productsList.json";

interface Props {
  title: string;
}

function ProductsList({ title }: Props) {
  return (
    <section className={styles["category__products__list"]}>
      <h2 className={styles["section__title"]}>{title}</h2>
      {/* Products Grid */}

      <div className={styles["products__grid"]}>
        {/* Cards */}
        {Products.map((product) => {
          {
            return (
              <div className={styles["product__card"]} key={product.id}>
                <a href="/product" className={styles["product__link"]}>
                  <div className={styles["images__wrapper"]}>
                    <Image
                      className={` ${styles["product__image"]} ${styles["first__image"]}`}
                      src={"/images/shopping-cart-page-01-product-01.jpg"}
                      alt="product__image"
                      sizes="100vw"
                      width={1280}
                      height={1280}
                    // style={{
                    //   width: "100%",
                    //   height: "auto",
                    // }}
                    />
                    <Image
                      className={` ${styles["product__image"]} ${styles["second__image"]}`}
                      src={"/images/shopping-cart-page-01-product-02.jpg"}
                      alt="product__image"
                      width={1280}
                      height={1280}
                    // sizes="100vw"
                    // style={{
                    //   width: "100%",
                    //   height: "auto",
                    // }}
                    />
                  </div>
                  <div className={styles["product__info"]}>
                    <span className={styles["product__title"]}>
                      {/* HAVIT H2019U RGB Surround Sound Gaming Headset USB - Blue  */}
                      {product.productName}
                      {/* iPhone 14 Pro Max 256GB Deep Purple 5G With FaceTime -
                    Middle East Version */}
                    </span>

                    <span className={styles["product__price"]}>
                      EGP {product.productPrice}
                    </span>
                  </div>

                  {/* <span className={styles["discount__price"]}>EGP 399</span> */}
                </a>
              </div>
            );
          }
        })}

        {/* Cards */}
      </div>
    </section>
  );
}

export default ProductsList;
