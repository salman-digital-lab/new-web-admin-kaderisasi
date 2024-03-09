import { getProfilesReq, getProfilesResp } from "../../types/services/member";
import axios from "../axios";
import { handleError } from "../errorHandling";

export const getProfiles = async (props: getProfilesReq) => {
  try {
    const urlSearch = new URLSearchParams(props).toString();
    const res = await axios.get<getProfilesResp>("/profiles?" + urlSearch);
    return res.data.data;
  } catch (error) {
    handleError(error);
  }
};

export const getDataMemberDetail = async (id: string | undefined) => {
  try {
    const res = await axios.get(`/profiles/${id}`);
    console.log("response", res);
    return res.data.data;
  } catch (error) {
    handleError(error);
  }
};
