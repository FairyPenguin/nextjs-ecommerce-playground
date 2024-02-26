"use client"
import styles from "./product.module.css";
//Components Imports
import MainLayout from "@/components/UiComponents/MainLayout/MainLayout";
import Spacer from "../../components/UiComponents/Spacer/Spacer";
import StockBadge from "../../components/StockBadge/StockBadge";
import ProductGallery from "./ProductPageComponents/ProductGallery/ProductGallery";
import ProductImg1 from "../../../public/images/pexels-junior-teixeira-2047905.jpg";
import ProductImg2 from "../../../public/images/pexels-ovan-62689.jpg";
import ProductImg3 from "../../../public/images/pexels-olena-bohovyk-3550482.jpg";
import AddToCartIcon from "@/components/SvgIcons/AddToCartIconSvg";
import ErrorCart from "@/components/SvgIcons/ErrorCartIconSvg";
import Button from "@/components/Button/Button";
import AddIconSvg from "@/components/SvgIcons/AddIconSvg";
import MinusIconSvg from "@/components/SvgIcons/MinusIconSvg";
import { useState } from "react";
import Variants from "@/components/Variants/Variants";
import { addProduct } from "@/redux/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { ProductItem, CartProductItem } from "../../../types/types";
import ProductsData from "@/Data/PresistProducts.json"
import { openCartFlyout } from "@/redux/CartFlyoutSlice";
import formatProduct from "../../../utilites/FormattedProduct";


const imagesArray = [ProductImg1, ProductImg2, ProductImg3, ProductImg1, ProductImg2, ProductImg3, ProductImg1, ProductImg2];

const stock = true;
// const stock = false
const stockAvilabilty = stock ? "In stock" : "Out of stock";

const initialProductState: ProductItem = {
  id: 0,
  name: "",
  price: 5,
  discountPrice: 0,
  brand: "",
  description: "",
  notes: "",
  inStock: true,
  images: {},
  mainImage: "",
}

export default function Product() {

  // States
  const [quantity, setQuantity] = useState(1)
  const [product, setProduct] = useState<ProductItem>(initialProductState)


  // add product from fetching to local product state  
  function passFetchedProduct(num: number) {
    setProduct(ProductsData[num])
    console.log(product)
  }

  // Redux Selectors
  const dispatch = useAppDispatch()

  function addToCart() {
    passFetchedProduct(0)
    dispatch(addProduct(formatProduct(product, quantity)))
    dispatch(openCartFlyout())
  }

  function addToCart2() {
    passFetchedProduct(1)
    dispatch(addProduct(formatProduct(product, quantity)))
    dispatch(openCartFlyout())
  }

  function addToCart3() {
    passFetchedProduct(2)
    dispatch(addProduct(formatProduct(product, quantity)))
    dispatch(openCartFlyout())
  }


  // quantity function increment and decrement button logic
  function handleQuantity(action: "increase" | "decrease"): void {

    if (action === "increase") {
      setQuantity((prev) => prev + 1)
    }

    if (action === "decrease") {

      if (quantity === 1) {
        setQuantity(1)
      } else {
        setQuantity((prev) => prev - 1)
      }
    }
  }

  return (
    <>
      <MainLayout>
        {/* Hero Section  */}
        <section className={styles["product__hero"]}>
          {/* Images  */}
          <ProductGallery imagesArray={imagesArray} />

          {/* Info (Price - AddtoCart - Name)  */}

          <div className={styles["product__info"]}>
            <span className={styles["brand__name"]}>Apple</span>
            <h1 className={styles["product__name"]}>
              iPhone 14 Pro Max 256GB Deep Purple 5G With FaceTime - Middle East
              Version
            </h1>
            <div className={styles["product__price"]}>
              <span className={styles["discount__price"]}>
                <span className={styles["currency"]}>EGP</span>
                130.330
              </span>
              <span className={styles["original__price"]}>
                <span className={styles["currency"]}>EGP</span>
                145.670
              </span>
              <span className={styles["saved__percantage"]}>Save 100%</span>
            </div>

            {/* Variants */}
            <Variants />
            {/* Variants */}

            {/* {productOne.name
            } */}

            {/* Stock Badge Component */}
            <StockBadge stock={stock} />
            {/* Stock Badge Component */}


            {/* {Quantity Input} */}

            <div className={styles["quantity"]}>

              <button
                onClick={() => handleQuantity("decrease")}
                type="button" className={styles["quantity__add__button"]}>
                <MinusIconSvg />
              </button>

              <span className={styles["quantity__input"]}>{quantity}</span>
              <button
                onClick={() => handleQuantity("increase")}
                type="button" className={styles["quantity__subtract__button"]}>
                <AddIconSvg />
              </button>
            </div>

            {/* {Quantity Input} */}


            {/* Add To Cart Button */}
            <Button
              link={false}
              text={stock ? "Add to cart" : "Out of stock"}
              disabled={stock ? false : true}
              theme={"button__blue"}
              variant={"button__primary"}
              size="button__medium"
              onClick={addToCart}
              type="submit"
            >
              {stock ? (
                <AddToCartIcon width={42} height={42} />
              ) : (
                <ErrorCart width={42} height={42} />
              )}
            </Button>

            <button type="button"
              onClick={addToCart2}

            >
              Add the number 2
            </button>

            <button type="button"
              onClick={addToCart3}

            >
              Add the number 3
            </button>
            {/* Add To Cart Button */}
          </div>
        </section>

        <section className={styles["product__description"]}>
          <article>
            <h3 className={styles["product__description__title"]}>
              Description
            </h3>
            <p className={styles["product__description__text"]}>
              There’s nothing I really wanted to do in life that I wasn’t able
              to get good at. That’s my skill. I’m not really specifically
              talented at anything except for the ability to learn. That’s what
              I do. That’s what I’m here for. Don’t be afraid to be wrong
              because you can’t learn anything from a compliment.
            </p>

            {/* Spacer5 */}
            <Spacer space={5} />
            {/* Spacer5 */}

            <h3 className={styles["product__details__title"]}>
              Details & Specifications
            </h3>
            <ul className={styles["product__details__list"]}>
              <li className={styles["product__details__list__item"]}>
                <span className={styles["key"]}>
                  Wireless communication technologies&#58;
                </span>
                <span className={styles["value"]}>Bluetooth</span>
              </li>
              <li className={styles["product__details__list__item"]}>
                <span className={styles["key"]}>Item model number&#58;</span>
                <span className={styles["value"]}>6936520820931 </span>
              </li>
              <li className={styles["product__details__list__item"]}>
                <span className={styles["key"]}>Package Dimensions&#58;</span>
                <span className={styles["value"]}>
                  15.1 x 9.2 x 4.2 cm; 29 Grams{" "}
                </span>
              </li>
              <li className={styles["product__details__list__item"]}>
                <span className={styles["key"]}>Product Weight&#58;</span>
                <span className={styles["value"]}>0.13 KG</span>
              </li>
              <li className={styles["product__details__list__item"]}>
                <span className={styles["key"]}>OS&#58;</span>
                <span className={styles["value"]}>IOS</span>
              </li>
              <li className={styles["product__details__list__item"]}>
                <span className={styles["key"]}>Whats in the box&#58;</span>
                <span className={styles["value"]}>no included components </span>
              </li>
            </ul>

            {/* Spacer5 */}
            <Spacer space={5} />
            {/* Spacer5 */}

            <h3 className={styles["product__additional__notes__title"]}>
              Additional Notes
            </h3>
            <p className={styles["product__additional__notes__text"]}>
              There’s nothing I really wanted to do in life that I wasn’t able
              to get good at. That’s my skill. I’m not really specifically
              talented at anything except for the ability to learn.
            </p>
          </article>
        </section>



      </MainLayout>
    </>
  );
}
function passFetchedProduct() {
  throw new Error("Function not implemented.");
}

