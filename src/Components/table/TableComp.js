import React, { useEffect, useState } from "react";
import { Table, Form } from "antd";
import ModalComp from "../modal/ModalComp";
import TableTitle from "./TableTitle";
import { useSelector, useDispatch } from "react-redux";
import { ToogleChangeRow } from "../../features/rowSelection";
import ChoiceModal from "../modal/ChoiceModal";
import { getDataSource } from "../../server/asyncLogic";
import Wrapper from "./Wrapper";
const { Column } = Table;

const TableComp = ({ url, columns, way }) => {
	const { dataSource } = useSelector((state) => state.data);
	const [loading, setloading] = useState(true);
	const [form] = Form.useForm();
	const dispatch = useDispatch();
	const [selectedRowKeys, setRowKeys] = useState([]);

	const rowSelection = {
		selectedRowKeys,
		onChange: (keys = []) => {
			setRowKeys(keys);
			ToogleChangeRow(keys);
		},
	};

	const rowHandle = (key) => {
		if (selectedRowKeys.includes(key)) {
			const keys = selectedRowKeys.filter((val) => val !== key);
			rowSelection.onChange(keys);
		} else {
			rowSelection.onChange([...selectedRowKeys, key]);
		}
	};

	useEffect(() => {
		dispatch(getDataSource(way)).then(() => setloading(false));
	}, [way, dispatch]);

	return (
		<div className="table">
			<Wrapper>
				<ModalComp form={form} url={url} columns={columns.filter((column) => column.isForm)} />
				<ChoiceModal />
				<Table
					loading={loading}
					bordered
					size="small"
					rowKey={(record) => record.id}
					title={() => <TableTitle url={url} form={form} rowSelection={rowSelection} />}
					rowSelection={rowSelection}
					dataSource={dataSource}
					scroll={{ x: true }}
					pagination={{
						hideOnSinglePage: true,
						showSizeChanger: true,
						pageSizeOptions: [5, 10, 20, 30],
						size: "default",
					}}
					onRow={({ id }) => {
						return {
							onClick: (e) => {
								if (e.target.tagName === "TD") rowHandle(id);
							},
						};
					}}
				>
					{columns
						.filter((column) => column.isTable)
						.map((column) => (
							<Column
								title={column.title}
								dataIndex={column.dataIndex}
								key={column.title}
								render={column.render}
								align={column.align}
							/>
						))}
				</Table>
			</Wrapper>
		</div>
	);
};

export default TableComp;
