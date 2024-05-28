import axios from "axios";
import Constants from "expo-constants";
import { BusinessNearbyRequest } from "../api-contracts/user/requests/business.request";
const extra = Constants.expoConfig!.extra!;
const SERVER_URL = process.env.EXPO_PUBLIC_SERVER_BASE_URL || extra.SERVER_URL;

export const getAllBusinesses = async () => {
  try {
    const headers = {
      "Content-Type": "application/json",
      cryptoresp: "false",
    };

    const url = `${SERVER_URL}/business/all`;

    const response = await axios.get(url, { headers });

    if (response.data == null) {
      console.log("Business data from API is null, using dummy data for now");

      return [];
    }

    const data = response.data;

    return data;
  } catch (error: any) {
    console.log("error from get all businesses api: ", error.message);
    return;
  }
};

export const findNearbyBusinesses = async (data: BusinessNearbyRequest) => {
  const reqBody = data;
  try {
    if (reqBody == null)
      throw new Error("Business request body cannot be null");

    const headers = {
      "Content-Type": "application/json",
      cryptoresp: "false",
    };

    const url = `${SERVER_URL}/business/nearby`;

    const response = await axios.post(url, reqBody, { headers });

    if (response.data == null)
      throw new Error("Error getting list of businesses");

    const data = response.data;

    return data;
  } catch (error) {
    console.log("error from get find nearby businesses api: ", error);
    return;
  }
};

/**
 * This retrieves businesses in paginated form
 */
export const retrieveBusinessList = async (page: number, pageSize: number) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      cryptoresp: "false",
    };

    const url = `${SERVER_URL}/business/list?page=${page}&pageSize=${pageSize}`;

    const response = await axios.get(url, { headers });

    if (response.data == null) {
      console.log("Business data from API is null, using dummy data for now");
      // TODO: show alert or loading icon
    }
    const data = response.data;

    return data;
  } catch (error) {
    console.log(
      "error from retrieveBusinesssList method: ",
      JSON.stringify(error, null, 2)
    );
    return;
  }
};
