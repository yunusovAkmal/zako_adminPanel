import React from "react";
import { Form, Select } from "antd";
import { useSelector } from "react-redux";

const { Option } = Select;

const FormItem = React.memo(({ columns, url }) => {
	const { selectData } = useSelector((state) => state.data);

	const renderSelect = () => {
		if (url === "group/") {
			return (
				<Form.Item
					key="course"
					label="Course"
					name="course"
					rules={[{ required: true, message: "Please select course!" }]}
				>
					<Select allowClear placeholder="select course">
						{selectData.map((item) => (
							<Option key={item.id} value={item.id}>
								{item.course_name}
							</Option>
						))}
					</Select>
				</Form.Item>
			);
		} else {
			return;
		}
	};

	return (
		<>
			{columns.map((item) => (
				<Form.Item key={item.dataIndex} name={item.dataIndex} label={item.title} rules={item.rules}>
					{item.element}
				</Form.Item>
			))}
			{renderSelect()}
		</>
	);
});

export default FormItem;
