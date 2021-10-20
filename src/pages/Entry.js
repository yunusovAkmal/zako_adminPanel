import React, { useCallback, useEffect, useState } from "react";
import { Card, Row } from "antd";
import { HOST } from "../server/axios";
import axios from "axios";
import { RingProgress } from "@ant-design/charts";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import { GetItem } from "../helpers/localStorage";
import HolatiBoyicha from "./HolatiBoyicha";
import Kuzatuvchilar from "./Kuzatuvchilar";

const Entry = () => {
  const [data_1, setData] = useState([]);
  const [opdata, setOpdata] = useState([]);
  const token = GetItem();

  const StudentList = useCallback(() => {
    axios(`${HOST}/student`, {
      headers: {
        Authorization: "Token " + token,
      },
    })
      .then((object) => {
        setData(object.data);
      })
      .catch((error) => console.log(error));
  }, [token])
  const GetStudentsWithoutGroup = useCallback(() => {
    axios(`${HOST}/student_by_group/${0}`, {
      headers: {
        Authorization: "Token " + token,
      },
    }).then((res) => {
      setOpdata(res.data);
    });
  }, [token])
  useEffect(() => {
    GetStudentsWithoutGroup();
    StudentList();
  }, [GetStudentsWithoutGroup, StudentList]);

  var config = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: data_1.length / 100,
    color: ["#73d13d", "#f6ffed"],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        style: {
          color: "#363636",
          fontSize: "10px",
          lineHeight: "14px",
        },
        formatter: function formatter() {
          return "Umumiy talabalar";
        },
      },
    },
  };
  var config_1 = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: opdata.length / 100,
    color: ["#ff4d4f", "#fff1f0"],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        style: {
          color: "#363636",
          fontSize: "12px",
          lineHeight: "14px",
        },
        formatter: function formatter() {
          return `Ketib qolganlar`;
        },
      },
    },
  };
  var config_2 = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: opdata.length / 100,
    color: ["#fadb14", "#feffe6"],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        style: {
          color: "#363636",
          fontSize: "12px",
          lineHeight: "14px",
        },
        formatter: function formatter() {
          return `Qabuldagilar`;
        },
      },
    },
  };
  return (
    <div className="home_entry">
      <Row>
        <div className="entry_display_grid">
          <div className="entry_display_grid_first">
            <Card
              size="default"
              bordered
              hoverable
              style={{
                borderRadius: "12px",
                display: "flex",
                padding: "20px",
              }}
            >
              <div className="entry_stat">
                <div className="extra_infos">
                  <h4>2020 yil</h4>
                  <h1>4 000</h1>
                </div>
                <div className="ringprogress">
                  <RingProgress {...config} />
                </div>
              </div>
            </Card>
            <Card
              size="default"
              bordered
              hoverable
              style={{
                borderRadius: "12px",
                display: "flex",
                padding: "20px",
              }}
            >
              <div className="entry_stat">
                <div className="extra_infos">
                  <h4>2020 yil</h4>
                  <h1>4 000</h1>
                </div>
                <div className="ringprogress">
                  <RingProgress {...config_1} />
                </div>
              </div>
            </Card>
            <Card
              size="default"
              bordered
              hoverable
              style={{
                borderRadius: "12px",
                display: "flex",
                padding: "20px",
              }}
            >
              <div className="entry_stat">
                <div className="extra_infos">
                  <h4>2020 yil</h4>
                  <h1>3 000</h1>
                </div>
                <div className="ringprogress">
                  <RingProgress {...config_2} />
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div
          className="entry_display_grid_2"
          style={{ width: "95%", margin: "0 auto" }}
        >
          <Card
            size="default"
            bordered
            hoverable
            style={{
              borderRadius: "12px",
              display: "flex",
              padding: "0",

            }}
          >
            <HolatiBoyicha />
          </Card>
          <Card
            size="default"
            bordered
            hoverable
            style={{
              borderRadius: "12px",
              padding: "0px",
              cursor: "pointer",
            }}
          >
            <Kuzatuvchilar />
          </Card>
        </div>
        <div className="entry_display_grid">
          <Card
            size="default"
            bordered
            hoverable
            style={{
              borderRadius: "12px",
              padding: "0px",
              cursor: "pointer",
            }}
          >
            <PieChart />
          </Card>
          <Card
            size="default"
            bordered
            hoverable
            style={{
              borderRadius: "12px",
              padding: "0px",
              cursor: "pointer",
            }}
          >
            <PieChart />
          </Card>
          <Card
            size="default"
            bordered
            hoverable
            style={{
              borderRadius: "12px",
              padding: "20px",
              cursor: "pointer",
            }}
          >
            <LineChart />
          </Card>
        </div>
      </Row>
    </div>
  );
};
export default Entry;
