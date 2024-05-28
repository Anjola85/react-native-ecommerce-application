import axios from "axios";
import Constants from "expo-constants";
const extra = Constants.expoConfig!.extra!;
const SERVER_URL = process.env.EXPO_PUBLIC_SERVER_BASE_URL || extra.SERVER_URL;

export const getCountries = async () => {
  try {
    const headers = {
      "Content-Type": "application/json",
      crypto: false,
    };

    const url = `${SERVER_URL}/country/all`;

    const response = await axios.get(url, { headers });

    console.log("data from get countries api: ", response.data);

    if (response.data == null) {
      console.log("Countries data from API is null, using dummy data for now");
    }

    const data = response.data;

    return data;
  } catch (error) {
    console.log("error from get all countries thunk: ", error);
    return;
  }
};

export const getRegions = async () => {
  try {
    const headers = {
      "Content-Type": "application/json",
      crypto: false,
    };

    const url = `${SERVER_URL}/region/all`;

    const response = await axios.get(url, { headers });

    console.log("data from get regions api: ", response.data);

    if (response.data == null) {
      console.log("Regions data from API is null, using dummy data for now");
    }

    const data = response.data;

    return data;
  } catch (error) {
    console.log("error from get all regions thunk: ", error);
    return;
  }
};
