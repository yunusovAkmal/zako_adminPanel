import { Layout } from "antd";
import React from "react";
import { useRouteMatch } from "react-router-dom";
import MenuDriwer from "../Components/common/MenuDriwer";
import NavigationBar from "../Components/common/NavigationBar";
import ProfileDrawer from "../Components/common/ProfileDrawer";
import Routes from "../Components/common/Routes";
import User from "../Components/common/User";
import { routes } from "../helpers/routes";

const { Header, Content } = Layout;

const Home = () => {
	const { url, path } = useRouteMatch();

	return (
		<Layout className="home_layout">
			<Header className="home_header">
				<NavigationBar url={url} routes={routes} />
				<User />
				<audio></audio>
			</Header>
			<Content className="home_content">
				<ProfileDrawer />
				<MenuDriwer />
				<Routes path={path} routes={routes} />
			</Content>
		</Layout>
	);
};

export default Home;
