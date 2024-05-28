import {
    AddressRespDto,
    AddressListRespDto,
} from "../api-contracts/user/responses/address.response";

import { 
    addToCache,
    getItemFromCache,
} from "../../store/cache/cache";

import {
  USER_ADDRESS_LIST,
  USER_ADDRESS,
} from "../../store/cache/cacheKeys";

/**
 * 
 * This function adds an address to the user's address list in the cache
 * and updates the user's current address with the newly added address
 * 
 * @param payload the address to be added
 */
export async function addAddressToCache(payload: AddressRespDto){
    try {
        const userAddressListData = await getItemFromCache(USER_ADDRESS_LIST) as AddressListRespDto;

        // create a new address list if it doesn't exist
        if (userAddressListData == null || userAddressListData.size == 0){
            await addToCache({
                key: USER_ADDRESS_LIST,
                value: {
                    addressList: [payload],
                    size: 1
                }
            });
        } else {
            // check if the address already exists in the address list
            const exists = userAddressListData.addressList.find((address) => address.id === payload.id);
            if (exists != null) {
                // remove the address from the address list if it exists
                userAddressListData.addressList = userAddressListData.addressList.filter(
                    (a) => a.id !== exists.id
                );
                userAddressListData.size = userAddressListData.addressList.length;
            }

            // add the new address to the address list
            userAddressListData.addressList.push(payload);
            userAddressListData.size += 1;

            // add updated address list back to cache
            await addToCache({
                key: USER_ADDRESS_LIST,
                value: userAddressListData
            });
        }

        // update the user's address with the newly added address
        await addToCache({
            key: USER_ADDRESS,
            value: payload
        });
    } catch (error) {
        console.log("error adding address to cache: ", error);
    }
}

/**
 * This function deletes an address from the user's address list in the cache
 * and updates the user's current address if the address to be deleted is 
 * the current address
 * 
 * @param addressId the id of the address to be deleted
 */
export  async function deleteAddressFromCache(addressId: number) {
    const userAddressListData = (await getItemFromCache(
        USER_ADDRESS_LIST
    )) as AddressListRespDto;

    // remove the address from the address list if it exists
    userAddressListData.addressList = userAddressListData.addressList.filter(
        (a) => a.id !== addressId
    );
    userAddressListData.size = userAddressListData.addressList.length;

    // add updated address list to cache
    await addToCache({
        key: USER_ADDRESS_LIST, 
        value: userAddressListData
    });

    // check if the address to be deleted is the user's current address
    const userCurrentAddress = await getItemFromCache(USER_ADDRESS) as AddressRespDto;
    if(userCurrentAddress != null && userCurrentAddress.id === addressId){

        // get the first address from the address list to replace the current address
        let replacementAddress = null;
        if(userAddressListData.size > 0){
            replacementAddress = userAddressListData.addressList[0];
        }

        // update the user's address with the new address
        await addToCache({
            key: USER_ADDRESS,
            value: replacementAddress
        });
    }
}
