import { Questionnaire } from "../../../../types/model/activity";

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
  type: "text" | "number" | "dropdown",
): Questionnaire => {
  switch (type) {
    case "text":
      return {
        name: `question${Math.floor(Math.random() * 10000)}`,
        type: "text",
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
    label: "Jurusan",
    value: "major",
  },
  {
    label: "Angkatan/Tahun Masik",
    value: "intake_year",
  },
];
