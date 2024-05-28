import { MobileRequest as Mobile } from "./dto/mobile.request";

export interface SecureLoginRequest extends LoginRequest {
  code?: string;
}

interface LoginRequest {
  mobile?: Mobile;
  email?: string;
}
