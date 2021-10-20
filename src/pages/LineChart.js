import { Column } from "@ant-design/charts";
import { ArrowDownOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Input, Form,Button } from "antd";
import FormItem from "antd/lib/form/FormItem";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { HOST } from "../server/axios";
import { GetItem } from "../helpers/localStorage";

const LineChart = () => {
  const [form] = Form.useForm();
  const token = GetItem()
  const [paystatdata,setPaystatData] = useState([])
  const Paystat = () =>{
    axios(HOST + '/paystat/',{
      headers:{
        Authorization:"TOKEN" + token
      }
    })
    .then(res=>{
      setPaystatData(res.data)
      console.log(res.data);
    })
  }
  useEffect(()=>{
    Paystat()
  },[])
  const changetotal = (values) =>{
    axios(HOST +'/paystat/'+ values.start + 'to' + values.end,{
      headers:{
        Authorization:"TOKEN" + token
      }
    })
    .then(res=>{
      setPaystatData(res.data)
      console.log(res.data);
      
    })
  }
  
  var paletteSemanticRed = "#F4664A";
  var brandColor = "#5B8FF9";
  var config = {
    data: paystatdata,
    xField: "sana",
    yField: "qiymat",
    seriesField: "",
    color: function color(_ref) {
      var value = _ref.qiymat;
      if (value <=10000) {
        return paletteSemanticRed;
      }
      return brandColor;
    },
    label: {
      content: function content(originData) {
        var val = parseFloat(originData.value);
        if (val < 0.05) {
          return (val * 100).toFixed(1) + "%";
        }
      },
      offset: 10,
    },
    legend: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return (
    <div style={{ width: "100%" }}>
      <Column className="column" {...config} />
      <div className="input-divs">
        <Form onFinish={changetotal} className="lineform" form={form}>
          <FormItem name="start">
            <Input type="date" />
          </FormItem>
          <FormItem>
            <ArrowRightOutlined className="rightArrow" />
            <ArrowDownOutlined className="downArrow" />
          </FormItem>
          <FormItem name="end">
            <Input type="date" />
          </FormItem>
          <Form.Item>
            <Button type="primary" htmlType='submit'>Ok</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LineChart;
