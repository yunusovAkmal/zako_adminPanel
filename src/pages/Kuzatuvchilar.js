import { Col, Row, Select } from "antd";
import React from "react";
import { Column } from "@ant-design/charts";
const { Option } = Select;
const Kuzatuvchilar = () => {
  const SelectOnchange = (value) => {
    console.log(value);
  };
  var data = [
    {
      name: "London",
      月份: "Jan.",
      月均降雨量: 18.9,
    },
    {
      name: "London",
      月份: "Feb.",
      月均降雨量: 28.8,
    },
    {
      name: "London",
      月份: "Mar.",
      月均降雨量: 39.3,
    },
    {
      name: "London",
      月份: "Apr.",
      月均降雨量: 81.4,
    },
    {
      name: "London",
      月份: "May",
      月均降雨量: 47,
    },
    {
      name: "London",
      月份: "Jun.",
      月均降雨量: 20.3,
    },
    {
      name: "London",
      月份: "Jul.",
      月均降雨量: 24,
    },
    {
      name: "London",
      月份: "Aug.",
      月均降雨量: 35.6,
    },
    {
      name: "Berlin",
      月份: "Jan.",
      月均降雨量: 12.4,
    },
    {
      name: "Berlin",
      月份: "Feb.",
      月均降雨量: 23.2,
    },
    {
      name: "Berlin",
      月份: "Mar.",
      月均降雨量: 34.5,
    },
    {
      name: "Berlin",
      月份: "Apr.",
      月均降雨量: 99.7,
    },
    {
      name: "Berlin",
      月份: "May",
      月均降雨量: 52.6,
    },
    {
      name: "Berlin",
      月份: "Jun.",
      月均降雨量: 35.5,
    },
    {
      name: "Berlin",
      月份: "Jul.",
      月均降雨量: 37.4,
    },
    {
      name: "Berlin",
      月份: "Aug.",
      月均降雨量: 42.4,
    },
  ];
  var config = {
    data: data,
    isGroup: true,
    xField: "月份",
    yField: "月均降雨量",
    seriesField: "name",
    label: {
      position: "middle",
      layout: [
        { type: "interval-adjust-position" },
        { type: "interval-hide-overlap" },
        { type: "adjust-color" },
      ],
    },
  };
  return (
    <div style={{padding:"30px"}}>
      <Row gutter={[128, 64]}>
        <Col span={12}>
          <h4>Kuzatuvchilar</h4>
        </Col>
        <Col span={12}>
          <Select onChange={SelectOnchange} defaultValue="first">
            <Option value="first">Shu hafta</Option>
            <Option value="second">O'tgan hafta</Option>
            <Option value="third">Undan oldingi hafta</Option>
          </Select>
        </Col>
        <Col>
          <Column className="column_2" {...config} />
        </Col>
      </Row>
    </div>
  );
};

export default Kuzatuvchilar;
