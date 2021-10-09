import axios from "axios";
import { GetItem } from "../helpers/localStorage";
export let HOST = "http://trigger7701.pythonanywhere.com/";

export let headers = {
	"X-Requested-With": "XMLHttpRequest",
	"Content-Type": "application/json; charset=utf-8",
	Authorization: "Token " + GetItem(),
};

const Axios = () =>
	axios.create({
		baseURL: HOST,
		timeout: 100000,
		headers,
	});
export default Axios;
