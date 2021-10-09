import { createSlice } from "@reduxjs/toolkit";

const rowSlice = createSlice({
  name: "id",
  initialState: {
    rowId: null,
    selectId: null,
  },
  reducers: {
    setRow(state, action) {
      state.rowId = action.payload;
    },
    setSelectId(state, action) {
      state.selectId = action.payload.selectId;
    },
  },
});

export const { setRow, setSelectId } = rowSlice.actions;
export default rowSlice.reducer;
