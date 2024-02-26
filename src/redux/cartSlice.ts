import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ProductItem, CartProductItem } from "../../types/types";
import { stat } from "fs";

interface CartState {
    products: CartProductItem[];
    totalCartItems: number
    totalCartPrice: number
}

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        totalCartItems: 0,
        totalCartPrice: 0,
    } as CartState,
    reducers: {
        addProduct: (state, action: PayloadAction<CartProductItem>) => {
            // check if the product is already has been already added to the cart means => pushed to the produtct array
            const item = state.products.find((item) => item.id === action.payload.id)

            // quantity multiply ((*)) price
            const itemTotalPrice =
                action.payload.quantity * action.payload.price


            if (item) {
                item.quantity += action.payload.quantity
                // if the product is already has been added to the cart increase the same product quantity
            } else {
                state.products.push(action.payload)

            }

            state.totalCartItems += action.payload.quantity
            state.totalCartPrice += itemTotalPrice


        },
        deleteProduct: (state, action: PayloadAction<number>) => {
            const filteredItems = state.products.filter((product) => product.id !== action.payload)

            const removedProduct = state.products.find((product) => product.id === action.payload)


            if (removedProduct) {

                const removedProductTotalPrice = removedProduct.quantity * removedProduct.price

                state.totalCartItems -= removedProduct.quantity
                state.totalCartPrice -= removedProductTotalPrice

            }

            state.products = filteredItems

        },

        resetCart: (state) => {
            state.products = []
        }

    }
})

export const { addProduct, deleteProduct, resetCart } = cartSlice.actions
export default cartSlice.reducer




// Unreachable code
// 
// const deletedProduct = state.products.find((product) => product.id === action.payload)
// 
// if (deleteProduct) {
// 
// } else {
// state.totalCartItems -= deletedProduct?.quantity
// 
// }


// state.totalCartPrice += action.payload.price * action.payload.quantity


// state.totalCartQuantity += action.payload.quantity


// state.totalCartItems += action.payload.product.inCartProductQuantity
// state.totalProductQuantityPrice += action.payload.product.inCartProductQuantity * action.payload.product.price