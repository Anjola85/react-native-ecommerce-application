/**
 * This function formats the address to show only the first 2 elements.
 * This removes the Postal Code and Country which are not needed in the store card.
 * 
 * @param address 
 * @returns 
 */
export const formatAddress = (address: string) => {
    const addressArray = address.split(',');
    if (addressArray.length > 4) {
        // Take the first 3 elements and join them
        return addressArray.slice(0, 3).join(', ');
    }

    // Take the first 2 elements and join them
    return addressArray.slice(0, 2).join(', ');
}
