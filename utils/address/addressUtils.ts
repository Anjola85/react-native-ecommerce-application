import { AddressRequest } from "../../api/api-contracts/user/requests/dto/address.request";
import * as Location from "expo-location";

/**
 * This function formats the address to show only the first 2 elements.
 * This removes the Postal Code and Country which are not needed in the store card.
 *
 * @param address
 * @returns
 */
export const formatAddress = (address: string | null) => {
  if (!address) return "";
  const addressArray = address.split(",");
  if (addressArray.length > 4) {
    // Take the first 3 elements and join them
    return addressArray.slice(0, 3).join(", ");
  }

  // Take the first 2 elements and join them
  return addressArray.slice(0, 2).join(", ");
};

/**
 * buildAddressObject is used to parse the address string returned by Google Places API.
 * Google Places API returns an address string in the format: "Unit, Street, City, Province, Country".
 * Some addresses may not have a unit number, so the function leaves the unit number empty.
 * postalCode is also left blank as it is not returned by the API, This can be added by the user in the EditAddressScreen
 *
 * @param address is the address string returned by Google Places API
 * @returns an address object with the following fields: unit, street, city, province, country, postalCode
 */
export const buildAddressObject = (address: string): AddressRequest => {
  let addressArray = address.split(",").reverse();

  let country: string = "";
  let province: string = "";
  let city: string = "";
  let street: string = "";
  let unit: string = "";
  let postalCode: string = "";

  if (addressArray.length > 0) country = addressArray[0].trim();

  if (addressArray.length > 1) province = addressArray[1].trim();

  if (addressArray.length > 2) city = addressArray[2].trim();

  if (addressArray.length > 3) street = addressArray[3].trim();

  if (addressArray.length > 4) unit = addressArray[4].trim();

  const addressObject: AddressRequest = {
    primary: true,
    unit,
    street,
    city,
    province,
    postalCode,
    country,
    id: "",
    latitude: 0,
    longitude: 0,
  };
  return addressObject;
};


export const getAddressFromCoordinates = async function(
  latitude: number,
  longitude: number
) {
  try {
    const results = await Location.reverseGeocodeAsync({ latitude, longitude });
    if (results.length > 0) {
      return results[0]; 
    } else {
      return null; // No address found
    }
  } catch (error) {
    console.error(error);
    return null; // Handle error or return null
  }
}
