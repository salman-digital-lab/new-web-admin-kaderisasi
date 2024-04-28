import {
  ProfileQuestionnaire,
  Questionnaire,
} from "../../../../types/model/activity";
import { Member } from "../../../../types/model/members";

export const QUESTION_DEFAULT = {
  text: {
    name: `question${Math.floor(Math.random() * 10000)}`,
    type: "text",
    label: "",
    required: false,
  },
  number: {
    name: `question${Math.floor(Math.random() * 10000)}`,
    type: "number",
    label: "",
    required: false,
  },
  dropdown: {
    name: `question${Math.floor(Math.random() * 10000)}`,
    type: "dropdown",
    label: "",
    required: false,
    data: [],
  },
} as Record<string, Questionnaire>;

export const generateDefaultQuestion = (
  type: "text" | "number" | "dropdown" | "textarea",
): Questionnaire => {
  switch (type) {
    case "text":
      return {
        name: `question${Math.floor(Math.random() * 10000)}`,
        type: "text",
        label: "",
        required: false,
      };
    case "textarea":
      return {
        name: `question${Math.floor(Math.random() * 10000)}`,
        type: "textarea",
        label: "",
        required: false,
      };
    case "number":
      return {
        name: `question${Math.floor(Math.random() * 10000)}`,
        type: "number",
        label: "",
        required: false,
      };
    case "dropdown":
      return {
        name: `question${Math.floor(Math.random() * 10000)}`,
        type: "dropdown",
        label: "",
        required: false,
        data: [],
      };
    default:
      return {
        name: `question${Math.floor(Math.random() * 10000)}`,
        type: "text",
        label: "",
        required: false,
      };
  }
};

export const generateMandatoryQuestion = (
  type: keyof Member,
): ProfileQuestionnaire => {
  switch (type) {
    case "personal_id":
      return {
        name: "personal_id",
        required: false,
      };
    case "gender":
      return {
        name: "gender",
        required: false,
      };
    case "whatsapp":
      return {
        name: "whatsapp",
        required: false,
      };
    case "tiktok":
      return {
        name: "tiktok",
        required: false,
      };
    case "linkedin":
      return {
        name: "linkedin",
        required: false,
      };
    case "line":
      return {
        name: "line",
        required: false,
      };
    case "instagram":
      return {
        name: "instagram",
        required: false,
      };
    case "province_id":
      return {
        name: "province_id",
        required: false,
      };
    case "university_id":
      return {
        name: "university_id",
        required: false,
      };
    case "major":
      return {
        name: "major",
        required: false,
      };
    case "intake_year":
      return {
        name: "intake_year",
        required: false,
      };
    case "university_temp":
      return {
        name: "university_temp",
        required: false,
      };

    default:
      return {
        name: "personal_id",
        required: false,
      };
  }
};

export const PROFILE_FIELD_OPTIONS = [
  {
    label: "Nomor KTP",
    value: "personal_id",
  },

  {
    label: "Jenis Kelamin",
    value: "gender",
  },
  {
    label: "Nomor Whatsapp",
    value: "whatsapp",
  },
  {
    label: "Akun Tiktok",
    value: "tiktok",
  },
  {
    label: "Akun Linkedin",
    value: "linkedin",
  },
  {
    label: "Akun Line",
    value: "line",
  },
  {
    label: "Akun Instagram",
    value: "instagram",
  },

  {
    label: "Provinsi Domisili",
    value: "province_id",
  },
  {
    label: "Universitas",
    value: "university_id",
  },
  {
    label: "Universitas (Temp)",
    value: "university_temp",
  },
  {
    label: "Jurusan",
    value: "major",
  },
  {
    label: "Angkatan/Tahun Masik",
    value: "intake_year",
  },
];
