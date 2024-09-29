import { RuangCurhatData } from "../model/ruangcurhat";
import { Pagination } from "./base";

export type GetRuangCurhatsResp = {
  message: string;
  data: {
    meta: Pagination;
    data: RuangCurhatData[];
  };
};

export type GetRuangCurhatsReq = {
  per_page: string;
  page: string;
};
