import Attendance from "../pages/Attendance";
import Course from "../pages/Course";
import Group from "../pages/Group";
import Payment from "../pages/Payment";
import Student from "../pages/Student";
import {
  BookOutlined,
  ScheduleOutlined,
  SolutionOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
// import Test from "../pages/Test";

export const routes = [
  {
    isExact: true,
    path: "/course",
    name: "Kurslar",
    component: Course,
    icon: <BookOutlined />,
  },
  {
    isExact: true,
    path: "/group",
    name: "Guruhlar",
    component: Group,
    icon: <TeamOutlined />,
  },
  {
    isExact: true,
    path: "/student",
    name: "Talabalar",
    component: Student,
    icon: <UserOutlined />,
  },
  {
    isExact: true,
    path: "/attendance",
    name: "Davomat",
    component: Attendance,
    icon: <ScheduleOutlined />,
  },
  {
    isExact: true,
    path: "/payment",
    name: "To'lovlar",
    component: Payment,
    icon: <SolutionOutlined />,
  },
];
