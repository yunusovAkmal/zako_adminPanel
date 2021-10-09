import React from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/reducers/modalSlice";
import { FormOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { getObj } from "../../features/rowSelection";
import SearchInput from "./SearchInput";
import { asyncDelete, fetchData } from "../../server/asyncLogic";

const TableTitle = ({ url, form, rowSelection }) => {
	const dispatch = useDispatch();

	return (
		<div className="tableTitle">
			<div id="edit_delete" className="editDeleteBtns openEditDeleteBtns">
				<Button
					onClick={() => {
						dispatch(openModal({ method: "PUT", title: "Edit" }));
						if (url === "group/") dispatch(fetchData({ url: "course/" }));
						if (url === "course/") dispatch(fetchData({ url: "teacher/" }));
						form.setFieldsValue(getObj());
					}}
					icon={<EditOutlined />}
				/>
				<Button
					onClick={() => {
						dispatch(asyncDelete(url));
						rowSelection.onChange();
					}}
					danger
					icon={<DeleteOutlined />}
				/>
			</div>
			<Button
				type="primary"
				icon={<FormOutlined />}
				onClick={() => {
					dispatch(openModal({ method: "POST", title: "Create" }));
					if (url === "group/") dispatch(fetchData({ url: "course/" }));
					if (url === "course/") dispatch(fetchData({ url: "teacher/" }));
				}}
			/>
			<SearchInput style={{ width: 200 }} />
		</div>
	);
};

export default TableTitle;
