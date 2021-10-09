import React from "react";
import { Drawer, Image, Tabs, List, Card, Button, Descriptions } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toogleDrawer } from "../../redux/reducers/drawerSlice";
import user from "../../Images/user.jpg";
import {
  DollarOutlined,
  FilePdfOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { TabPane } = Tabs;

const descArr = [
  {
    title: "FullName",
    dataIndex: "full_name",
  },
  {
    title: "Telefon raqami",
    dataIndex: "phone",
  },
  {
    title: "E-mail",
    dataIndex: "email",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Job",
    dataIndex: "job",
  },
  {
    title: "Info source",
    dataIndex: "where_know",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "More info",
    dataIndex: "description",
  },
];

const ProfileDrawer = () => {
  const {
    drawer: show,
    row: { rowId },
    data: { dataSource, history },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Drawer
      width={340}
      placement="right"
      closable={true}
      onClose={() => dispatch(toogleDrawer())}
      visible={show}
    >
      <Tabs size="small" defaultActiveKey="1">
        <TabPane
          tab={
            <span>
              <UserOutlined />
              Personal
            </span>
          }
          key="1"
        >
          <List
            size="small"
            bordered
            itemLayout="horizontal"
            dataSource={dataSource.filter((elem) => elem.id === rowId)}
            renderItem={(item) => (
              <>
                <List.Item>
                  <Image src={item.image ?? user} width={200} />
                </List.Item>
                <List.Item>
                  <Descriptions
                    contentStyle={{ color: "#141414" }}
                    labelStyle={{
                      color: "#22075e",
                      fontWeight: "bold",
                      fontSize: "15px",
                    }}
                    column={1}
                  >
                    {descArr.map((obj) => (
                      <Descriptions.Item key={obj.dataIndex} label={obj.title}>
                        {item[obj.dataIndex] ?? "no info"}
                      </Descriptions.Item>
                    ))}
                  </Descriptions>
                </List.Item>
              </>
            )}
          />
        </TabPane>
        <TabPane
          tab={
            <span>
              <DollarOutlined />
              Operations
            </span>
          }
          key="2"
        >
          <List
            dataSource={history}
            renderItem={(item) => (
              <List.Item>
                <Card
                  headStyle={{ background: "#faad14" }}
                  bodyStyle={{ background: "#eaff8f" }}
                  title="Payment check"
                  style={{ width: 220, marginLeft: 20 }}
                  hoverable
                >
                  <Descriptions
                    contentStyle={{ color: "#a8071a" }}
                    labelStyle={{ color: "#003a8c", fontWeight: "bold" }}
                    column={1}
                  >
                    <Descriptions.Item label="Date">
                      {item.pay_time.slice(0, 10)}
                    </Descriptions.Item>
                    <Descriptions.Item label="Amount (sum)">
                      {item.amount}
                    </Descriptions.Item>
                    <Descriptions.Item label="Adminstrator">
                      {item.admin}
                    </Descriptions.Item>
                    <Descriptions.Item label="Description">
                      {item.description}
                    </Descriptions.Item>
                    <Descriptions.Item label="Check">
                      <Button
                        type="link"
                        href={item.check}
                        target="_blank"
                        icon={<FilePdfOutlined />}
                      >
                        Get pdf
                      </Button>
                    </Descriptions.Item>
                  </Descriptions>
                </Card>
              </List.Item>
            )}
          />
        </TabPane>
      </Tabs>
    </Drawer>
  );
};

export default ProfileDrawer;
