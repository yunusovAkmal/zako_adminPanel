import React from "react";
import { Route, Switch } from "react-router-dom";
import Student from "../../pages/Student";
import Entry from "../../pages/Entry";
import ErrorPage from "../../pages/ErrorPage";
import Group from "../../pages/Group";

const Routes = (props) => {
	return (
		<Switch>
			<Route exact key="/entry" path="/home" component={Entry} />
			{props.routes.map((route) => (
				<Route
					key={props.path + route.path}
					exact={route.isExact}
					path={props.path + route.path}
					component={route.component}
				/>
			))}
			<Route exact path={`${props.path}/group/:id`} component={Group} />
			<Route exact path={`${props.path}/student/:id`} component={Student} />
			<Route key="/404" path="*" component={ErrorPage} />
		</Switch>
	);
};
export default Routes;
