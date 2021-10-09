import React from "react";
import { Drawer } from "antd";
import NavMenu from "./NavMenu";
import { useDispatch, useSelector } from "react-redux";
import { toogleMenu } from "../../redux/reducers/menuSlice";

const MenuDriwer = () => {
  const visible = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  
  return (
    <Drawer
      placement="left"
      closable={false}
      onClose={() => dispatch(toogleMenu())}
      visible={visible}
      getContainer={false}
      style={{ position: "absolute" }}
    >
      <NavMenu />
    </Drawer>
  );
};

export default MenuDriwer;
