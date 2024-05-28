import { AddressRequest } from "../../../../api/api-contracts/user/requests/dto/address.request";
import { AddressRespDto } from "../../../../api/api-contracts/user/responses/address.response";

export interface EditAddressModalProps {
  address: AddressRespDto;
  onAddressEdited: (address: AddressRespDto) => void;
  onFinishedEditing: () => void;
}
