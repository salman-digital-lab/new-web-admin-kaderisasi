import { Activity, ActivityGet, Registrant } from "../model/activity";
import { Pagination } from "./base";

export type getActivitiesReq = {
  per_page: string;
  page: string;
  search?: string;
  activity_type?: string;
};

export type getActivitiesResp = {
  message: string;
  data: {
    meta: Pagination;
    data: ActivityGet[];
  };
};

export type getActivityResp = {
  message: string;
  data: ActivityGet;
};

export type getRegistrantsResp = {
  message: string;
  data: {
    meta: Pagination;
    data: Registrant[];
  };
};

export type putActivityReq = Partial<Activity>;

export type getRegistrantReq = {
  per_page: string;
  page: string;
  name?: string;
};
