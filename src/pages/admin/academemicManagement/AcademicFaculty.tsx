import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAcademicFacultyQuery } from "../../../redux/feature/admin/academinmanagement.api";

const AcademicFaculty = () => {
  const { data } = useGetAcademicFacultyQuery(null);
  console.log(data);

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
  ];

  const tableData = data?.data?.map((data) => {
    return { key: data._id, name: data.name };
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

export default AcademicFaculty;
