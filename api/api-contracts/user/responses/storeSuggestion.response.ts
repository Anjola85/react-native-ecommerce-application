import { Address } from "./dto/address";

export interface StoreSuggestionRespDto {
  id: number;
  name: string;
  address: Address;
  createdAt: number;
}
