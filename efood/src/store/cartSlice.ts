import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Product } from '../types/Product'

type CartItem = {
    product: Product
    quantity: number
}

type CartState = {
    items: CartItem[]
}

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Product>) => {
            const item = state.items.find(
                (i) => i.product.id === action.payload.id
            )

            if (item) {
                item.quantity += 1
            } else {
                state.items.push({
                    product: action.payload,
                    quantity: 1
                })
            }
        },

        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(
                (item) => item.product.id !== action.payload
            )
        },

        clearCart: (state) => {
            state.items = []
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
