import React from "react";
import { Image } from "antd";
import welcome from "../Images/welcome.jpg";

const Entry = () => {
	return <Image src={welcome} width={500} preview={false} />;
};

export default Entry;
