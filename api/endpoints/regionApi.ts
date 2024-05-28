import axios from "axios";
import Constants from "expo-constants";
import { addToCache } from "../../store/cache/cache";
import { REGIONS } from "../../store/cache/cacheKeys";
import { ApiResponse } from "../api-contracts/user/responses/response";
import { processErrorResponse } from "../../utils/error-handler";

const extra = Constants.expoConfig!.extra!;
const SERVER_URL = process.env.EXPO_PUBLIC_SERVER_BASE_URL || extra.SERVER_URL;

export const getAllRegions= async (): Promise<ApiResponse>  => {
  try {
    const headers = {
      "Content-Type": "application/json",
      cryptoresp: "false",
    };

    const url = `${SERVER_URL}/region/all`;

    console.log("fetching all regions from api...")
    const response = await axios.get(url, { headers });

    if (response.data == null) {
      console.log("Region data from API is null, using dummy data for now");

      return {status: false, message: "Region data from API is null", payload: {}};
    }

    const data = response.data;

    await addToCache({key: REGIONS, value: data.payload.result.regionList})

    return data;
  } catch (error: any) {
    console.log(
      "error from get all regions api: ",
      JSON.stringify(error, null, 2)
    );
    const errorResponse = processErrorResponse<ApiResponse>(error, "getAllRegions");

    return errorResponse;
  }
};
