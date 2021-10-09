// import { DatePicker } from "antd";
import { notification } from "antd";

// function onChange(value, dateString) {
// 	console.log("Selected Time: ", value);
// 	console.log("Formatted Selected Time: ", dateString);
// }

// function onOk(value) {
// 	console.log("onOk: ", value);
// }

// <DatePicker showTime onChange={onChange} onOk={onOk} />;

export const delReqst = () => {
	//zapros delete to server
};

export const openNotific = ({ message = "Notification", description = "hahahah" }) => {
	notification.info({
		message,
		description,
		duration: 0.1,
		onClose: delReqst,
	});
};
