import { USER_LEVEL_ENUM } from "../../constants/enum/profile";

export type Member = {
  id: number;
  user_id: number;
  name: string;
  gender: "F" | "M";
  whatsapp: string;
  line: string;
  instagram: string;
  province_id: number;
  city_id: number;
  university_id: number;
  major: string;
  intake_year: number;
  level: USER_LEVEL_ENUM;
  created_at: string;
  updated_at: string;
  publicUser: {
    id: number;
    email: string;
    created_at: string;
    updated_at: string;
  };
};
