import { RegionListRespDto } from "../../../../../api/api-contracts/user/responses/region.response";

export interface StoreCardMediumProps {
  businessId: number;
  imageUri: string;
  storeName: string;
  storeAddress: string;
  storeRating: number;
  storeDistance: number;
  storeDeliveryType: string;
  storeRegion: string;
  isLiked: boolean;
  toggle: (businessId: number) => void;
  isNew?: boolean;
}
export interface StoreCardLargeProps {
  businessId: number;
  imageUri: string;
  storeName: string;
  storeAddress: string;
  storeRating: number;
  storeDistance: number;
  storeDeliveryType: string;
  storeRegion: string;
  isLiked: boolean;
  isNew?: boolean;
  toggle: (businessId: number) => void;
}

export interface StoreCardSmallProps {
  businessId: number;
  imageUri: string;
  smallImageUri: string;
  storeName: string;
  storeRegion: string;
  storeRating: number;
  storeDistance: number;
}

export interface StoreFavouritesCardProps {
  businessId: number;
  imageUri: string;
  storeName: string;
  storeDeliveryTimeMins?: number;
  storeRating: number;
  storeDistance: number;
  storeRegions?: string[];
  isLiked: boolean;
  isNew?: boolean;
  onCardPress: () => void;
  storeDeliveryFee: number;
  toggle: (businessId: number) => void;
}
