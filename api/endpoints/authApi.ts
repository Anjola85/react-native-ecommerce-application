import axios from "axios";
import Constants from "expo-constants";
import { addToCache, getItemFromCache } from "../../store/cache/cache";
import { USER_TOKEN } from "../../store/cache/cacheKeys";
import { SecureLoginRequest } from "../api-contracts/user/requests/login.request";
import { LoginOtpRequest } from "../api-contracts/user/requests/loginOtp.request";
import { SignupRequest } from "../api-contracts/user/requests/signup.request";
import { SignupOtpRequest } from "../api-contracts/user/requests/signupOtp.request";
import { VerifyOtpRequest } from "../api-contracts/user/requests/verifyOtp.requet";
import { ApiResponse } from "../api-contracts/user/responses/response";
import { SendOtpResponse } from "../api-contracts/user/responses/sendOtp.response";
import { addUserInfoToCache } from "../processor/userInfo.processor";
import {
  otpMessageMapping,
  processErrorResponse,
} from "../../utils/error-handler";
import { LoginResponseDto } from "../api-contracts/user/responses/login.response";
import { SignupResponseDto } from "../api-contracts/user/responses/signup.response";
const extra = Constants.expoConfig!.extra!;
const SERVER_URL = process.env.EXPO_PUBLIC_SERVER_BASE_URL || extra.SERVER_URL;

/**
 *
 * There are errors thrown in this file, there should be a global error handler to cache
 * and meaningfully display a generic error to a user
 */

/**
 * This is only called by signup
 * @param data
 * @returns
 */
export const verifyOtp = async (
  data: VerifyOtpRequest
): Promise<ApiResponse> => {
  try {
    const token = await getItemFromCache(USER_TOKEN);

    const headers = {
      "Content-Type": "application/json",
      authorization: `${token}`,
      cryptoresp: "false",
    };

    const url = `${SERVER_URL}/auth/verifyOtp`;

    const response = await axios.post(url, data, { headers });

    // decrypt response
    const verifyOtpResponse: ApiResponse = response.data;

    console.log("decryptedResponse from verifyOtp thunk: ", verifyOtpResponse);

    return verifyOtpResponse;
  } catch (error: any) {
    const message = otpMessageMapping(error.response.status);

    const errorResponse = processErrorResponse<ApiResponse>(error, "verifyOtp");

    errorResponse.message = message;

    return errorResponse;
  }
};

/**
 *
 * @param data
 * @returns
 */
export const loginApi = async (data: SecureLoginRequest) => {
  try {
    const token = await getItemFromCache(USER_TOKEN);

    const headers = {
      "Content-Type": "application/json",
      authorization: `${token}`,
      cryptoresp: "false",
    };

    const requestBody = data;

    const url = `${SERVER_URL}/auth/login`;

    const response = await axios.post(url, requestBody, { headers });

    const apiResponse: ApiResponse = response.data;

    console.log("apiResponse from loginApi thunk: ", apiResponse);

    if (apiResponse.status) {
      const payload = new LoginResponseDto(
        apiResponse.payload.token,
        apiResponse.payload.userInfo
      );
      await addUserInfoToCache(payload);
    }
    return apiResponse;
  } catch (error: any) {
    const message = otpMessageMapping(error.response.status);

    const errorResponse = processErrorResponse<ApiResponse>(error, "loginApi");

    errorResponse.message = message;

    return errorResponse;
  }
};

/**
 *
 * @param data
 * @returns
 */
export const loginOtpRequest = async (
  data: LoginOtpRequest
): Promise<SendOtpResponse> => {
  try {
    const requestBody = data;

    const headers = {
      "Content-Type": "application/json",
      cryptoresp: "false",
    };

    const url = `${SERVER_URL}/auth/request-login`;

    const response = await axios.post(url, requestBody, {
      headers,
    });

    const apiResponse = response.data;

    const token = apiResponse.payload;

    // add token to cache
    addToCache({ key: USER_TOKEN, value: token });

    return apiResponse;
  } catch (error: any) {
    // error specific to login
    if (error.response && error.response.status == 404) {
      throw new Error("User not registered! Please sign up first!");
    }

    return processErrorResponse<SendOtpResponse>(error, "loginOtpRequest");
  }
};

/**
 *
 * @param data
 * @returns
 */
export const signupApi = async (data: SignupRequest) => {
  try {
    const requestBody = data;
    const token = await getItemFromCache(USER_TOKEN);

    const headers = {
      "Content-Type": "application/json",
      authorization: `${token}`,
      cryptoresp: "false",
    };

    const url = `${SERVER_URL}/auth/signup`;

    const response = await axios.post(url, requestBody, { headers });

    const responseData: ApiResponse = response.data;

    console.log("responseData from signupApi thunk: ", responseData);

    if (responseData.status) {
      const payload: SignupResponseDto = responseData.payload;
      await addUserInfoToCache(payload);
    }

    return responseData;
  } catch (error: any) {
    if (error.response && error.response.status == 409)
      throw new Error("User already exists!");

    throw error;
  }
};

/**
 *
 * @param data
 * @returns
 */
export const signupOtpRequest = async (
  data: SignupOtpRequest
): Promise<SendOtpResponse> => {
  try {
    const requestBody = data;

    const url = `${SERVER_URL}/auth/request-signup`;

    const response = await axios.post(url, requestBody, {
      headers: { cryptoresp: "false" },
    });

    const responseData: ApiResponse = response.data;

    console.log("responseData from signupOtpRequest thunk: ", responseData);

    const token = responseData.payload;
    // add token to cache
    await addToCache({ key: USER_TOKEN, value: token });

    return responseData;
  } catch (error: any) {
    return processErrorResponse<SendOtpResponse>(error, "signupOtpRequest");
  }
};

/**
 *
 * @param email
 * @throws error if user already exists
 */
export const registerEmail = async (email: string): Promise<void> => {
  try {
    const token = await getItemFromCache(USER_TOKEN);

    const requestBody = { email: email };

    const headers = {
      "Content-Type": "application/json",
      authorization: `${token}`,
      cryptoresp: "false",
    };
    const url = `${SERVER_URL}/auth/register-email`;

    const response = await axios.post(url, requestBody, { headers });

    console.log("response from registerEmail thunk: ", response.data);
  } catch (error: any) {
    if (error.response && error.response.status == 409) throw error;

    throw error;
  }
};

export const deleteAccount = async (
  deleteReason: string,
  deleteComment: string
) => {
  try {
    const token = await getItemFromCache(USER_TOKEN);

    const requestBody = {
      deleteReason,
      deleteComment,
    };

    const headers = {
      "Content-Type": "application/json",
      authorization: `${token}`,
      cryptoresp: "false",
    };

    const url = `${SERVER_URL}/auth/delete-user`;

    const response = await axios.post(url, requestBody, { headers });

    const apiResponse: ApiResponse = response.data;

    console.log("apiResponse from deleteAccount thunk: ", apiResponse);

    return apiResponse;
  } catch (error: any) {
    return processErrorResponse<ApiResponse>(error, "deleteAccount");
  }
};
