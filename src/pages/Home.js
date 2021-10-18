import { Layout, Typography, Input, Menu, Space } from "antd";
import React from "react";
import { Link, NavLink, useRouteMatch } from "react-router-dom";
import ProfileDrawer from "../Components/common/ProfileDrawer";
import Routes from "../Components/common/Routes";
import User from "../Components/common/User";
import { routes } from "../helpers/routes";

const { Search } = Input;
const { Title } = Typography;
const { Header, Content, Sider } = Layout;

const Home = () => {
	const { url, path } = useRouteMatch();

	return (
		<Layout className="home_layout">
			<Header className="home_header">
				<Title level={4}>Zako IT Academy</Title>
				<Search placeholder="Search..." allowClear style={{ width: 600 }} />
				<User />
			</Header>
			<Layout style={{width:'100%'}}>
				<Sider className="home_sider">
					<Menu className='sider_menu'>
						{routes.map((route) => (
							<Menu.Item key={route.name}>
								<Link className="menuLink" key={url + route.path} to={url + route.path}>
									<Space size="middle">
										{route.icon}
										{route.name}
									</Space>
								</Link>
							</Menu.Item>
						))}
					</Menu>
				</Sider>
				<Content className="home_content">
					<ProfileDrawer />
					<Routes path={path} routes={routes} />
				</Content>
			</Layout>
		</Layout>
	);
};

export default Home;
