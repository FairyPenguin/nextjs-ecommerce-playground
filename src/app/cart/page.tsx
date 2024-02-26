"use client"
// imports
import Image from "next/image";
import styles from "./ShoppingCart.module.css";
import ProductImage from "/images/shopping-cart-page-01-product-01.jpg";
// import ProductImage2 from "images/shopping-cart-page-01-product-02.jpg";
import StockBadge from "../../components/StockBadge/StockBadge";
import RemoveIconSvg from "../../components/SvgIcons/RemoveIconSvg";
import MainLayout from "@/components/UiComponents/MainLayout/MainLayout";
import Button from "@/components/Button/Button";
import ButtonWithLink from "@/components/ButtonWithLink/ButtonWithLink";
import { useAppSelector } from "@/redux/hooks";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from "react";
// import AddToCartButton from "../../components/ButtonWithIcon/ButtonWithIcon";
import Pros from "../../Data/PresistProducts.json"

export default function ShoppingCart() {

  const cartProducts = useAppSelector(state => state.cart.products)

  console.log(cartProducts);

  console.log(Pros);


  return (
    <MainLayout>
      <section className={styles["shopping__cart__container"]}>
        {/* Products List */}

        <ul className={styles["products__list"]}>

          {/* Single Product */}

          {
            Pros.map((product, index) => {
              return (
                <li key={index}
                  className={styles["product__card__preview"]}>
                  {/* Product  Image */}

                  <div className={styles["product__card__preview__img"]}>
                    {/* Image */}
                    <Image
                      src="/images/shopping-cart-page-01-product-01.jpg"
                      width={196}
                      height={196}
                      alt="altk"
                    // sizes="100vw"
                    // style={{
                    //   width: "100%",
                    //   height: "auto",
                    // }}
                    />
                  </div>
                  {/* Product  details */}

                  <div className={styles["proudct__card__preview__details"]}>
                    <div className={styles["product__info"]}>
                      <h3 className={styles["product__name"]}>
                        <a href="#">{product.name}</a>
                      </h3>
                      <div className={styles["product__selected__variants"]}>
                        <span>GoldenYellow</span>
                        <span>128 GB</span>
                        <span>5G</span>
                        <span>Middle East</span>
                      </div>
                      <span className={styles["product__price"]}>EGP 200.000</span>
                    </div>
                    <div className={styles["product__stock__avilability"]}>
                      <StockBadge stock={true} />

                      {/* Remove Button */}
                      <Button
                        text={"Remove"}
                        textUnderline={true}
                        disabled={false}
                        theme={"button__prurple__nobackground"}
                        size={"button__small"}
                        variant={"button__text"}
                      >
                        <RemoveIconSvg

                          fill="#774dd3" />
                      </Button>
                      {/* Remove Button */}

                      {/* <button className={`${styles["remove__btn"]} button`}>
                      <RemoveIconSvg fill="#774dd3" />
                      <p>Remove</p>
                    </button> */}
                    </div>
                  </div>
                </li>
              )


            })
          }

          {/* Single Product */}



          <li className={styles["product__card__preview"]}>
            {/* Product  Image */}

            <div className={styles["product__card__preview__img"]}>
              {/* Image */}
              <Image
                src="/images/shopping-cart-page-01-product-02.jpg"
                width={196}
                height={196}
                alt="altk"
              // sizes="100vw"
              // style={{
              //   width: "100%",
              //   height: "auto",
              // }}
              />
            </div>
            {/* Product  details */}

            <div className={styles["proudct__card__preview__details"]}>
              <div className={styles["product__info"]}>
                <h3 className={styles["product__name"]}>
                  iPhone 14 Pro Max 256GB Deep Purple 5G With FaceTime - Middle
                  East Version
                </h3>
                <div className={styles["product__selected__variants"]}>
                  <span>DarkRed</span>
                  <span>128GB</span>
                  <span>MiddleEast Version</span>
                </div>
                <span className={styles["product__price"]}>EGP 178.649</span>
              </div>
              <div className={styles["product__stock__avilability"]}>
                <StockBadge stock={false} />

                <Button
                  text={"Remove"}
                  textUnderline={true}
                  disabled={false}
                  theme={"button__prurple__nobackground"}
                  size={"button__small"}
                  variant={"button__text"}
                >
                  <RemoveIconSvg fill="#774dd3" />
                </Button>
              </div>
            </div>
          </li>
        </ul>
        <section className={styles["order__summary"]}>
          <h2 className={styles["order__summary__title"]}>Order summary</h2>
          <dl className={styles["order__summary__list"]}>
            <div
              className={`${styles["subtotal"]}  ${styles["summary__item"]}`}
            >
              <dt>Subtotal</dt>
              <dt>EGP 200.354</dt>
            </div>
          </dl>
          <div className={styles["checkout__btn"]}>
            {/* Button Component with 
            Primary-Medium-Purple Varints */}
            <Button
              link={false}
              text={"Checkout"}
              disabled={false}
              theme="button__purple"
              size="button__medium"
              variant="button__primary"
            ></Button>
            {/* Button Component with 
            Primary-Medium-Purple Varints */}

          </div>
        </section>
      </section>
    </MainLayout>
  );
}
