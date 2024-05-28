import { AddressRequest } from "../../../../api/api-contracts/user/requests/dto/address.request";

export interface AddressSelectionModalProps {
  onAddressSelected: (address: GoogleAutoCompleteAddress) => void;
  onAddressSelectionCancelled: () => void;
}

export type GoogleAutoCompleteAddress = {
  addressObject: AddressRequest;
  main_address: string;
  secondary_address: string;
};
