import { configureStore } from '@reduxjs/toolkit'
import BasketManagement from './Slices/BasketManagement'
export const store = configureStore({
  reducer:{
    Basket:BasketManagement
}
})