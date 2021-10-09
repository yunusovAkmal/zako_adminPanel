import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    visible: false,
    method: "",
    title: "",
    showChoice: false,
  },
  reducers: {
    openModal(state, action) {
      state.visible = true;
      state.method = action.payload.method;
      state.title = action.payload.title;
    },
    closeModal(state) {
      state.visible = false;
    },
    toogleChoice: (state) => {
      state.showChoice = !state.showChoice;
    },
  },
});

export const { openModal, closeModal, toogleChoice } = modalSlice.actions;
export default modalSlice.reducer;
