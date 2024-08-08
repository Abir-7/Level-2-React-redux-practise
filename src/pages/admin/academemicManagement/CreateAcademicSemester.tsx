import { FieldValues } from "react-hook-form";

import PhFrom from "../../../components/form/PhFrom";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAddAcademicSemestersMutation } from "../../../redux/feature/admin/academinmanagement.api";
import { toast } from "sonner";
import {
  academicSemesterSchema,
  TDataResponse,
} from "../../../redux/Types/global.types";

const nameOptions = [
  { value: "01", label: "Autumn" },
  { value: "02", label: "Summer" },
  { value: "03", label: "Fall" },
];

const yearOptions = [0, 1, 2].map((item) => ({
  value: String(new Date().getFullYear() + item),
  label: String(new Date().getFullYear() + item),
}));

const monthOptions = [
  { value: "January", label: "January" },
  { value: "February", label: "February" },
  { value: "March", label: "March" },
  { value: "April", label: "April" },
  { value: "May", label: "May" },
  { value: "June", label: "June" },
  { value: "July", label: "July" },
  { value: "August", label: "August" },
  { value: "September", label: "September" },
  { value: "October", label: "October" },
  { value: "November", label: "November" },
  { value: "December", label: "December" },
];

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemestersMutation();

  const onSubmit = async (data: FieldValues) => {
    const semester = {
      name: nameOptions[Number(data.name) - 1]?.label,
      code: data?.name,
      year: data?.year,
      startMonth: data?.startMonth,
      endMonth: data?.endMonth,
    };
    const res = (await addAcademicSemester(semester)) as TDataResponse;
    console.log(res);
    if (res.data) {
      toast.success("Semester Created Successfully");
    }
    console.log(res);
  };

  return (
    <Flex style={{ minHeight: "50vh" }} justify="center">
      <Col span={12}>
        <PhFrom
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <PHSelect
            options={nameOptions}
            error="Name field is requierd"
            name="name"
            label="Name"
          ></PHSelect>
          <PHSelect
            options={yearOptions}
            name="year"
            label="Year"
            error="Year field is requierd"
          ></PHSelect>

          <PHSelect
            options={monthOptions}
            name="startMonth"
            label="Start Month"
            error="Year field is requierd"
          ></PHSelect>

          <PHSelect
            options={monthOptions}
            name="endMonth"
            label="End Month"
            error="Year field is requierd"
          ></PHSelect>

          <Button htmlType="submit">Add</Button>
        </PhFrom>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
