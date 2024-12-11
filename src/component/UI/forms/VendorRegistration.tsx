/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, InputNumber } from 'antd';


export const VendorRegistration = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values:any) => {
    console.log('Form Values:', values);
  };
  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: '20px' }}>
    <Form
      form={form}
      name="registration"
      onFinish={handleSubmit}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      layout="horizontal"
    >
      {/* Name Field */}
      <Form.Item
        label="Full Name"
        name="name"
        rules={[
          { required: true, message: 'Name is required!' },
          { max: 100, message: 'Name cannot be longer than 100 characters!' },
        ]}
      >
        <Input placeholder="Enter your full name" />
      </Form.Item>

      {/* Email Field */}
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { type: 'email', message: 'Please enter a valid email!' },
          { required: true, message: 'Email is required!' },
        ]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>

      {/* Contact Number Field */}
      <Form.Item
        label="Contact Number"
        name="contactNumber"
        rules={[
          { required: true, message: 'Contact number is required!' },
          {
            pattern: /^[0-9]{10}$/,
            message: 'Please enter a valid 10-digit phone number!',
          },
        ]}
      >
        <InputNumber
          style={{ width: '100%' }}
          placeholder="Enter your contact number"
          min={0}
          maxLength={10}
        />
      </Form.Item>

      {/* Address Field */}
      <Form.Item
        label="Address"
        name="address"
        rules={[
          { required: true, message: 'Address is required!' },
          { max: 200, message: 'Address cannot be longer than 200 characters!' },
        ]}
      >
        <Input.TextArea
          rows={4}
          placeholder="Enter your address"
        />
      </Form.Item>

      {/* Shop Name Field */}
      <Form.Item
        label="Shop Name"
        name="shopName"
        rules={[
          { required: true, message: 'Shop name is required!' },
          { max: 100, message: 'Shop name cannot be longer than 100 characters!' },
        ]}
      >
        <Input placeholder="Enter your shop name" />
      </Form.Item>

      {/* Shop Description Field */}
      <Form.Item
        label="Shop Description"
        name="shopDescription"
        rules={[
          { required: true, message: 'Shop description is required!' },
          { max: 500, message: 'Shop description cannot be longer than 500 characters!' },
        ]}
      >
        <Input.TextArea
          rows={4}
          placeholder="Enter a description of your shop"
        />
      </Form.Item>

      {/* Submit Button */}
      <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: 'center' }}>
        <Button type="primary" htmlType="submit" block>
          Register
        </Button>
      </Form.Item>
    </Form>
  </div>
  )
}
