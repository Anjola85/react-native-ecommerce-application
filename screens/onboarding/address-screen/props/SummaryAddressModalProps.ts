import { GoogleAutoCompleteAddress } from "./AddressSelectionModalProps";

export interface SummaryAddressModalProps {
    address: GoogleAutoCompleteAddress;
    onConfirm: () => void;
    onEdit: () => void;
    onBack?: () => void;
}
