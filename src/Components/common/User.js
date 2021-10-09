import { Avatar, Button, Popover } from "antd";
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
    <Popover
      className="user"
      placement="bottom"
      content={content}
      trigger="click"
    >
      <Avatar src={user} size={60} />
    </Popover>
  );
};

export default User;
