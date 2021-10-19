import React from "react";
import { Tabs } from "antd";
import TableCards from "./TableCards";

const { TabPane } = Tabs;

const Wrapper = ({ children }) => {
	function callback(key) {
		console.log(key);
	}

	return (
		<Tabs defaultActiveKey="1" onChange={callback}>
			<TabPane tab="Offline kurslar" key="1">
				{children}
			</TabPane>
			<TabPane tab="Online kurslar" key="2">
				<TableCards/>
			</TabPane>
		</Tabs>
	);
};

export default Wrapper;
