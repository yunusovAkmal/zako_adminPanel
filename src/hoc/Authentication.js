import { Redirect } from "react-router-dom";
import { GetItem } from "../helpers/localStorage";
import Home from "../pages/Home";

export const HomeNavigate = () => {
	const token = GetItem();
	if (token) {
		return <Home />;
	}
	return <Redirect to="/login" />;
};
