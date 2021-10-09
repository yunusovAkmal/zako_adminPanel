import React from "react";
import { Menu } from "antd";
import { routes } from "../../helpers/routes";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../../redux/reducers/menuSlice";

const NavMenu = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ width: 200 }}>
      <Menu>
        {routes.map((route) => (
          <Menu.Item key={route.name} icon={route.icon}>
            <Link
              onClick={() => dispatch(toogleMenu())}
              className="menuLink"
              key={route.path}
              to={"/home" + route.path}
            >
              {route.name}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default NavMenu;
