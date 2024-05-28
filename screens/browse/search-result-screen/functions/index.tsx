import { BusinessRespDto } from "../../../../api/api-contracts/user/responses/business.response";
import { calculateDistance } from "../../../../utils/geolocation/distanceKm";
import { capitalizeFirstLetter, capitalizeText } from "../../../../utils/string/stringUtils";
import { formatAddress } from "../../../../utils/address/addressUtils";
import { default_user_coordinates } from "../../../../constants/default";

export const formatDataForStoreCard = function
(
    business: BusinessRespDto,
    userLocation: { latitude: number, longitude: number } | undefined,
    isLiked: boolean
): 
{
   id: number,
   storeName: string,
   storeAddress: string,
   storeRating: number,
   imageUri: string,
   smallImageUri: string,
   storeDistance: number,
   storeBusinessType: string,
   storeRegion: string,
   isLiked: boolean,
   isNew: boolean,
   category: string,
   regions: string[]
} {
    return {
        id: business.id,
        storeName: capitalizeText(business.name),
        storeAddress: formatAddress(business.address.street),
        storeRating: RatingToNumber(business.rating),
        imageUri: business.backgroundImage,
        smallImageUri: business.profileImage,
        storeDistance: getStoreDistance(business, userLocation),
        storeBusinessType: capitalizeFirstLetter(business.businessType),
        storeRegion: capitalizeText(business?.regions?.regionList[0]?.name || ""),
        isLiked: isLiked,
        isNew: isStoreNew(business, 60),
        category: business?.regions?.regionList[0]?.name || "",
        regions: getRegionsList(business)
    }
}

function RatingToNumber(rating: string): number {
    let r = parseFloat(rating);
    if (isNaN(r)) {
        return 3.5;
    }
    return r;
}

function isStoreNew(business: BusinessRespDto, thresholdDays: number): boolean {
    const today = new Date();
    const businessDate = new Date(business.createdAt * 1000);
    const diff = today.getTime() - businessDate.getTime();
    const diffInDays = diff / (1000 * 3600 * 24);

    return diffInDays < thresholdDays;
}

function getRegionsList(business: BusinessRespDto): string[] {
    return business?.regions?.regionList.map(region => region.name) || [];
}

function getStoreDistance(business: BusinessRespDto, userLocation: { latitude: number, longitude: number } | undefined): number {
    let origin = default_user_coordinates;
    if (userLocation) {
        origin = userLocation;
    }
    return calculateDistance(
        {
            latitude: business.address?.latitude || 0, 
            longitude: business.address?.longitude || 0
        }, {
            latitude: origin.latitude,
            longitude: origin.longitude
        });
}
