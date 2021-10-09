import React from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import FormComp from "../form/FormComp";
import { ErrorMsg } from "../../Notifications/Message";
import { closeModal } from "../../redux/reducers/modalSlice";
import { dataTransform } from "../../features/dataTransform";

const ModalComp = ({ url, columns, form }) => {
  const { visible, title } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  return (
    <Modal
      width={400}
      visible={visible}
      title={title}
      onCancel={() => {
        dispatch(closeModal());
        form.resetFields();
      }}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            dataTransform(values, url);
            form.resetFields();
            dispatch(closeModal());
          })
          .catch(() => {
            ErrorMsg("Validate Failed");
          });
      }}
    >
      <FormComp url={url} columns={columns} form={form} />
    </Modal>
  );
};

export default ModalComp;
