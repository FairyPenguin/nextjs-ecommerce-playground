"use client"

import styles from "./Navigation.module.css"
import Logo from "../../../../public/images/X-Tech Logo SVG Final.svg"
import Image from "next/image"
import CartFlyout from "../CartFlyout/CartFlyout"
import { useState } from "react"
import CartButtonIconSvg from "@/components/SvgIcons/CartButtonIconSvg"
import UserIconSvg from "@/components/SvgIcons/UserIconSvg"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { openCartFlyout } from "@/redux/CartFlyoutSlice"


export default function Navigation() {

    const [cartState, setCartState] = useState(false)


    const quantity = useAppSelector(state => state.cart.totalCartItems)
    const dispatch = useAppDispatch()

    console.log(quantity);


    function handleCart() {
        // setCartState((prev) => !prev)
        dispatch(openCartFlyout())
    }

    const menuItems = [
        {
            title: "MenuItem_1",
            url: "#"
        },
        {
            title: "MenuItem_2",
            url: "#"
        },
        {
            title: "MenuItem_3",
            url: "#"
        },
        {
            title: "MenuItem_4",
            url: "#"
        }
    ]

    return (
        <>
            <header className={styles["header"]}>
                <nav className={styles["nav"]}>
                    <div className={styles["top__menu"]}>
                        <div>Language</div>
                        <div>User</div>
                    </div>
                    <div className={styles["navigation__menu"]}>
                        <div className={styles["right_wrapper"]}>

                            <div className={styles["logo"]}>
                                <a href="">
                                    {/* <Image className={styles["logo__image"]}
                                        width={200}
                                        height={200}
                                        src={Logo} alt=""
                                         /> */}
                                </a>
                            </div>
                            <ul className={styles["navigation__list"]}>
                                {menuItems.map((item, index) => {
                                    return (
                                        <li className={styles["navigation__list__item"]} key={index}>
                                            <a href={item.url}>{item.title}</a>
                                        </li>
                                    )
                                })
                                }                    </ul>

                        </div>

                        <div className={styles["items"]}>
                            <button
                                className={styles["user__icon__button"]}
                            >
                                <a className={styles["user__icon"]}
                                    href="/login">
                                    <span className={styles["user__icon__title"]}>Log In</span>

                                    <UserIconSvg
                                        fill="#1C274C"
                                        width={28} height={28}
                                    />
                                </a>


                            </button>

                            <button
                                className={styles["cart__icon__button"]}
                                onClick={handleCart}>
                                {quantity ?
                                    <span className={styles["badge"]}>{quantity}</span> : ""
                                }
                                <span className={styles["cart__icon__title"]}>Cart</span>
                                <CartButtonIconSvg className="cart__icon__svg" width={28} height={28} />
                            </button>
                        </div>
                    </div>
                </nav>
                <CartFlyout
                    setCartState={setCartState}
                    cartState={cartState}
                />
            </header>
        </>

    )
}
