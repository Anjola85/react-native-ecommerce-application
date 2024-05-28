export interface PhoneNumberInputProps {
    style?: Record<string, unknown>;
    closeBtn?: boolean;
    getPhoneDetails?: (phone :PhoneInput) => void;
}
  
export interface Mobile {
    phoneNumber: string;
    countryCode: string; // +1
    isoType: string; // CA
}
  
export interface PhoneInput {
    isPhoneValid: boolean;
    userPhoneNumber: Mobile;
}
