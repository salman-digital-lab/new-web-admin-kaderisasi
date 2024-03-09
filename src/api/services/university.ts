import { DataMaster } from "../../types";
import {
  getUniversitiesReq,
  getUniversitiesResp,
} from "../../types/services/university";
import axios from "../axios";
import { handleError } from "../errorHandling";

export const getUniversities = async (props: getUniversitiesReq) => {
  try {
    const urlSearch = new URLSearchParams(props).toString();
    const res = await axios.get<getUniversitiesResp>(
      "/universities?" + urlSearch
    );
    return res.data.data;
  } catch (error) {
    handleError(error);
  }
};

export const getDataUniversity = async () => {
  try {
    const res = await axios.get("/universities");
    return res.data.data.data;
  } catch (error) {
    handleError(error);
  }
};

export const addUniversity = async (data: DataMaster) => {
  try {
    const res = await axios.post("/universities", data);
    console.log("add", res);
    return res.data.data.data;
  } catch (error) {
    handleError(error);
  }
};

export const editUniversity = async (id: number, data: DataMaster) => {
  try {
    await axios
      .put(`/universities/${id}`, data)
      .then((res) => {
        getDataUniversity();
        const result = res;
        // console.log('data', result)
        return result;
      })
      .catch((err) => {
        console.log(err);
        // return result
      });
    // console.log('edit',res)
    // return res.data.data.data;
  } catch (error) {
    handleError(error);
  }
};
