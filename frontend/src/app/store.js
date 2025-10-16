import { configureStore } from "@reduxjs/toolkit";
import { calculatorApi } from "../services/calculatorApi";
import calculatorSlice  from "../features/calculatorSlice"
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [calculatorApi.reducerPath]: calculatorApi.reducer,
        calculator: calculatorSlice,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(calculatorApi.middleware)
})

setupListeners(store.dispatch)