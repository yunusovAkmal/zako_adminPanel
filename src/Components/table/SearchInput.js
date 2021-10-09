import React, { useState } from "react";
import { Select } from "antd";
import { useSelector } from "react-redux";

const { Option } = Select;

const SearchInput = (props) => {
	const { dataSource } = useSelector((state) => state.data);
	// const array = ["Volvo", "BMW", "Ford", "Mazda", "volvo", "bmassalk"];
	const [data, setdata] = useState([]);

	const handleSearch = (value) => {
		if (value) {
			const options = dataSource.filter((item) => {
				const name = Object.keys(item)[1];
				return item[name].toLowerCase().includes(value.toLowerCase());
			});
			setdata(options);
		} else {
			setdata([]);
		}
	};

	const handleChange = (value) => {
		console.log("change", value);
	};

	const options = data.map((elem) => {
		const name = Object.keys(elem)[1];
		return (
			<Option value={elem.id} key={elem.id}>
				{elem[name]}
			</Option>
		);
	});

	return (
		<Select
			mode="multiple"
			placeholder="Search..."
			style={props.style}
			defaultActiveFirstOption={false}
			showArrow={false}
			filterOption={false}
			onSearch={handleSearch}
			onChange={handleChange}
			notFoundContent={null}
		>
			{options}
		</Select>
	);
};

export default SearchInput;
