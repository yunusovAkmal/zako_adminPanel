import React from "react";
import { Form } from "antd";
import FormItem from "./FormItem";

const FormComp = ({ form, url, columns }) => {
  return (
    <Form form={form} layout="vertical" name="form_in_modal">
      <FormItem url={url} columns={columns} />
    </Form>
  );
};

export default FormComp;
