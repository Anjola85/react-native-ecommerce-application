import { AddressRequest } from "../../../api/api-contracts/user/requests/dto/address.request";

export interface GoogleAutoCompleteSearchBoxProps {
  selectedExistingAddresses: AddressRequest[];
  addAddress: (address: AddressRequest) => void;
  setSearchText: (text: string) => void;
  searchText: string;
  clearAddressInput: () => void;
  setIsFocused: (isFocused: boolean) => void;
}
