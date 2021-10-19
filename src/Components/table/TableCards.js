import { Card, Space } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const TableCards = () => {
	const dispatch = useDispatch();
	const { selectData } = useSelector((state) => state.data);
	useEffect(() => {}, [dispatch]);

	return (
		<Space className="table_cards_box" size="middle">
			{selectData.map((item, i) => (
				<Card key={i} title={null}>
					<p>{i}</p>
					<p>Card content</p>
					<h3>Card content</h3>
				</Card>
			))}
		</Space>
	);
};

export default TableCards;
