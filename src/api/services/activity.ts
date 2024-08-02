import { notification } from "antd";
import { removeEmptyValueFromObj } from "../../functions";
import {
  getActivitiesResp,
  getActivitiesReq,
  getActivityResp,
  getRegistrantsResp,
  putActivityReq,
  getRegistrantReq,
  postActivityReq,
  putActivityResp,
  postActivityResp,
  postRegistrantsReq,
} from "../../types/services/activity";
import axios from "../axios";
import { handleError } from "../errorHandling";

export const getActivities = async (props: getActivitiesReq) => {
  try {
    const searchParams = removeEmptyValueFromObj(props);
    const urlSearch = new URLSearchParams(searchParams).toString();
    const res = await axios.get<getActivitiesResp>("/activities?" + urlSearch);
    return res.data.data;
  } catch (error) {
    handleError(error);
  }
};

export const getActivity = async (id: number) => {
  try {
    const res = await axios.get<getActivityResp>("/activities/" + id);
    return res.data.data;
  } catch (error) {
    handleError(error);
  }
};

export const putActivity = async (id: number, data: putActivityReq) => {
  try {
    const res = await axios.put<putActivityResp>("/activities/" + id, data);
    notification.success({
      message: "Berhasil",
      description: "Data berhasil diubah",
    });
    return res.data.data;
  } catch (error) {
    handleError(error);
  }
};

export const postActivity = async (data: postActivityReq) => {
  try {
    const res = await axios.post<postActivityResp>("/activities", data);
    notification.success({
      message: "Berhasil",
      description: "Kegiatan berhasil ditambahkan",
    });
    return res.data.data;
  } catch (error) {
    handleError(error);
  }
};

export const getRegistrants = async (
  id: string | undefined,
  params: getRegistrantReq,
) => {
  try {
    const searchParams = removeEmptyValueFromObj(params);
    const urlSearch = new URLSearchParams(searchParams).toString();
    const res = await axios.get<getRegistrantsResp>(
      `/activities/${id}/registrations?` + urlSearch,
    );
    return res.data.data;
  } catch (error) {
    handleError(error);
  }
};

export const postRegistrant = async (
  id: string | undefined,
  data: postRegistrantsReq,
) => {
  const res = await axios.post<getRegistrantsResp>(
    `/activities/${id}/registrations`,
    data,
  );
  return res.data.data;
};
