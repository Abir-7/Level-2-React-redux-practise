import { z } from "zod";

export type TAcademicSemester = {
  code: string;
  createdAt: string;
  endMonth: string;
  name: string;
  startMonth: string;
  updatedAt: string;
  year: string;
  _id: string;
};

export type TAcademicFaculty = {
  _id: string;
  name: string;
};

export type TMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};

export type TDataResponse<T> = {
  data?: T;
  meta?: TMeta;
  success: boolean;
  message: string;
};

export const academicSemesterSchema = z.object({
  name: z.string({ required_error: "Please select a Name" }),
  year: z.string({ required_error: "Please select a Year" }),
  startMonth: z.string({ required_error: "Please select a Start Month" }),
  endMonth: z.string({ required_error: "Please select a End Month" }),
});

//////////////// error type //////////////////////////

interface SemesterData {
  name: string;
  year: string;
  code: string;
  startMonth: string;
  endMonth: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface ErrorSource {
  path: string;
  message: string;
}

interface ErrorResponse {
  status: number;
  data: {
    success: boolean;
    message: string;
    errorSources: ErrorSource[];
    stack: string;
  };
}

interface ResponseData {
  data: SemesterData;
  meta?: any; // Define this more specifically if needed
  success: boolean;
  message: string;
}

export interface TResponse {
  data?: ResponseData;
  error?: ErrorResponse;
}
