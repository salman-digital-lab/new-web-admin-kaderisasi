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
};
