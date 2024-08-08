/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetAllAcademicSemestersQuery } from "../../../redux/feature/admin/academinmanagement.api";

import { Button, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { TAcademicSemester } from "../../../redux/Types/global.types";
import { useState } from "react";

type DataType = { key: TAcademicSemester["_id"] } & Pick<
  TAcademicSemester,
  "name" | "endMonth" | "startMonth" | "year"
>;

const AcademicSemesterPage = () => {
  const [fiterOptions, setFilterOptions] = useState<
    [] | { name: string; value: string }[]
  >([]);
  const { data, isError, error, isFetching, isLoading } =
    useGetAllAcademicSemestersQuery(fiterOptions);
  console.log(isError, data, error);
  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      filters: [
        ...new Set(data?.data!.map((item: TAcademicSemester) => item.name)),
      ].map((item) => ({ text: item as string, value: item as string })),
    },
    {
      title: "Year",
      key: "year",
      dataIndex: "year",
      defaultSortOrder: "descend",
      filters: [
        ...new Set(data?.data!.map((item: TAcademicSemester) => item.year)),
      ].map((item) => ({ text: item as string, value: item as string })),
    },
    {
      title: "Start Month",
      key: "startMonth",
      dataIndex: "startMonth",
      filters: [
        ...new Set(
          data?.data!.map((item: TAcademicSemester) => item.startMonth)
        ),
      ].map((item) => ({ text: item as string, value: item as string })),
      onFilter: (value, record) =>
        record.startMonth.indexOf(value as string) === 0,
    },
    {
      title: "End Month",
      key: "endMonth",
      dataIndex: "endMonth",
      filters: [
        ...new Set(data?.data!.map((item: TAcademicSemester) => item.endMonth)),
      ].map((item) => ({ text: item as string, value: item as string })),
      onFilter: (value, record) =>
        record.endMonth.indexOf(value as string) === 0,
    },
    {
      title: "Action",
      key: "action",
      render: () => {
        return (
          <div>
            <Button>Update</Button>
            <Button>Delete</Button>
          </div>
        );
      },
    },
  ];

  const tableData = data?.data?.map(
    ({ _id, endMonth, startMonth, name, year }) => {
      return {
        key: _id,
        name,
        year,
        startMonth,
        endMonth,
      };
    }
  );

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log(filters);
    const filterOption: { name: string; value: string }[] = [];
    if (extra.action == "filter") {
      filters.name?.forEach((item) => {
        return filterOption.push({ name: "name", value: item as string });
      });
      filters.year?.forEach((item) => {
        return filterOption.push({ name: "year", value: item as string });
      });
    }

    setFilterOptions(filterOption);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicSemesterPage;
