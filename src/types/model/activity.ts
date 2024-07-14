export type Questionnaire =
  | {
      id?: number;
      type: "text" | "number";
      label: string;
      name: string;
      required: boolean;
    }
  | {
      id?: number;
      type: "dropdown";
      label: string;
      name: string;
      required: boolean;
      data: { label: string; value: string; id: number }[];
    };

export type MandatoryProfileData = {
  name: string;
  required: boolean;
};

export type Activity = {
  id: number;
  name: string;
  slug: string;
  description: string;
  activity_start: string;
  activity_end: string;
  registration_start: string;
  registration_end: string;
  selection_start: string;
  selection_end: string;
  minimum_level: number;
  activity_type: number;
  activity_category: number;
  images: string[];
  additional_config: {
    additional_questionnaire?: Questionnaire[];
    custom_selection_data?: string[];
    mandatory_profile_data?: MandatoryProfileData[];
    images?: string[];
  };
  is_published: number;
  created_at: string;
  updated_at: string;
};

export type Registrant = {
  id: number;
  user_id: number;
  activity_id: number;
  status: string;
  questionnaire_answer: string;
  created_at: string;
  updated_at: string;
};
