import { Form, Select } from "antd";

import { Controller } from "react-hook-form";

const PHSelect = ({
  name,
  label,
  options,
  error,
}: {
  name: string;
  label?: string;
  options: { value: string; label: string }[];
  error: string;
}) => {
  return (
    <Controller
      rules={{ required: error }}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select placeholder="Select Faculty" {...field} options={options} />
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
