import { calculatorApi } from "../api/calculatorApi"

export const calculateApi = calculatorApi.injectEndpoints({
    endpoints: (builder) => ({
        calculate: builder.mutation({
            query: ({ operation, numbers }) => ({
                url: `calculator/${operation}`,
                method: 'POST',
                body: numbers
            }),
            transformResponse: (response) => response?.data?.result,
            transformErrorResponse: (response) => response?.data,
        })
    })
})

export const { useCalculateMutation } = calculateApi
