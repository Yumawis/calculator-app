import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    result: 0
}

const calculateSlice = createSlice({
    name: 'calculate',
    initialState,
    reducers: {
        setResult: (state, action) => {
            state.result = action.payload
        }
    }
})

export const { setResult } = calculateSlice.actions

export const selectResult = (state) => state.calculate.result

export default calculateSlice.reducer