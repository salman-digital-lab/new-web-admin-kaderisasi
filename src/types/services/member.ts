import { Member, MemberList } from "../model/members";
import { Pagination } from "./base";

export type getProfilesResp = {
  message: string;
  data: {
    meta: Pagination;
    data: MemberList[];
  };
};

export type getProfilesReq = {
  per_page: string;
  page: string;
  search?: string;
};

export type getProfileResp = {
  message: string;
  data: {
    profile: MemberList[];
  };
};

export type putProfileReq = {
  data: Partial<Omit<Member, "id" | "user_id" | "created_at" | "updated_at">>;
};

export type putProfileResp = {
  message: string;
  data: Member;
};
