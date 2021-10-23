import { Select, Tabs } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import TableComp from "../Components/table/TableComp";
import { CourseColumns } from "../helpers/columns";

const { TabPane } = Tabs;
const { Option } = Select;

const Course = () => {
	const { selectData = [] } = useSelector((state) => state.data);
	const tabpaneChange = (key) => {
		console.log(key);
	};
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
	return (
		<Tabs defaultActiveKey="1" onChange={tabpaneChange}>
			<TabPane tab="Offline kurslar" key="1">
				<TableComp type="offline" url="course/" way="course/" columns={columns} />
			</TabPane>
			<TabPane tab="Online kurslar" key="2">
				<TableComp type="online" url="course/" way="course/" columns={columns} />
			</TabPane>
		</Tabs>
	);
};

export default Course;
