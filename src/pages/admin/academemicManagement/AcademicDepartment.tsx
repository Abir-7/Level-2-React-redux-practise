/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAcademicDepartmentQuery } from "../../../redux/feature/admin/academinmanagement.api";

const AcademicDepartment = () => {
  const { isLoading, data } = useGetAcademicDepartmentQuery(null);
  console.log(data, isLoading);

  interface DataType {
    key: React.Key;
    name: string;
  }

  const columns: TableColumnsType<DataType> = [
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      key: "academicFaculty",
      title: "Academic Faculty",
      dataIndex: "academicFaculty",
      showSorterTooltip: { target: "full-header" },
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
  ];

  const tableData = data?.data?.map((data: any) => {
    return {
      key: data._id,
      name: data.name,
      academicFaculty: data.academicFaculty?.name,
    };
  });

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <Table
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicDepartment;
