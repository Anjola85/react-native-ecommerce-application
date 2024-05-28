import { AddressRequest } from "./dto/address.request";
import { MobileRequest } from "./dto/mobile.request";

export interface SignupRequest {
  firstname: string;
  lastname: string;
  // address?: AddressRequest;
  userProfile: string;
  mobile: MobileRequest;
  email?: string;
  countryOfOrigin?: { id: number };
}
