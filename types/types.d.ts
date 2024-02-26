/* Fetched Product Object | ProductItem Interafce [Single Product] */

interface ProductItem {
    id: number
    name: string
    price: number
    discountPrice?: number
    brand: string
    description: string
    notes?: string
    inStock?: boolean
    images?: {}
    mainImage: string
}

/* Added to the Cart Product Object */

interface CartProductItem {
    id: number
    name: string
    cartUiPrice: number
    cartUiDiscountPrice?: number
    price: number
    quantity: number
    cartUiImage: string
}




export { ProductItem, CartProductItem }