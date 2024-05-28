import { Mobile } from "./dto/mobile.request";

export interface LoginOtpRequest {
  email?: string;
  mobile?: Mobile;
}
