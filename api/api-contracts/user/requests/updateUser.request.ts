import { AddressRequest } from "./dto/address.request";
import { CountryRequest } from "./dto/country.request";
import { MobileRequest } from "./dto/mobile.request";

export interface UpdateUserRequest {
  firstname?: string;
  lastname?: string;
  email?: string;
  mobile?: MobileRequest;
  address?: AddressRequest;
  countryOfOrigin?: CountryRequest;
}
