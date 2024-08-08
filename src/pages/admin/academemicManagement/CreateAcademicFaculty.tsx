import { Button, Col, Flex } from "antd";
import PhFrom from "../../../components/form/PhFrom";
import PhFormInput from "../../../components/form/PhFormInput";
import { FieldValues } from "react-hook-form";
import { useAddAcademicFacultyMutation } from "../../../redux/feature/admin/academinmanagement.api";
import { TResponse } from "../../../redux/Types/global.types";
import { toast } from "sonner";

const CreateAcademicFaculty = () => {
  const [addFaculty] = useAddAcademicFacultyMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const res = (await addFaculty(data)) as TResponse;
    console.log(res);
    if (res.data?.success) {
      toast.success(res.data.message);
    }
  };

  return (
    <Flex justify="center">
      <Col span={12}>
        {" "}
        <PhFrom onSubmit={onSubmit}>
          <PhFormInput
            name="name"
            label="Academic Faculty"
            type="text"
          ></PhFormInput>
          <Button htmlType="submit">Create</Button>
        </PhFrom>
      </Col>
    </Flex>
  );
};

export default CreateAcademicFaculty;
