import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { API_URL } from "../config/app.config"

export const calculatorApi = createApi({
    reducerPath: 'calculatorApi', 
    baseQuery: fetchBaseQuery({ baseUrl: API_URL}),
    endpoints: () => ({})
})