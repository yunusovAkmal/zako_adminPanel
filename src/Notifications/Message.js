import { message } from "antd";

export const SuccessMsg = (text = "Success.") => {
  message.success(text);
};

export const ErrorMsg = (text = "Error, please try later.") => {
  message.error(text);
};

export const WarningMsg = (text = "Warning!") => {
  message.warning(text);
};
