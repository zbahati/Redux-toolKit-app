import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartItems: [],
  amount: 2,
  total: 0,
  isLoading: true,
};

const url = "https://course-api.com/react-useReducer-cart-project";

export const fetchData = createAsyncThunk("carts/fetchData", async () => {
  const resp = await axios(url);
  return resp.data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },

    removeItem: (state, actions) => {
      const itemId = actions.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },

    Increment: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },

    Decrement: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount -= 1;
    },

    Calculator: (state) => {
      let amout = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amout += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amout;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.cartItems = [];
    });

    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    });
  },
});

export default cartSlice.reducer;
export const { clearCart, removeItem, Increment, Decrement, Calculator } =
  cartSlice.actions;
