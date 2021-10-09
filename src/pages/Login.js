import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { Auth } from "../hoc/Auth";

const Login = () => {
	let history = useHistory();
	const [loading, setLoading] = useState(false);

	return (
		<div className="login_page">
			<div className="login_box">
				<Form
					name="login_form"
					className="login-form"
					initialValues={{
						remember: false,
					}}
					onFinish={(values) => {
						setLoading(true);
						Auth({ values, history, setLoading });
					}}
				>
					<Form.Item
						name="username"
						rules={[
							{
								required: true,
								message: "Please input your Username!",
							},
						]}
					>
						<Input prefix={<UserOutlined />} placeholder="Username" />
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: "Please input your Password!",
							},
						]}
					>
						<Input.Password
							prefix={<LockOutlined />}
							type="password"
							placeholder="Password"
							iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
						/>
					</Form.Item>
					<Form.Item>
						<Button
							loading={loading}
							type="primary"
							htmlType="submit"
							className="login_form_button"
						>
							Log in
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default Login;
