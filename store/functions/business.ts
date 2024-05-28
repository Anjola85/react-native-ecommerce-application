import { BusinessRespDto } from "../../api/api-contracts/user/responses/business.response";
import { getAllBusinesses } from "../../api/endpoints/businessApi";
import { addToCache, clearCache, getItemFromCache } from "../cache/cache";
import { FAVOURITE_STORES, STORES } from "../cache/cacheKeys";
import { dummyBusinesses } from "../api/business/business_dummy_data";
import { capitalizeText } from "../../utils/string/stringUtils";
import { getFavourites } from "../../api/endpoints/userApi";
import { useGlobalState } from "../context";
import { FavouriteRespDto } from "../../api/api-contracts/user/responses/favourite.response";

export const loadAllAssetsToCache = async () => {
  // await clearCache();
  await Promise.all([loadBusinessesToCache()]);
};

export const loadBusinessesToCache = async () => {
  const businesses = await getAllBusinesses();
  // const { globalState, setGlobalState } = useGlobalState();

  if (businesses && businesses.status === true) {
    const businessList: BusinessRespDto[] =
      businesses.payload.result.businessList.map(
        (business: BusinessRespDto) => {
          return {
            id: business.id,
            name: capitalizeText(business.name),
            description: business.description,
            address: business.address,
            email: business.email,
            mobile: business.mobile,
            schedule: business.schedule,
            website: business.website,
            country: business.countries.countryList[0],
            countries: business.countries,
            businessType: business.businessType,
            rating: business.rating,
            regions: business.regions,
            backgroundImage: business.backgroundImage,
            profileImage: business.profileImage,
            createdAt: business.createdAt,
          };
        }
      );

    await addToCache({ key: STORES, value: businessList });

    // const stuff = await getItemFromCache(STORES); // TODO: remove this

    // console.log("stuff: ", stuff);
    // setGlobalState({ ...globalState, businesses: businessList });
  }
  // await addToCache({key: STORES, value: dummyBusinesses});
};

/**
 * This should only be called on favourites page
 */
export const loadFavouritesToCache = async () => {
  const favourites = await getFavourites();

  if (favourites && favourites.status === true) {
    const favouritesResult = favourites.payload.result as FavouriteRespDto[];

    // const favouritedBusinesses = favouritesResult.map((item) => item.business);

    console.log("favouritesPP: ", favouritesResult);

    await addToCache({
      key: FAVOURITE_STORES,
      value: favouritesResult,
    });
  }
};

// load countries and their regions
