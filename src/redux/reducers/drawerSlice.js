import { createSlice } from "@reduxjs/toolkit";

const drawerSlice = createSlice({
  name: "drawer",
  initialState: false,
  reducers: {
    toogleDrawer: (state) => !state,
  },
});

export const { toogleDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;
