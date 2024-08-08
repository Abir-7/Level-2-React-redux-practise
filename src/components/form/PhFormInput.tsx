import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

const PhFormInput = ({
  type,
  name,
  label,
}: {
  type: string;
  name: string;
  label?: string;
}) => {
  return (
    <Controller
      name={name}
      render={({ field }) => {
        return (
          <Form.Item label={label}>
            <Input {...field} type={type} required />
          </Form.Item>
        );
      }}
    />
  );
};

export default PhFormInput;
