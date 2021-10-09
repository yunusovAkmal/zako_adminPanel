import axios from "axios";
import { SetItem } from "../helpers/localStorage";
import { ErrorMsg, SuccessMsg } from "../Notifications/Message";
import { HOST } from "../server/axios";

export const Auth = ({ values, history, setLoading }) => {
	axios
		.post(HOST + "login/", values)
		.then((res) => {
			SuccessMsg("Access allowed!");
			history.push("/home", { pathname: "/login" });
			SetItem(res.data.token);
		})
		.catch(() => {
			ErrorMsg("Username or password is wrong, please try again.");
		})
		.then(() => setLoading(false));
};
