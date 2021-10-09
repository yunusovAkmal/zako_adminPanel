import Axios from "../server/axios";
import { GetItem, RemoveItem } from "../helpers/localStorage";
import { ErrorMsg } from "../Notifications/Message";

export const LogOut = (history) => {
	const token = GetItem();

	if (token) {
		Axios()
			.post("logout/")
			.then(() => {
				RemoveItem();
				history.push("/login");
			})
			.catch(() => ErrorMsg());
	} else {
		history.push("/login");
	}
};
