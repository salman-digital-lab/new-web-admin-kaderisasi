import { Member, MemberList, PublicUser } from "../model/members";
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
    userData: PublicUser;
    profile: Member[];
  };
};

export type putProfileReq = {
  data: {
    gender?: string;
    whatsapp?: string;
    line?: string;
    instagram?: string;
    province_id?: number;
    city_id?: string;
    university_id?: number;
    major?: string;
    intake_year?: string;
    level?: number;
  };
};

export type putProfileResp = {
  message: string;
  data: Member;
};
