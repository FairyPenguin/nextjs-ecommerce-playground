import { createSlice } from "@reduxjs/toolkit";

interface CartFlyoutState {
    isOpen: boolean
}

const cartFlyoutInitialState: CartFlyoutState = {
    isOpen: false
}

const cartFlyoutReducer = createSlice({
    name: "cartFlyout",
    initialState: {
        isOpen: cartFlyoutInitialState.isOpen
    },
    reducers: {
        openCartFlyout: (state) => {
            state.isOpen = true;
        },
        closeCartFlyout: (state) => {
            state.isOpen = false
        }
    }
})



export const { openCartFlyout, closeCartFlyout } = cartFlyoutReducer.actions
export default cartFlyoutReducer.reducer