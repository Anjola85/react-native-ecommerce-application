import { BusinessRespDto } from "../../../api/api-contracts/user/responses/business.response";
import { LatLng, Region } from "react-native-maps";

export interface AddressIslandProps {
    address: string
    showBackButton?: boolean
    onBackButtonPress?: () => void
}

export interface MapStoreListProps {
    stores: BusinessRespDto[];
    onStoreCardPress?: (store: BusinessRespDto) => void;
    onStoreCardFocus?: (id: number) => void;
    scrollIndex: number;
    userCoordinates: LatLng;
}

export interface MapStoreCardProps {
    store: BusinessRespDto;
    user: LatLng;
    onPress?: () => void;
}

export interface StarFilteringProps {
    onClose: (rating: number) => void;
}

export interface PillButtonGroupProps {
    theme_color?: string;
    activeButton?: "nearby" | "open" | "ratings";
    onButtonPress: (button: "nearby" | "open" | "ratings") => void;
}

export interface StoreMarkerProps {
    storeImg: any;
    store: BusinessRespDto;
    onPress?: (coordinates: LatLng) => void;
}

export interface MapProps {
    userLocation?: LatLng
    userRegion?: Region
    showBackButton?: boolean
}

export interface StoreMapViewProps {
    stores: BusinessRespDto[];
    userCoordinates: LatLng;
    loading: boolean;
}

export interface StoreMapModalProps {
    stores: BusinessRespDto[];
    userCoordinates: LatLng;
    loading: boolean;
}

export interface MapModalStoresPageProps {
    stores: BusinessRespDto[];
    userCoordinates: LatLng;
    loading: boolean;
    onSearchIconPress: () => void;
    onRatingsIconPress?: () => void;
    ratingFilter?: number;
    onFilteringModalClose?: (rating: number) => void;
}

export interface MapModalSearchPageProps {
    onBackButtonPress: () => void;
}
