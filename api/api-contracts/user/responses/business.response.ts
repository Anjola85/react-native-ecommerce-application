import { AddressRespDto } from "./address.response";
import { CountryListRespDto } from "./country.response";
import { MobileRespDto } from "./mobile.response";
import { RegionListRespDto } from "./region.response";
import { ScheduleRespDto } from "./schedule.response";

export interface BusinessRespDto {
  id: number;
  name: string;
  description: string;
  address: AddressRespDto;
  email?: string;
  mobile: MobileRespDto;
  schedule: ScheduleRespDto;
  website: string;
  countries: CountryListRespDto;
  regions: RegionListRespDto;
  businessType: string;
  rating: string;
  backgroundImage: string;
  profileImage: string;
  createdAt: number;
}

export interface BusinessListRespDto {
  size: number;
  businessList: BusinessRespDto[];
}
