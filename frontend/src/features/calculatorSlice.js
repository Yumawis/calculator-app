import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
    name: "calculator",
    initialState: {
        num1: "",
        num2: "",
        selectedOperation: "",
        result: 0,
    },
    reducers: {
        setNum1: (state, action) => {
            state.num1 = action.payload
        },
        setNum2: (state, action) => {
            state.num2 = action.payload
        },
        setSelectedOperation: (state, action) => {
            state.selectedOperation = action.payload
        },
        setResult: (state, action) => {
            state.result = action.payload
        },
      
    },
});

export const {
  setNum1,
  setNum2,
  setSelectedOperation,
  setResult,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;