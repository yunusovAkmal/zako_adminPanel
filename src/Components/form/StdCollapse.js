import React from "react";
import { Button, Collapse, Form, Upload } from "antd";
import { CollapseColumns } from "../../helpers/columns";
import { UploadOutlined } from "@ant-design/icons";
const { Panel } = Collapse;

const StdCollapse = () => {

	return (
		<Collapse>
			<Panel header="Options">
				<Form.Item
					name="image"
					label="Upload image"
					valuePropName="file"
					getValueFromEvent={(e) => e.file}
				>
					<Upload maxCount={1} beforeUpload={() => false} listType="picture">
						<Button icon={<UploadOutlined />}>Click to upload</Button>
					</Upload>
				</Form.Item>
				{CollapseColumns.map((item) => (
					<Form.Item
						key={item.dataIndex}
						name={item.dataIndex}
						label={item.title}
						rules={item.rules}
					>
						{item.element}
					</Form.Item>
				))}
			</Panel>
		</Collapse>
	);
};

export default StdCollapse;
