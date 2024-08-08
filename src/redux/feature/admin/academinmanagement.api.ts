import { BaseQueryApi } from "@reduxjs/toolkit/query";
import { baseApi } from "../../api/baseApi";
import {
  TAcademicFaculty,
  TAcademicSemester,
  TDataResponse,
} from "../../Types/global.types";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAcademicSemesters: builder.query({
      query: (args: { name: string; value: string }[]) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((element) => {
            params.append(element.name, element.value);
          });
        }
        return {
          url: "/academic-semesters",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (
        res: TDataResponse<TAcademicSemester[]> & BaseQueryApi
      ) => {
        console.log(res, "inside");
        return {
          data: res.data,
          meta: res.meta,
        };
      },
      transformErrorResponse: (res) => {
        console.log(res, "inside");
        return res;
      },
    }),
    addAcademicSemesters: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
    addAcademicFaculty: builder.mutation({
      query: (data) => ({
        url: "/academic-faculties/create-academic-faculty",
        method: "POST",
        body: data,
      }),
    }),
    getAcademicFaculty: builder.query({
      query: () => ({
        url: "/academic-faculties",
        method: "GET",
      }),
      transformResponse: (
        res: TDataResponse<TAcademicFaculty[]> & BaseQueryApi
      ) => {
        return {
          data: res.data,
          message: res.message,
          meta: res.meta,
        };
      },
    }),
    addAcademicDepartment: builder.mutation({
      query: (data) => ({
        url: "/academic-departments/create-academic-department",
        method: "POST",
        body: data,
      }),
    }),
    getAcademicDepartment: builder.query({
      query: () => ({
        url: "/academic-departments",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllAcademicSemestersQuery,
  useAddAcademicSemestersMutation,
  useAddAcademicFacultyMutation,
  useGetAcademicFacultyQuery,
  useAddAcademicDepartmentMutation,
  useGetAcademicDepartmentQuery,
} = academicManagementApi;
