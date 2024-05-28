import { AddressRespDto } from "./address.response";
import { BusinessRespDto } from "./business.response";
import { CountryListRespDto } from "./country.response";
import { MobileRespDto } from "./mobile.response";
import { RegionListRespDto } from "./region.response";
import { ScheduleRespDto } from "./schedule.response";

export interface FavouriteRespDto {
  id: number;
  business: BusinessRespDto;
  updatedAt: number;
}

export interface FavouriteListRespDto {
  size: number;
  result: FavouriteRespDto[];
}
