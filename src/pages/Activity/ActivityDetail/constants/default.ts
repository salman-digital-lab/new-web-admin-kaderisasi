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
  type: "text" | "number" | "dropdown"
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
