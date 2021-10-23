import React from "react";
import {  Tabs } from "antd";
import CarouselComp from "./CarouselComp";


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
				<CarouselComp/>
			</TabPane>
		</Tabs>
	);
};

export default Wrapper;
