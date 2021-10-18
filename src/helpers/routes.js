import Attendance from "../pages/Attendance";
import Course from "../pages/Course";
import Group from "../pages/Group";
import Payment from "../pages/Payment";
import Student from "../pages/Student";
import Entry from "../pages/Entry";
import {
	AppstoreOutlined,
	BookOutlined,
	ScheduleOutlined,
	SolutionOutlined,
	TeamOutlined,
	UserOutlined,
} from "@ant-design/icons";
const iconStyle = { fontSize: "18px" };

export const routes = [
	{
		isExact: true,
		path: "/dashboard",
		name: "Dashboard",
		component: Entry,
		icon: <AppstoreOutlined style={iconStyle} />,
	},
	{
		isExact: true,
		path: "/course",
		name: "Kurslar",
		component: Course,
		icon: <BookOutlined style={iconStyle} />,
	},
	{
		isExact: true,
		path: "/group",
		name: "Guruhlar",
		component: Group,
		icon: <TeamOutlined style={iconStyle} />,
	},
	{
		isExact: true,
		path: "/student",
		name: "Talabalar",
		component: Student,
		icon: <UserOutlined style={iconStyle} />,
	},
	{
		isExact: true,
		path: "/attendance",
		name: "Davomat",
		component: Attendance,
		icon: <ScheduleOutlined style={iconStyle} />,
	},
	{
		isExact: true,
		path: "/payment",
		name: "To'lovlar",
		component: Payment,
		icon: <SolutionOutlined style={iconStyle} />,
	},
];
