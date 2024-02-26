import Image from "next/image"
import styles from "./CartProductItemCard.module.css"
import Button from "@/components/Button/Button"
import RemoveIconSvg from "@/components/SvgIcons/RemoveIconSvg"
import { CartProductItem } from "../../../../../types/types"
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { deleteProduct } from '@/redux/cartSlice'


interface CartProduct {
    cartProduct: CartProductItem
}

function CartProductItemCard({ cartProduct }: CartProduct) {


    const dispatch = useAppDispatch()

    // deleteSingleProduct
    function deleteSingleProduct(id: number) {
        dispatch(deleteProduct(id))
    }

    return (
        <li className={styles['cart__single__product']}>
            <div className={styles['image__wrapper']}>
                <Image
                    width={200} height={200}
                    src={cartProduct.cartUiImage} alt='altk' />
            </div>

            <div className={styles['info']}>
                <h3 className={styles['name']}>{cartProduct.name}</h3>
                <span>EGP {cartProduct.price}</span>
                {/* <div className={styles['name__price']}>

                </div> */}
                <div className={styles['qr']}>
                    <span>quantity: {cartProduct.quantity}</span>
                    <Button
                        text={"Remove"}
                        textUnderline={true}
                        disabled={false}
                        theme={"button__prurple__nobackground"}
                        size={"button__small"}
                        variant={"button__text"}
                        onClick={() => deleteSingleProduct(cartProduct.id)}
                    >
                        <RemoveIconSvg fill="#774dd3" />
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default CartProductItemCard