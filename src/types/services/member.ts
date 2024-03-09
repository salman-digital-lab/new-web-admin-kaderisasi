import { Member } from "../model/members";
import { Pagination } from "./base";

export type getProfilesResp = {
  message: string;
  data: {
    meta: Pagination;
    data: Member[];
  };
};

export type getProfilesReq = {
  per_page: string;
  page: string;
  search: string;
};
