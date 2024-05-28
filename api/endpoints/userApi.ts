import { BusinessDto } from "./../../screens/browse/search-screen/data/data-types";
import { EncryptedResponse } from "./../api-contracts/user/responses/encrypted.response";
import axios from "axios";
import Constants from "expo-constants";
import { UpdateUserRequest } from "../api-contracts/user/requests/updateUser.request";
import { addToCache, getItemFromCache } from "../../store/cache/cache";
import {
  FAVOURITE_STORES,
  SELECTED_COUNTRY,
  USER_TOKEN,
} from "../../store/cache/cacheKeys";
import { decryptPayload, encryptPayload } from "../aws/crypto";
import { EncryptedRequestBody } from "../api-contracts/user/requests/encrypted.request";
import { ApiResponse } from "../api-contracts/user/responses/response";
import { Country } from "../../screens/onboarding/onboarding-questions-screens/props";
import { AddressRequest } from "../api-contracts/user/requests/dto/address.request";
import { UpdateUnitRequest } from "../api-contracts/user/requests/updateUnit.request";
import { BusinessRespDto } from "../api-contracts/user/responses/business.response";

import { FavouriteRespDto } from "../api-contracts/user/responses/favourite.response";

import { addAddressToCache, deleteAddressFromCache } from "../processor/address.processor";
const extra = Constants.expoConfig!.extra!;
const SERVER_URL = process.env.EXPO_PUBLIC_SERVER_BASE_URL || extra.SERVER_URL;

export const updateUserData = async (data: UpdateUserRequest) => {
  try {
    const encryptedData = await encryptPayload(data);

    const requestBody: EncryptedRequestBody = {
      payload: encryptedData,
    };

    const token = await getItemFromCache(USER_TOKEN);

    const headers = {
      "Content-Type": "application/json",
      authorization: `${token}`,
    };

    const url = `${SERVER_URL}/user/update`;

    const response = await axios.patch(url, requestBody, { headers });

    if (response.data == null) {
      console.log("User data from API is null, using dummy data for now");
      throw new Error("Update user API returned null response");
    }

    const encryptedResp: EncryptedResponse = response.data;

    console.log("encrypted response from update user api: ", encryptedResp);

    const responseData = await decryptPayload(encryptedResp.data);

    console.log("decrypted response from update user api: ", responseData);

    return responseData;
  } catch (error) {
    throw error;
  }
};

export const updateCountry = async (): Promise<ApiResponse> => {
  try {
    const country = (await getItemFromCache(SELECTED_COUNTRY)) as Country;
    const apiResp: ApiResponse = await updateUserData({
      countryOfOrigin: { id: country.id },
    });

    return apiResp;
  } catch (error) {
    throw error;
  }
};

export const getFavourites = async (): Promise<ApiResponse> => {
  try {
    const token = await getItemFromCache(USER_TOKEN);
    const headers = {
      "Content-Type": "application/json",
      authorization: `${token}`,
      cryptoresp: "false",
    };

    const url = `${SERVER_URL}/favourite/user`;

    const response = await axios.get(url, { headers });

    console.log("data from get favourites api: ", response.data);

    if (response.data == null) {
      console.log("Favourites data from API is null, using dummy data for now");
    }

    const data = response.data;

    return data;
  } catch (error: any) {
    console.log(
      "error from get favourites thunk: ",
      JSON.stringify(error, null, 2)
    );
    throw error;
  }
};

export const addFavourite = async (businessId: number) => {
  try {
    const token = await getItemFromCache(USER_TOKEN);

    const headers = {
      "Content-Type": "application/json",
      authorization: `${token}`,
      cryptoresp: "false",
    };

    const url = `${SERVER_URL}/favourite/add`;

    const reqBody = {
      business: { id: businessId },
    };

    const response = await axios.post(url, reqBody, { headers });

    console.log("data from add favourite api: ", response.data);

    if (response.data == null) {
      // TODO: default to dummy data
      console.log("Favourites data from API is null, using dummy data for now");
      return;
    }

    const data = response.data;

    console.log("data from add favourite api: ", data);

    // add to cache

    const currentFavourites = (await getItemFromCache(
      FAVOURITE_STORES
    )) as FavouriteRespDto[];

    addToCache({
      key: FAVOURITE_STORES,
      value: [...currentFavourites, data.payload],
    });

    return data.payload;
  } catch (error) {
    console.log(
      "error from add favourite thunk: ",
      JSON.stringify(error, null, 2)
    );
  }
};

export const removeFavourite = async (businessId: number) => {
  try {
    const token = await getItemFromCache(USER_TOKEN);
    const headers = {
      "Content-Type": "application/json",
      authorization: `${token}`,
      cryptoresp: "false",
    };

    const url = `${SERVER_URL}/favourite/remove`;
    const reqBody = {
      favourite: { business: { id: businessId } }, // passing just the business id in the favourite object
    };

    const response = await axios.post(url, reqBody, { headers });

    console.log("data from remove favourite api: ", response.data);

    if (response.data == null) {
      console.log("Favourites data from API is null, using dummy data for now");

      return [];
    }

    const data = response.data;

    const currentFavourites = (await getItemFromCache(
      FAVOURITE_STORES
    )) as FavouriteRespDto[];

    const newFavourites = currentFavourites.filter(
      (item) => item.business.id !== businessId
    );

    addToCache({
      key: FAVOURITE_STORES,
      value: newFavourites,
    });

    return data;
  } catch (error) {
    console.log("error from remove favourite thunk: ", error);
    return;
  }
};

/**
 *
 * @param Address
 * @returns the added address from the server
 */
export const addAddress = async (Address: {
  street: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
}): Promise<ApiResponse> => {
  try {
    const token = await getItemFromCache(USER_TOKEN);
    const headers = {
      "Content-Type": "application/json",
      authorization: `${token}`,
      cryptoresp: "false",
    };

    const url = `${SERVER_URL}/user/add-address`;

    const response = await axios.post(url, Address, { headers });

    console.log("add address response: ", response.data);

    if (response.data.status) {
      await addAddressToCache(response.data.payload);
      console.log("added address to cache");
    }

    return response.data;
  } catch (error) {
    console.log("error from adding address");
    console.log(JSON.stringify(error, null, 2));
    throw error;
  }
};

export const deleteAddress = async (addressId: number) => {
  try {
    const token = await getItemFromCache(USER_TOKEN);
    const headers = {
      "Content-Type": "application/json",
      authorization: `${token}`,
      cryptoresp: "false",
    };

    const url = `${SERVER_URL}/user/delete-address`;
    const reqBody = {
      addressId: addressId,
    };

    const response = await axios.delete(url, {
        headers: headers,
        data: reqBody
      }
    );

    console.log("delete address response: ", response.data);

    await deleteAddressFromCache(addressId);
    
    return response.data;
    
  } catch (error) {
    console.log("error deleting address: ", error);
    return;
  }
}

export const getAddresses = async (): Promise<ApiResponse> => {
  try {
    const token = await getItemFromCache(USER_TOKEN);
    const headers = {
      "Content-Type": "application/json",
      authorization: `${token}`,
      cryptoresp: "false",
    };

    const url = `${SERVER_URL}/user/get-address`;

    const response = await axios.get(url, { headers });

    return response.data;
  } catch (error) {
    console.log(
      "error from getting addresses: ",
      JSON.stringify(error, null, 2)
    );
    throw error;
  }
};

export const updateUnit = async (
  Address: UpdateUnitRequest
): Promise<ApiResponse> => {
  try {
    const token = await getItemFromCache(USER_TOKEN);
    const headers = {
      "Content-Type": "application/json",
      authorization: `${token}`,
      cryptoresp: "false",
    };

    const url = `${SERVER_URL}/user/update-unit`;

    const response = await axios.patch(url, Address, { headers });

    console.log("update address response: ", response.data);

    return response.data;
  } catch (error) {
    console.log(
      "error from updating address: ",
      JSON.stringify(error, null, 2)
    );
    throw error;
  }
};
