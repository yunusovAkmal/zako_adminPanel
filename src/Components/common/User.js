import { BellOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Popover, Space } from "antd";
import React from "react";
import { useHistory } from "react-router";
import { LogOut } from "../../hoc/logOut";
import user from "../../Images/user.jpg";

const User = () => {
	let history = useHistory();
	const content = (
		<Button onClick={() => LogOut(history)} type="danger">
			Log out
		</Button>
	);

	return (
		<Space size="middle">
			<Badge dot>
				<BellOutlined style={{ fontSize: "20px", color: "#08c" }} />
			</Badge>
			<Popover className="user" placement="bottom" content={content} trigger="click">
				<Avatar src={user} size={30} />
			</Popover>
		</Space>
	);
};

export default User;
