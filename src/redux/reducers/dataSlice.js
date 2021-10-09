import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
	name: "data",
	initialState: {
		dataSource: [],
		selectData: [],
		history: [],
	},
	reducers: {
		setDataSource: (state, action) => {
			state.dataSource = action.payload;
		},
		setSelectData: (state, action) => {
			state.selectData = action.payload;
		},
		setHistory: (state, action) => {
			state.history = action.payload;
		},
	},
});

export const { setDataSource, setSelectData, setHistory } = dataSlice.actions;
export default dataSlice.reducer;
