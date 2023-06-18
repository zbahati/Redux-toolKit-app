import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpened: false
}
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    ModalOpened: (state) => {
      state.isOpened = true;
    },

    ModalClosed: (state)=> {
      state.isOpened = false;

    }
  }
})


export default modalSlice.reducer;

export const {ModalClosed, ModalOpened} = modalSlice.actions;