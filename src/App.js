import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import { HomeNavigate } from "./hoc/Authentication";
import { Provider } from "react-redux";
import store from "./redux/store";
// import { openNotific } from "./Notifications/Notification";

const App = () => {
	// useEffect(() => {
	// 	console.log("realtime js working...");
	// 	var websocket = new WebSocket("ws://127.0.0.1:8000/ws/real_data/");
	// 	websocket.onmessage = function (event) {
	// 		var data = JSON.parse(event.data);
	// 		openNotific({ description: data.number });
	// 		console.log(data);
	// 	};
	// 	console.log('finish');
	// }, []);

	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact key="/login" path="/login" component={Login} />
					<Route key="/home" path="/home">
						{HomeNavigate()}
					</Route>
					<Route exact path="/" key="/">
						<Redirect to="/login" />
					</Route>
					<Route key="/404" path="*" component={ErrorPage} />
				</Switch>
			</Router>
		</Provider>
	);
};

export default App;
