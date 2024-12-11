/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Select } from "antd";
import { Link,  } from "react-router";
import { useState } from "react";
import { VendorRegistration } from "../../component/UI/forms/VendorRegistration";
import CustomerRegistrationForm from "../../component/UI/forms/CustomerRegistrationForm";

type FieldType = {
  name: string;
  contactNumber?: string;
  address?: string;
  email: string;
  passWord: string;
  role: string;
  avatar?: any;
};

export default function Register() {

 
const [selectType, setSelectType]=useState("")
console.log(selectType)
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-100px)] my-5">
      <div className="border shadow-xl p-6">
        <p className="text-2xl text-center my-5 font-bold">Registration Form</p>
        <Form.Item<FieldType>
          label="Register as a"
          name="role"
          rules={[{ required: true, message: "Please input your email!" }]}>
          <Select
          onChange={(value)=> setSelectType(value)}
            style={{ width: "100%" }}
            placeholder="Search to Select"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              {
                value: "VENDOR",
                label: "VENDOR",
              },
              {
                value: "COSTOMER",
                label: "COSTOMER",
              },
            ]}
          />
        </Form.Item>
        {
          selectType === "VENDOR"?
          <VendorRegistration/>:
          <CustomerRegistrationForm/>
        }
        <p className="text-center">
          Already Registred?
          <Link to="/login">
            <span className="text-blue-600">Please Login!</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
