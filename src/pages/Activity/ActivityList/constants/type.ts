import {
  ACTIVITY_CATEGORY_ENUM,
  ACTIVITY_TYPE_ENUM,
} from "../../../../constants/enum/activity";

export type FilterType = {
  page: number;
  per_page: number;
  name: string;
  activity_type?: ACTIVITY_TYPE_ENUM;
  activity_category?: ACTIVITY_CATEGORY_ENUM;
};
