"use client"
import Image from 'next/image'
import styles from './CartFlyout.module.css'
import ProductImage from '../../../../public/images/shopping-cart-page-01-product-01.jpg'
import CloseIconSvg from '@/components/SvgIcons/CloseIconSvg'
import RemoveIconSvg from '@/components/SvgIcons/RemoveIconSvg'
import Button from '@/components/Button/Button'
import ButtonWithLink from '@/components/ButtonWithLink/ButtonWithLink'
import DeleteIconSvg from '@/components/SvgIcons/DeleteIconSvg'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { closeCartFlyout, openCartFlyout } from '@/redux/CartFlyoutSlice'
import { deleteProduct } from '@/redux/cartSlice'
import { resetCart } from '@/redux/cartSlice'
import CartProductItemCard from './CartProductItemCard/CartProductItemCard'



interface Props {
  cartState: boolean
  setCartState: React.Dispatch<React.SetStateAction<boolean>>
}

function CartFlyout({ cartState, setCartState }: Props) {

  const dispatch = useAppDispatch()
  // Open & Close
  const isOpen = useAppSelector(state => state.cartFlyout.isOpen)
  const cartProducts = useAppSelector(state => state.cart.products)
  const totalPrice = useAppSelector(state => state.cart.totalCartPrice)
  const totalItems = useAppSelector(state => state.cart.totalCartItems)





  function handleCloseCartButton() {
    // setCartState(false)
    dispatch(closeCartFlyout())

  }


  // emptyCart
  function emptyCart() {
    dispatch(resetCart())
  }

  // const singleProduct = {
  //   name: "Espresso Gold Instant Coffee",
  //   price: "EGP 185",
  //   url: "/product",
  //   imageUrl: { ProductImage }
  // }


  return (
    <>
      {isOpen ?
        < aside className={styles['cart__container']}>
          <div className={styles["cart__header"]}>
            <h3>Shopping Cart</h3>
            <button
              onClick={handleCloseCartButton}
              className={styles["close__button"]}>
              <CloseIconSvg width={34} height={34} />
            </button>
          </div>
          <ul className={styles['cart__products__list']}>

            {/* Single product */}
            {cartProducts.map((item, index) => {
              return (<>
                <CartProductItemCard key={index} cartProduct={item} />
              </>)
            })}
            {/* Single product */}

          </ul>
          <footer className={styles["footer"]}>
            <div className={styles["total__items__price"]}>
              <span className={styles["total__price"]}> <strong>Subtotal</strong>  EGP <strong>{totalPrice}</strong> </span>
              <span className={styles["total__items"]}> &#40;{totalItems} Items&#41;</span>
            </div>


            <div className={styles["buttons__container"]}>
              <div className={styles["buttons__wrapper"]}>
                <ButtonWithLink
                  text={"Checkout"}
                  disabled={false}
                  theme="button__purple"
                  size="button__small"
                  variant="button__primary"
                ></ButtonWithLink>

                <ButtonWithLink
                  text={"View Cart"}
                  disabled={false}
                  theme={"button__blue"}
                  variant="button__primary"
                  urlString='/cart'
                  size="button__small"

                >
                </ButtonWithLink>
              </div>

              <div className={styles["reset__button"]}>
                <Button
                  text={"Reset Cart"}
                  textUnderline={true}
                  disabled={false}
                  theme={"button__red__nobackground"}
                  variant="button__text"
                  urlString='/cart'
                  size="button__small"
                  onClick={emptyCart}
                >
                  <DeleteIconSvg fill="#1C274C" activecolor={''} />

                </Button>
              </div>


            </div>

          </footer>
        </aside >
        : null
      }

    </>
  )
}

export default CartFlyout
