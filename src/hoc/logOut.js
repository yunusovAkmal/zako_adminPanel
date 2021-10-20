import Axios from "../server/axios";
import { RemoveItem } from "../helpers/localStorage";

export const LogOut = (history) => {
	Axios().post("logout/");
	RemoveItem();
	history.push("/login");
};
