import { Button, Col, Flex } from "antd";
import PhFrom from "../../../components/form/PhFrom";
import PhFormInput from "../../../components/form/PhFormInput";
import { FieldValues } from "react-hook-form";
import PHSelect from "../../../components/form/PHSelect";
import {
  useAddAcademicDepartmentMutation,
  useGetAcademicFacultyQuery,
} from "../../../redux/feature/admin/academinmanagement.api";
import { toast } from "sonner";

const CreateAcademicDepartment = () => {
  const { data, isLoading } = useGetAcademicFacultyQuery("");

  const [addDepartment] = useAddAcademicDepartmentMutation();

  console.log(data?.data);

  const facultyOption = data?.data?.map((item) => ({
    label: item.name,
    value: item._id,
  }));

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const res = await addDepartment(data);
    if (res?.data?.success) {
      toast.success(res?.data?.message);
    }
  };
  return (
    <>
      {isLoading ? (
        <p>Loaing...</p>
      ) : (
        <Flex justify="center">
          <Col span={12}>
            {" "}
            <PhFrom onSubmit={onSubmit}>
              <PhFormInput
                name="name"
                label="Academic Faculty"
                type="text"
              ></PhFormInput>
              <PHSelect
                label="Faculty"
                options={facultyOption!}
                error="Academic faculty needed."
                name="academicFaculty"
              ></PHSelect>
              <Button htmlType="submit">Create</Button>
            </PhFrom>
          </Col>
        </Flex>
      )}
    </>
  );
};

export default CreateAcademicDepartment;
