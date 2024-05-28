import axios from "axios";
import Constants from "expo-constants";
import { BusinessNearbyRequest } from "../api-contracts/user/requests/business.request";
import { decryptPayload } from "../aws/crypto";
const extra = Constants.expoConfig!.extra!;
const SERVER_URL = process.env.EXPO_PUBLIC_SERVER_BASE_URL || extra.SERVER_URL;

export const getAllContinents = async () => {
  try {
    const headers = {
      "Content-Type": "application/json",
      crypto: "false",
    };

    const url = `${SERVER_URL}/continent/all`;

    const response = await axios.get(url, { headers });

    if (response.data == null) {
      console.log("Continent data from API is null, using dummy data for now");

      return [];
    }

    const data = response.data;

    return data;
  } catch (error) {
    console.log(
      "error from get all continents api: ",
      JSON.stringify(error, null, 2)
    );
    return;
  }
};
