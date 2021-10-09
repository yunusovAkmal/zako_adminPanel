import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: false,
  reducers: {
    toogleMenu: (state) => !state,
  },
});

export const { toogleMenu } = menuSlice.actions;
export default menuSlice.reducer;
