import axios from "axios";
import Constants from "expo-constants";
import { FeedbackRespDto } from "../api-contracts/user/responses/feedback.response";
import { FeedbackReqDto } from "../api-contracts/user/requests/feedback.request";
const extra = Constants.expoConfig!.extra!;
const SERVER_URL = process.env.EXPO_PUBLIC_SERVER_BASE_URL || extra.SERVER_URL;

export const postFeedback = async (
  reqBody: FeedbackReqDto
): Promise<FeedbackRespDto> => {
  try {
    const headers = {
      "Content-Type": "application/json",
      crypto: false,
    };

    const url = `${SERVER_URL}/feedback/add`;

    const response = await axios.post(url, reqBody, { headers });

    console.log("data from post feedback api: ", response.data);

    if (response.data == null) {
      console.log("Feedback data from API is null, using dummy data for now");

      return {} as FeedbackRespDto;
    }

    const data: FeedbackRespDto = response.data;

    return data;
  } catch (error) {
    console.log("error from post feedback thunk: ", error);
    return {} as FeedbackRespDto;
  }
};

export const getFeedback = async () => {
  try {
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${extra.TOKEN}`,
      crypto: false,
    };

    const url = `${SERVER_URL}/feedback/all`;

    const response = await axios.get(url, { headers });

    console.log("data from get feedback api: ", response.data);

    if (response.data == null) {
      console.log("Feedback data from API is null, using dummy data for now");

      return [];
    }

    const data = response.data;

    return data;
  } catch (error) {
    console.log("error from get feedback thunk: ", error);
    return;
  }
};
