// import { Mobile } from "../../dto";
import { AddressRequest } from "../../api/api-contracts/user/requests/dto/address.request";
import { MobileRequest } from "../../api/api-contracts/user/requests/dto/mobile.request";
import { SignupRequest } from "../../api/api-contracts/user/requests/signup.request";
import { Country } from "../../screens/onboarding/onboarding-questions-screens/props";
import { getItemFromCache } from "./cache";
import {
  USER_FIRST_NAME,
  USER_LAST_NAME,
  USER_EMAIL,
  USER_MOBILE,
  USER_ADDRESS,
  SELECTED_COUNTRY,
} from "./cacheKeys";

export async function getUserSignupDataFromCache(): Promise<SignupRequest> {
  const [
    userMobile,
    userFirstname,
    userLastname,
    userEmail,
    userAddress,
    userCountry,
  ] = await Promise.all([
    getItemFromCache(USER_MOBILE),
    getItemFromCache(USER_FIRST_NAME),
    getItemFromCache(USER_LAST_NAME),
    getItemFromCache(USER_EMAIL),
    getItemFromCache(USER_ADDRESS, true),
    getItemFromCache(SELECTED_COUNTRY),
  ]);

  const DEFAULT_CUSTOMER_VALUE = "customer";

  const response: SignupRequest = {
    firstname: userFirstname as string,
    lastname: userLastname as string,
    // address: userAddress as AddressRequest,
    userProfile: DEFAULT_CUSTOMER_VALUE,
    mobile: userMobile as MobileRequest,
    email: userEmail as string,
    countryOfOrigin: { id: (userCountry as Country).id },
  };

  return response;
}
