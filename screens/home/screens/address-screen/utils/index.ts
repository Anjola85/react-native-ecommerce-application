import { GooglePlaceDetail } from "react-native-google-places-autocomplete";
import { AddressRequest } from "../../../../../api/api-contracts/user/requests/dto/address.request";

export function normalizeAddress(address: AddressRequest) {
  const { unit, street, city, province, postalCode, country } = address;

  const normalizedAddress = `${
    unit || ""
  }${street}${city}${province}${postalCode}${country}`;

  return normalizedAddress;
}

export function isDuplicateAddress(
  newAddress: AddressRequest,
  existingAddresses: any[]
) {
  const normalizedNewAddress = normalizeAddress(newAddress);

  return existingAddresses.some((existingAddress) => {
    const normalizedExistingAddress = normalizeAddress(existingAddress);
    return normalizedNewAddress === normalizedExistingAddress;
  });
}

export function parseGoogleAddressComponents(
  details: GooglePlaceDetail
): AddressRequest {
  let street = "";
  let streetNumber = "";
  let postalCode = "";
  let city = "";
  let province = "";
  let country = "";

  details.address_components.forEach((component) => {
    if (component.types.includes("street_number")) {
      streetNumber = component.long_name;
    } else if (component.types.includes("route")) {
      street = component.long_name;
    } else if (component.types.includes("locality")) {
      city = component.long_name;
    } else if (component.types.includes("administrative_area_level_1")) {
      province = component.long_name;
    } else if (component.types.includes("country")) {
      country = component.long_name;
    } else if (component.types.includes("postal_code")) {
      postalCode = component.long_name;
    }
  });

  const address: AddressRequest = {
    id: "",
    primary: false,
    unit: "",
    street: `${streetNumber} ${street}`,
    city,
    province,
    postalCode,
    country,
    latitude: details.geometry.location.lat,
    longitude: details.geometry.location.lng,
  };

  return address;
}
