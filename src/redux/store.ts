import { configureStore } from "@reduxjs/toolkit"
import CartReducer from "./cartSlice"
import CartFlyoutReducer from "./CartFlyoutSlice"


export const makeStore = () => {

    return configureStore({

        reducer: {
            cart: CartReducer,
            cartFlyout: CartFlyoutReducer,
        }

    })

}


export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore["getState"]>

export type AppDispatch = AppStore["dispatch"]