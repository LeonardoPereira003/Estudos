import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'

// Cria a store do Redux
export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

// 🔥 TIPAGEM GLOBAL DO ESTADO
export type RootState = ReturnType<typeof store.getState>

// 🔥 TIPAGEM DO DISPATCH
export type AppDispatch = typeof store.dispatch
