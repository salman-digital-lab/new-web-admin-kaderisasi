import axios from "../axios";
import { handleError } from "../errorHandling";
import {
  GetRuangCurhatsReq,
  GetRuangCurhatsResp,
} from "../../types/services/ruangcurhat";

export const getRuangCurhats = async (props: GetRuangCurhatsReq) => {
  try {
    const urlSearch = new URLSearchParams(props).toString();
    const res = await axios.get<GetRuangCurhatsResp>(
      "/ruang-curhat?" + urlSearch,
    );
    return res.data.data;
  } catch (error) {
    handleError(error);
  }
};
