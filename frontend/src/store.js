import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { calculatorApi } from "./api/calculatorApi";

const appReducer = combineReducers({
    [calculatorApi.reducerPath]: calculatorApi.reducer,
    calculate: calculateReducer
})

export const store = configureStore({
    reducer: appReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(calculatorApi.middleware)
})

setupListeners(store.dispatch)