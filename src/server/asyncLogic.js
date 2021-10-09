import { createAsyncThunk } from "@reduxjs/toolkit";
import { ErrorMsg, SuccessMsg } from "../Notifications/Message";
import { setDataSource, setHistory, setSelectData } from "../redux/reducers/dataSlice";
import Axios from "./axios";

export const getDataSource = createAsyncThunk("data/getDataSource", async (url, { dispatch }) => {
	console.log(url);
	try {
		const { data } = await Axios().get(url);
		if (data) dispatch(setDataSource(data));
	} catch {
		ErrorMsg("Failed to load data!");
	}
});

export const getAttantion = async ({ url }) => {
	try {
		const { data } = await Axios().get(url);
		console.log("keldi", data);
		return data ? data : [];
	} catch {
		ErrorMsg();
	}
};

export const asyncAttendance = async ({ url, values, method = "PUT", text = "Changes saved." }) => {
	try {
		await Axios()({
			url: url,
			method: method,
			data: values,
		}).then(() => {
			SuccessMsg(text);
		});
		return true;
	} catch {
		ErrorMsg();
	}
};

export const fetchData = createAsyncThunk("data/fetchData", async ({ url }, { dispatch }) => {
	try {
		const { data } = await Axios().get(url);
		if (data) dispatch(setSelectData(data));
	} catch {
		ErrorMsg("Failed to load data");
	}
});

export const fetchHistory = createAsyncThunk("data/fetchHistory", async (id, { dispatch }) => {
	try {
		const { data } = await Axios().get(`payment_by_student/${id}/`);
		if (data) dispatch(setHistory(data.data));
	} catch {
		ErrorMsg("Failed to load history");
	}
});

export const asyncRequest = createAsyncThunk(
	"data/asyncRequest",
	async ({ url, values }, { getState, dispatch }) => {
		const { rowId } = getState().row;
		const { method } = getState().modal;
		const id = method === "PUT" ? `${rowId}/` : "";
		try {
			await Axios()({
				url: url + id,
				method: method,
				data: values,
			}).then(() => {
				SuccessMsg();
				dispatch(getDataSource(url));
			});
		} catch {
			ErrorMsg("Failed to load data");
		}
	}
);

export const asyncMultiple = async (values) => {
	const array = values.student;
	try {
		for (let i = 0; i < array.length; i++) {
			const obj = { ...values, student: array[i] };
			await Axios().post("student_choise/", obj);
		}
		SuccessMsg("Students were added to group");
	} catch {
		ErrorMsg("Failed to load data");
	}
};

export const asyncDelete = createAsyncThunk(
	"data/asyncDelete",
	async (url, { getState, dispatch }) => {
		const { rowId } = getState().row;
		try {
			await Axios()
				.delete(`${url + rowId}/`)
				.then(() => {
					SuccessMsg("Deleted");
					dispatch(getDataSource(url));
				});
		} catch {
			ErrorMsg();
		}
	}
);
