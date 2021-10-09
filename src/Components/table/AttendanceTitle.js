import React, { useEffect } from "react";
import { Input, Select } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, getAttantion } from "../../server/asyncLogic";

const { Search } = Input;
const { Option } = Select;

const AttendanceTitle = React.memo(({ setState, setloading }) => {
	const { selectData } = useSelector((state) => state.data);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchData({ url: "group/" }));
	}, [dispatch]);

	return (
		<div className="attendance_title">
			<Select
				placeholder="Select a group"
				onChange={(id) => {
					setloading(true);
					getAttantion({ url: `attantion/${id}/` }).then((data) => {
						if (data) {
							setState({
								groupId: id,
								current: data.current_month,
								dataSource: data.data,
								columns: data.columns,
								total: data.current_month,
							});
						}
						setloading(false);
					});
				}}
			>
				{selectData.map((elem) => (
					<Option key={elem.id} value={elem.id}>
						{elem.group_name}
					</Option>
				))}
			</Select>
			<Search
				placeholder="Search..."
				allowClear
				enterButton
				onSearch={(e) => {
					console.log(e);
				}}
			/>
		</div>
	);
});

export default AttendanceTitle;
