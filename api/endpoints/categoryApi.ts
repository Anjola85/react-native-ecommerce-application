import axios from "axios";
import Constants from "expo-constants";
const extra = Constants.expoConfig!.extra!;
const SERVER_URL = process.env.EXPO_PUBLIC_SERVER_BASE_URL || extra.SERVER_URL;

export const getCategories = async () => {
  try {
    const headers = {
      "Content-Type": "application/json",
      crypto: false,
    };

    const url = `${SERVER_URL}/category/all`;

    const response = await axios.get(url, { headers });

    console.log("data from get categories api: ", response.data);

    if (response.data == null) {
      console.log("Category data from API is null, using dummy data for now");
      // TODO: use dummy data
    }

    const data = response.data;

    let categoryNames: string[];

    if (data.payload.result == null) categoryNames = [];
    else categoryNames = data.payload.result.map((category) => category.name);

    return categoryNames;
  } catch (error) {
    console.log("error from login thunk: ", error);
    return;
  }
};
