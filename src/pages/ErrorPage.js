import { Result } from "antd";
import React, { Component } from "react";

export default class ErrorPage extends Component {
  render() {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
      />
    );
  }
}
