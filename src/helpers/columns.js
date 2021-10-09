import store from "../redux/store";
import { toogleDrawer } from "../redux/reducers/drawerSlice";
import { Button, DatePicker, Input, Select, Statistic, TimePicker, Space } from "antd";
import {
	ArrowRightOutlined,
	CaretLeftOutlined,
	UsergroupAddOutlined,
	UserSwitchOutlined,
} from "@ant-design/icons";
import { setRow } from "../redux/reducers/rowSlice";
import { toogleChoice } from "../redux/reducers/modalSlice";
import { fetchHistory, getDataSource } from "../server/asyncLogic";
import { Link } from "react-router-dom";
import StdCollapse from "../Components/form/StdCollapse";

const { Option } = Select;
const { TextArea } = Input;

let toogle = true;
const handleSwitch = () => {
	let url = toogle ? "student_by_group/0/" : "student/";
	store.dispatch(getDataSource(url));
	toogle = !toogle;
};

const infoOptions = [
	"telegram",
	"instagram",
	"facebook",
	"TikTok",
	"flyers",
	"banners",
	"friend",
	"youtube",
];

export const CourseColumns = [
	{
		isTable: true,
		isForm: true,
		title: "Kurs",
		dataIndex: "course_name",
		rules: [{ required: true, message: "Please input course name!" }],
		element: <Input />,
	},
	{
		isTable: true,
		isForm: true,
		title: "Narxi (so'm)",
		dataIndex: "price",
		rules: [{ required: true, message: "Please input course price!" }],
		element: <Input type="number" />,
	},
	{
		isTable: true,
		title: "",
		dataIndex: "id",
		render: (id) => (
			<Link key={`/home/group/${id}`} to={`/home/group/${id}`}>
				Groups <ArrowRightOutlined />
			</Link>
		),
	},
];

export const GroupColumns = [
	{
		isTable: true,
		isForm: true,
		title: "Guruh",
		dataIndex: "group_name",
		rules: [{ required: true, message: "Please input group name!" }],
		element: <Input />,
	},
	{
		isTable: true,
		isForm: true,
		title: "Dars vaqti",
		dataIndex: "time",
		rules: [{ type: "object", required: true, message: "Please input lesson time!" }],
		element: <TimePicker format="HH:mm:ss" />,
	},
	{
		isTable: true,
		isForm: true,
		title: "Start time",
		dataIndex: "start_date",
		rules: [
			{
				type: "object",
				required: true,
				message: "Please input lesson start date",
			},
		],
		element: <DatePicker format="YYYY-MM-DD" />,
	},
	{
		isTable: true,
		title: "",
		dataIndex: "id",
		render: (id) => (
			<Link key={`/home/student/${id}`} to={`/home/student/${id}`}>
				Students <ArrowRightOutlined />
			</Link>
		),
	},
];

export const StudentColumns = [
	{
		isTable: true,
		isForm: true,
		title: "F.I.Sh",
		dataIndex: "full_name",
		rules: [
			{
				required: true,
				message: "Please input your fullname",
			},
		],
		element: <Input />,
	},
	{
		isTable: true,
		isForm: true,
		title: "Telefon raqami",
		dataIndex: "phone",
		rules: [
			{
				required: true,
				message: "Please input your phone number",
			},
		],
		element: <Input />,
	},
	{
		isTable: true,
		title: (
			<Space>
				<Button icon={<UserSwitchOutlined />} onClick={handleSwitch} />
				<Button onClick={() => store.dispatch(toogleChoice())} icon={<UsergroupAddOutlined />} />
			</Space>
		),
		align: "right",
		dataIndex: "id",
		render: (id) => (
			<Button
				icon={<CaretLeftOutlined />}
				onClick={() => {
					store.dispatch(setRow(id));
					store.dispatch(toogleDrawer());
					store.dispatch(fetchHistory(id));
				}}
				type="link"
			>
				View Profile
			</Button>
		),
	},
	{
		isForm: true,
		title: "",
		dataIndex: "nothing",
		element: <StdCollapse />,
	},
];

export const CollapseColumns = [
	{
		title: "Email",
		dataIndex: "email",
		rules: [
			{
				type: "email",
				message: "The input is not valid E-mail!",
			},
		],
		element: <Input placeholder="example@gmail.com" />,
	},
	{
		title: "Age",
		dataIndex: "age",
		element: <Input type="number" />,
	},
	{
		title: "Occupation",
		dataIndex: "job",
		element: <Input placeholder="student, pupil..." />,
	},
	{
		title: "Info source",
		dataIndex: "where_know",
		element: (
			<Select placeholder="How did you find out our academy?">
				{infoOptions.map((elem) => (
					<Option key={elem} value={elem}>
						{elem}
					</Option>
				))}
			</Select>
		),
	},
	{
		title: "Address",
		dataIndex: "address",
		element: <Input placeholder="address" />,
	},
	{
		title: "More info",
		dataIndex: "description",
		element: <TextArea placeholder="Additional information" rows={2} />,
	},
];

export const PaymentColumns = [
	{
		isTable: true,
		isForm: true,
		title: "F.I.SH.",
		dataIndex: "full_name",
		rules: [{ required: true, message: "Please input fullname" }],
		element: <Input />,
	},
	{
		isForm: true,
		title: "Telefon raqami",
		dataIndex: "phone",
		rules: [
			{
				required: true,
				message: "Please input your phone number",
			},
		],
		element: <Input type="number" />,
	},
	{
		isTable: true,
		title: "Summa (so'm)",
		dataIndex: "balans",
		render: (amount) => (
			<Statistic
				value={amount}
				valueStyle={amount >= 0 ? { color: "#3f8600" } : { color: "#cf1322" }}
			/>
		),
	},
	{
		isTable: true,
		title: "",
		dataIndex: "id",
		render: (id) => (
			<Button onClick={() => store.dispatch(toogleDrawer())} type="link">
				View Profile{id}
			</Button>
		),
	},
];

export const multipleChoice = [
	{
		isForm: true,
		title: "Course type",
		dataIndex: "course_type",
		rules: [
			{
				required: true,
				message: "Please input course type",
			},
		],
		element: (
			<Select>
				<Option key="offline">offline</Option>
				<Option key="online">online</Option>
			</Select>
		),
	},
	{
		isForm: true,
		title: "Direction",
		dataIndex: "direction",
		rules: [
			{
				required: true,
				message: "Please input direction",
			},
		],
		element: <Input />,
	},
	{
		isForm: true,
		title: "Claim",
		dataIndex: "claim",
		rules: [
			{
				required: true,
				message: "Please input something",
			},
		],
		element: <Input />,
	},
	{
		isForm: true,
		title: "Description",
		dataIndex: "description",
		rules: [
			{
				required: true,
				message: "Please input something",
			},
		],
		element: <Input />,
	},
	{
		isForm: true,
		title: "Course",
		dataIndex: "course",
		rules: [
			{
				required: true,
				message: "Please input course",
			},
		],
		element: <Input type="number" />,
	},
];
