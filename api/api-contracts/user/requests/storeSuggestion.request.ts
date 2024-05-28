import { AddressRequest } from "./dto/address.request";

export interface StoreSuggestionReqDto {
  name: string;
  address: AddressRequest;
  user: number;
}
