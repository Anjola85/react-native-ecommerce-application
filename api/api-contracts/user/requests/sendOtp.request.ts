import { Mobile } from "./dto/mobile.request";

export interface SendOtpRequest {
  mobile?: Mobile;
  email?: string;
}
