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

  // var config = {
  //   appendPadding: 10,
  //   data: optiondata,
  //   angleField: "soni",
  //   colorField: "absence",
  //   radius: 0.9,
  //   label: {
  //     type: "inner",
  //     offset: "-30%",
  //     content: function content(_ref) {
  //       var percent = _ref.percent;
  //       return "".concat((percent * 100).toFixed(0), "%");
  //     },
  //     style: {
  //       fontSize: 14,
  //       textAlign: "center",
  //     },
  //   },
  //   interactions: [{ type: "element-active" }],
  // };
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ];
  var config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    innerRadius: 0.64,
    label: {
      type: 'inner',
      offset: '-50%',
      content: ({ percent }) => `${percent * 100}%`,
      style: {
        fill: '#fff',
        fontSize: 14,
        textAlign: 'center',
      },
    },
    statistic: null,
    annotations: [
      {
        type: 'image',
        src: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*ELYbTIVCgPoAAAAAAAAAAABkARQnAQ',
        /** 位置 */
        position: ['50%', '50%'],
        /** 图形样式属性 */
        style: {
          width: 50,
          height: 50,
        },
        /** x 方向的偏移量 */
        offsetX: -25,
        /** y 方向的偏移量 */
        offsetY: 40,
      },
    ],
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
