// type import
import { ProductItem, CartProductItem } from "../types/types"

function formatProduct(product: ProductItem, quantity: number): CartProductItem {
    // formattedPrice => check for the discountPrice if truthy
    // assign it as the price else return the price 

    const formattedPrice = product.discountPrice
        ? product.discountPrice : product.price

    return {
        id: product.id,
        name: product.name,
        cartUiPrice: product.price,
        cartUiDiscountPrice: product.discountPrice,
        price: formattedPrice,
        quantity: quantity,
        cartUiImage: product.mainImage
    }
}

export default formatProduct