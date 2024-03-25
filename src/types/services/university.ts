import { University } from "../model/university";
import { Pagination } from "./base";

export type getUniversitiesResp = {
  message: string;
  data: {
    meta: Pagination;
    data: University[];
  };
};

export type getUniversitiesReq = {
  per_page: string;
  page: string;
  search?: string;
};

export type universityReq = {
  data: {
    name?: string;
  };
};

export type universityResp = {
  message: string;
  data: University;
};
