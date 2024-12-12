/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {  FormProps,  } from "antd";
import { useNavigate } from "react-router";
import { toast } from "sonner";

type FieldType = {
  name: string;
  contactNumber?: string;
  address?: string;
  email: string;
  passWord: string;
  role: string;
  avatar?: any;
};

const CustomerRegistrationForm = () => {
  const navigate = useNavigate();

  const normFile = (e: { file: File; fileList: FileList }) => {
    // if (Array.isArray(e)) {
    //   return e;
    // }
    return e?.file;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const { avatar, ...data } = values;
    console.log(data);
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("file", avatar?.originFileObj);
    const toastId = toast.loading("Creating ....");
    // try {

    //   if (result.data.data.success) {
    //     toast.success(`${result?.message}`, {
    //       id: toastId,
    //       duration: 2000,
    //     });
    //     navigate(`/login`);
    //   }
    // } catch (error: any) {
    //   toast.error(`${error?.message}`, {
    //     id: toastId,
    //     duration: 2000,
    //   });
    // }
  };

  return (
    <div>
      customer 
    </div>
  );
};

export default CustomerRegistrationForm;
