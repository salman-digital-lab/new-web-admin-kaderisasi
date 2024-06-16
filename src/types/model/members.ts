import { USER_LEVEL_ENUM } from "../../constants/enum/profile";

export type Member = {
  id: number;
  user_id: number | undefined;
  name: string;
  gender: "F" | "M" | undefined;
  personal_id: string | undefined;
  whatsapp: string | undefined;
  line: string | undefined;
  instagram: string | undefined;
  tiktok: string | undefined;
  linkedin: string | undefined;
  province_id: number | undefined;
  city_id: number | undefined;
  university_id: number | undefined;
  major: string | undefined;
  intake_year: string | undefined;
  level: USER_LEVEL_ENUM | undefined;
  created_at: string;
  updated_at: string;
};

export type PublicUser = {
  id: number;
  email: string;
  created_at: string;
  updated_at: string;
};

export type MemberList = Member & {
  publicUser: PublicUser;
};
