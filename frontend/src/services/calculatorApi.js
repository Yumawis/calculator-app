import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const calculatorApi = createApi({
    reducerPath: 'calculatorApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/calculator' }),
    endpoints: (builder) => ({
            addOperation: builder.mutation({
                query: ({ num1, num2 }) => ({
                    url: "/add",
                    method: "POST",
                    body: { num1, num2 }
            }),
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (response, meta, arg) => response.data,
        }),
            subtractOperation: builder.mutation({
                query: ({ num1, num2 }) => ({
                    url: "/subtract",
                    method: "POST",
                    body: { num1, num2 }
            }),
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (response, meta, arg) => response.data,
        }),
            multiplyOperation: builder.mutation({
                query: ({ num1, num2 }) => ({
                    url: "/multiply",
                    method: "POST",
                    body: { num1, num2 }
            }),
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (response, meta, arg) => response.data,
        }),
            divideOperation: builder.mutation({
                query: ({ num1, num2 }) => ({
                    url: "/divide",
                    method: "POST",
                    body: { num1, num2 }
            }),
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (response, meta, arg) => response.data,
        })
    })
})

export const { 
    useAddOperationMutation, 
    useSubtractOperationMutation, 
    useMultiplyOperationMutation, 
    useDivideOperationMutation 
} = calculatorApi 
