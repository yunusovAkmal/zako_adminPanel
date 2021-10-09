import { Select } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import TableComp from "../Components/table/TableComp";
import { CourseColumns } from "../helpers/columns";

const { Option } = Select;
const Course = () => {
	const { selectData = [] } = useSelector((state) => state.data);

	let columns = [
		...CourseColumns,
		{
			isForm: true,
			title: "Teacher",
			dataIndex: "teacher",
			rules: [{ required: true, message: "Please select teacher!" }],
			element: (
				<Select placeholder="select teacher">
					{selectData.map((item, i) => (
						<Option key={i} value={item.id}>
							{item.full_name}
						</Option>
					))}
				</Select>
			),
		},
	];
	return <TableComp url="course/" way="course/" columns={columns} />;
};

export default Course;
