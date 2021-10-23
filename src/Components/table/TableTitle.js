import React from "react";
import { Button, Space } from "antd";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/reducers/modalSlice";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { getObj } from "../../features/rowSelection";
import { asyncDelete, fetchData } from "../../server/asyncLogic";

const TableTitle = ({ url, form, rowSelection }) => {
	const dispatch = useDispatch();

	return (
		<div className="tableTitle">
			<Space id="edit_delete" className="editDeleteBtns openEditDeleteBtns" size="middle">
				<Button
					className="table_title_btns"
					onClick={() => {
						dispatch(openModal({ method: "PUT", title: "Edit" }));
						if (url === "course/") dispatch(fetchData({ url: "teacher/" }));
						form.setFieldsValue(getObj());
					}}
					icon={<EditOutlined />}
				>
					Tahrirlash
				</Button>
				<Button
					className="table_title_btns"
					onClick={() => {
						dispatch(asyncDelete(url));
						rowSelection.onChange();
					}}
					danger
					icon={<DeleteOutlined />}
				>
					O'chirish
				</Button>
			</Space>
			<Button
				className="table_title_btns"
				type="primary"
				icon={<PlusOutlined />}
				onClick={() => {
					dispatch(openModal({ method: "POST", title: "Create" }));
					if (url === "course/") dispatch(fetchData({ url: "teacher/" }));
				}}
			>
				Yangi qo'shish
			</Button>
		</div>
	);
};

export default TableTitle;
