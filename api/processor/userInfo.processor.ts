import { countries } from "../../screens/onboarding/onboarding-questions-screens/data";
import { addToCache } from "../../store/cache/cache";
import {
  SELECTED_COUNTRY,
  SELECTED_REGION,
  USER_ADDRESS_LIST,
  USER_COUNTRY_OF_ORIGIN,
  USER_EMAIL,
  USER_FIRST_NAME,
  USER_HAS_ONBOARDED,
  USER_LAST_NAME,
  USER_MOBILE,
  USER_PROFILE_TYPE,
  USER_TOKEN,
  USER_ID,
} from "../../store/cache/cacheKeys";
import { loadFavouritesToCache } from "../../store/functions/business";
import { LoginResponseDto } from "../api-contracts/user/responses/login.response";
import { SignupResponseDto } from "../api-contracts/user/responses/signup.response";

export async function addUserInfoToCache(
  payload: SignupResponseDto | LoginResponseDto
) {
  try {
    addToCache({ key: USER_TOKEN, value: payload.token });
    if (
      payload instanceof LoginResponseDto &&
      payload.userInfo.countryOfOrigin
    ) {
      await addToCache({
        key: USER_HAS_ONBOARDED,
        value: true,
      });
      await loadFavouritesToCache();
    }
    const fetchedCountry = payload.userInfo.countryOfOrigin.name;

    const countryOfOrigin = countries.find(
      (country) =>
        country.countryName.toLowerCase().trim() ===
        fetchedCountry.toLowerCase().trim()
    );

    console.log("user: ", JSON.stringify(payload.userInfo, null, 2));

    await Promise.all([
      addToCache({ key: USER_ID, value: payload.userInfo.id }),
      addToCache({ key: USER_FIRST_NAME, value: payload.userInfo.firstname }),
      addToCache({ key: USER_LAST_NAME, value: payload.userInfo.lastname }),
      addToCache({
        key: USER_PROFILE_TYPE,
        value: payload.userInfo.userProfile,
      }),
      addToCache({ key: USER_EMAIL, value: payload.userInfo.email }),
      addToCache({ key: USER_MOBILE, value: payload.userInfo.mobile }),
      addToCache({
        key: USER_ADDRESS_LIST,
        value: payload.userInfo.addressList,
      }),
      addToCache({
        key: USER_PROFILE_TYPE,
        value: payload.userInfo.userProfile,
      }),
      addToCache({
        key: USER_COUNTRY_OF_ORIGIN,
        value: countryOfOrigin,
      }),
    ]);

    if (countryOfOrigin) {
      addToCache({
        key: SELECTED_COUNTRY,
        value: countryOfOrigin,
      });

      const countryRegion = countryOfOrigin.region;

      addToCache({ key: SELECTED_REGION, value: countryRegion });
    }
  } catch (error) {
    console.log("error from addUserInfoToCache: ", error);
    throw error;
  }
}
