import { Pie } from "@ant-design/charts";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GetItem } from "../helpers/localStorage";
import { HOST } from ".././server/axios";
import { Form, Input, Button } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { SuccessMsg } from "../Notifications/Message";
const PieChart = () => {
  const [optiondata, setOptionData] = useState([]);
  const token = GetItem();
  const [form] = Form.useForm();
  useEffect(() => {
    GetCheckDate();
  }, []);
  const DavomatStatisticsPost = (values) => {
    axios({
      url: `${HOST}/checkdate/${values.date}/`,
      method: "GET",
      headers: {
        Authorization: "TOKEN" + token,
      },
    }).then((res) => {
      setOptionData(res.data);
      console.log(res.status);
      SuccessMsg(res.status)
    });
  };

  const GetCheckDate = () => {
    axios(`${HOST}/checkdate/`).then((date) => {
      setOptionData(date.data);
      console.log(date.data);
    });
  };

  var config = {
    appendPadding: 10,
    data: optiondata,
    angleField: "soni",
    colorField: "absence",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: function content(_ref) {
        var percent = _ref.percent;
        return "".concat((percent * 100).toFixed(0), "%");
      },
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    interactions: [{ type: "element-active" }],
  };
  return (
    <div>
      <Pie className="line" {...config} />
      <div className="input-divs">
        <Form
          form={form}
          name="form_in_form"
          onFinish={DavomatStatisticsPost}
          className="chartform"
        >
          <FormItem name="date">
            <Input
              style={{
                width: "100%",
              }}
              // className="indate"
              type="date"
            />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              Ok
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  );
};

export default PieChart;
