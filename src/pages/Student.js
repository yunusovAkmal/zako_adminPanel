import { Tabs } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import ChoiceModal from "../Components/modal/ChoiceModal";
import TableComp from "../Components/table/TableComp";
import { StudentColumns } from "../helpers/columns";
import ProfileDrawer from "../Components/common/ProfileDrawer";

const { TabPane } = Tabs;

const Student = () => {
	const { id } = useParams();
	const way = id ? `student_by_group/${id}/` : "student/";

	return (
		<>
			<ChoiceModal />
			<ProfileDrawer />
			<Tabs defaultActiveKey="1">
				<TabPane tab="Guruhdagilar" key="1">
					<TableComp url="student/" way={way} columns={StudentColumns} />
				</TabPane>
				<TabPane tab="Qabuldagilar" key="2">
					<TableComp url="student/" way={way} columns={StudentColumns} />
				</TabPane>
				<TabPane tab="Qora ro'yhat" key="3">
					<TableComp url="student/" way={way} columns={StudentColumns} />
				</TabPane>
			</Tabs>
		</>
	);
};

export default Student;
