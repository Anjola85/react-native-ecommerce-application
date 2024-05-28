
export interface StoreCardProps {
    store: Store;
    onPress?: () => void;
    toggleLike?: () => void;
}

export type Store = {
    id: string;
    storeName: string;
    storeAddress: string;
    storeOpeningHours: string;
    storeClosingHours: string;
    storeDistance: string;
    storeImage: any;
    storeRating: Number;
    storeCategory: string;
    liked: boolean;
}
