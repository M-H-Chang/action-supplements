import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "../components/counterAPI";

// const initialState = {
//   value: 0,
//   status: 'idle'
// };

// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);
//     return response.data;
//   }
// );

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     incrementj: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload;
//     }
//   },

// })