import { AddressListRespDto } from "./address.response";
import { BusinessListRespDto } from "./business.response";
import { CountryRespDto } from "./country.response";
import { FavouriteListRespDto } from "./favourite.response";
import { MobileRespDto } from "./mobile.response";

export interface UserInformationRespDto {
  id: number;
  firstname: string;
  lastname: string;
  userProfile: string;
  profileImage: string;
  active: boolean;
  countryOfOrigin: CountryRespDto;
  email: string;
  addressList: AddressListRespDto;
  mobile: MobileRespDto;
  favouriteList: FavouriteListRespDto;
  accountVerified: boolean;
}
