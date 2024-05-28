/**
 *
 * @see store suggestion related api calls
 *
 */

import axios from "axios";
import Constants from "expo-constants";
import { StoreSuggestionReqDto } from "../api-contracts/user/requests/storeSuggestion.request";
import { StoreSuggestionRespDto } from "./../api-contracts/user/responses/storeSuggestion.response";
const extra = Constants.expoConfig!.extra!;
const SERVER_URL = process.env.EXPO_PUBLIC_SERVER_BASE_URL || extra.SERVER_URL;

// add store suggestion
export const addStoreSuggestion = async (
  reqBody: StoreSuggestionReqDto
): Promise<StoreSuggestionRespDto> => {
  try {
    const headers = {
      "Content-Type": "application/json",
      crypto: false,
    };

    const url = `${SERVER_URL}/feedback/add`;

    const response = await axios.post(url, reqBody, { headers });

    console.log("data from add store suggestion api: ", response.data);

    if (response.data == null) {
      console.log(
        "Store suggestion data from API is null, using dummy data for now"
      );

      return {} as StoreSuggestionRespDto;
    }

    const data: StoreSuggestionRespDto = response.data;

    return data;
  } catch (error) {
    console.log("error from add store suggestion thunk: ", error);
    return {} as StoreSuggestionRespDto;
  }
};
