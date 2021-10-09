import React from "react";
import { NavLink } from "react-router-dom";
import { BarsOutlined } from "@ant-design/icons";
import { Button, Image } from "antd";
import zakoLogo from "../../Images/zakoLogo.jpg";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../../redux/reducers/menuSlice";

const NavigationBar = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <NavLink key="/entry" to={props.url}>
        <Image src={zakoLogo} width={150} preview={false} />
      </NavLink>
      {props.routes.map((route) => (
        <NavLink
          className="navlink"
          activeClassName="active"
          key={props.url + route.path}
          to={props.url + route.path}
        >
          {route.name}
        </NavLink>
      ))}
      <Button
        onClick={() => dispatch(toogleMenu())}
        className="menuBtn"
        icon={<BarsOutlined />}
      />
    </>
  );
};
export default NavigationBar;
