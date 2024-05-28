import { AxiosError } from "axios";
import { storeData } from "../data";
import { delay, shuffleArray } from "../components/store-cards/utils";

export async function fakeFetchStores() {
  try {
    const response = {
      data: {
        stores: shuffleArray(storeData),
      },
    };

    await delay(2000);

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      //   return rejectWithValue(axiosError.response.data);
      console.log("axios Error: ", axiosError.response.data);
    } else {
      //   return rejectWithValue("Network error occurred.");
      console.log("Network error occurred.");
    }
  }
}
