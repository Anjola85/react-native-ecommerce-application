import { MobileRequest } from "./dto/mobile.request";

export interface SignupOtpRequest {
  email?: string;
  mobile?: MobileRequest;
}
