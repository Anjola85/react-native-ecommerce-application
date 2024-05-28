export interface AddressRequest {
  id?: string;
  primary?: boolean;
  unit?: string;
  street: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  latitude?: number;
  longitude?: number;
}
