import { addToCache } from "../../store/cache/cache";
import { FAVOURITE_STORES } from "../../store/cache/cacheKeys";
import {
  FavouriteListRespDto,
  FavouriteRespDto,
} from "../api-contracts/user/responses/favourite.response";

// this adds just one favourite to the cache
export async function addFavouriteToCache(payload: FavouriteRespDto) {
  try {
    await addToCache({
      key: FAVOURITE_STORES,
      value: payload,
    });
  } catch (error) {
    console.log("error from adding favourite to cache: ", error);
    throw error;
  }
}
