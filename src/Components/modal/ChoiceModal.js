import React, { useEffect } from "react";
import { Modal, Form, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import FormComp from "../form/FormComp";
import { ErrorMsg } from "../../Notifications/Message";
import { multipleChoice } from "../../helpers/columns";
import { toogleChoice } from "../../redux/reducers/modalSlice";
import { asyncMultiple, fetchData } from "../../server/asyncLogic";

const { Option } = Select;

const ChoiceModal = () => {
	const [form] = Form.useForm();
	const dispatch = useDispatch();
	const {
		modal: { showChoice },
		data: { dataSource, selectData },
	} = useSelector((state) => state);

	useEffect(() => {
		dispatch(fetchData({ url: "group/" }));
	}, [dispatch]);

	const options = dataSource.map((elem) => (
		<Option name={elem.full_name} value={elem.id} key={elem.id}>
			{elem.full_name}
		</Option>
	));

	const columns = [
		...multipleChoice,
		{
			isForm: true,
			title: "Group",
			dataIndex: "group",
			rules: [
				{
					required: true,
					message: "Please input group",
				},
			],
			element: (
				<Select allowClear placeholder="Select group!">
					{selectData.map((elem) => (
						<Option value={elem.id} key={elem.id}>
							{elem.group_name}
						</Option>
					))}
				</Select>
			),
		},
		{
			isForm: true,
			title: "Students",
			dataIndex: "student",
			rules: [
				{
					required: true,
					message: "Please select students!",
					type: "array",
				},
			],
			element: (
				<Select
					mode="multiple"
					allowClear
					placeholder="Select multiple students"
					filterOption
					optionFilterProp="name"
				>
					{options}
				</Select>
			),
		},
	];

	return (
		<Modal
			width={400}
			visible={showChoice}
			title="Multiple choice"
			onCancel={() => {
				dispatch(toogleChoice());
				form.resetFields();
			}}
			onOk={() => {
				form
					.validateFields()
					.then((values) => {
						asyncMultiple(values);
						form.resetFields();
						dispatch(toogleChoice());
					})
					.catch(() => {
						ErrorMsg("Validate Failed");
					});
			}}
		>
			<FormComp columns={columns} form={form} />
		</Modal>
	);
};

export default ChoiceModal;
