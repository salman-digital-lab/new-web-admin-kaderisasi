import {
  getProvincesReq,
  getProvincesResp,
} from "../../types/services/province";
import axios from "../axios";
import { handleError } from "../errorHandling";

export const getProvinces = async (props: getProvincesReq) => {
  try {
    const urlSearch = new URLSearchParams(props).toString();
    const res = await axios.get<getProvincesResp>("/provinces?" + urlSearch);
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

export const getDataProvinceId = async (id: string) => {
  try {
    const res = await axios.get<getProvincesResp>(`/provinces/${id}/cities`);
    console.log("hasil", res.data);
    return res.data;
  } catch (error) {
    handleError(error);
  }
};
