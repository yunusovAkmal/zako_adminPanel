import React, { useState } from "react";
import { Table, Popover, Select, Input, Pagination, Button, Popconfirm } from "antd";
import {
	CheckCircleTwoTone,
	CloseCircleTwoTone,
	WarningTwoTone,
	PlusOutlined,
	QuestionCircleOutlined,
} from "@ant-design/icons";
import { WarningMsg } from "../Notifications/Message";
import { asyncAttendance, getAttantion } from "../server/asyncLogic";
import AttendanceTitle from "../Components/table/AttendanceTitle";
const { Column } = Table;
const { Option } = Select;

const Attendance = () => {
	const [loading, setloading] = useState(false);
	const [state, setState] = useState({
		groupId: null,
		dataSource: [],
		columns: [],
		total: 1,
		current: 1,
	});

	const handleChange = (e, uid) => {
		asyncAttendance({
			url: `lesson/${uid}/`,
			values: { date: e.target.value + "T00:00:00Z" },
		});
	};

	const sizeChange = (page) => {
		setloading(true);
		getAttantion({ url: `attantion/${state.groupId}-${page}/` })
			.then((data) =>
				setState((prevState) => {
					return {
						...prevState,
						current: page,
						dataSource: data.data,
						columns: data.columns,
					};
				})
			)
			.then(() => setloading(false));
	};

	const content = (value, uid) => (
		<Input defaultValue={value} type="date" onChange={(e) => handleChange(e, uid)} />
	);

	const confirm = () => {
		if (state.groupId) {
			setloading(true);
			asyncAttendance({
				text: "New month was created.",
				url: "attantion/",
				method: "POST",
				values: { group: state.groupId },
			})
				.then((resp) => {
					if (resp) {
						getAttantion({ url: `attantion/${state.groupId}/` }).then((data) => {
							setState((prevState) => {
								return {
									...prevState,
									current: data.current_month,
									dataSource: data.data,
									columns: data.columns,
									total: data.current_month,
								};
							});
						});
					}
				})
				.then(() => setloading(false));
		} else {
			WarningMsg("Please, first select group!");
		}
	};
	const footer = () => (
		<div className="attendance_footer">
			<Pagination
				onChange={sizeChange}
				style={{ right: 0 }}
				size="small"
				current={state.current}
				pageSize={1}
				total={state.total}
				hideOnSinglePage={true}
			/>
			<Popconfirm
				icon={<QuestionCircleOutlined style={{ color: "red" }} />}
				title="Are you sure？"
				okText="Yes"
				cancelText="No"
				onConfirm={confirm}
			>
				<Button type="ghost" shape="round" icon={<PlusOutlined />}>
					New month
				</Button>
			</Popconfirm>
		</div>
	);
	const selectChange = ({ values, uid }) => {
		asyncAttendance({ url: `checkdate/${uid}/`, values });
	};

	return (
		<div className="table">
			<Table
				size="small"
				title={() => <AttendanceTitle setState={setState} setloading={setloading} />}
				loading={loading}
				bordered
				rowKey={(record) => record.id}
				dataSource={state.dataSource}
				scroll={{ x: true }}
				pagination={false}
				footer={footer}
				locale={{ emptyText: <h1>Please, select group!</h1> }}
			>
				<Column title="Talabalar" dataIndex="full_name" key="full_name" />
				{state.columns.map((item) => (
					<Column
						width={60}
						title={() => (
							<Popover
								trigger="click"
								content={() => content(item.date.slice(0, 10), item.dateuid)}
							>
								{item.date.slice(0, 10)}
							</Popover>
						)}
						dataIndex="checkdates"
						key={`column${item.key}`}
						render={(arr = []) => (
							<>
								{arr
									.filter((tag) => tag.lesson_id === item.dateuid)
									.map((elem) => (
										<Select
											onChange={(absence) =>
												selectChange({
													uid: elem.uid,
													values: {
														absence,
														student: elem.student_id,
														lesson: elem.lesson_id,
													},
												})
											}
											key={`select${elem.key}`}
											defaultValue={elem.absence}
											showArrow={false}
										>
											<Option key="none" value="none">
												<CloseCircleTwoTone twoToneColor="#b37feb" style={{ fontSize: "17px" }} />
											</Option>
											<Option key="came" value="came">
												<CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: "17px" }} />
											</Option>
											<Option key="freezed" value="freezed">
												<WarningTwoTone twoToneColor="#1890ff" style={{ fontSize: "17px" }} />
											</Option>
										</Select>
									))}
							</>
						)}
					/>
				))}
			</Table>
		</div>
	);
};

export default Attendance;
