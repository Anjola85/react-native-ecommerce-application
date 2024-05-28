import { LatLng } from "react-native-maps";
import { BusinessRespDto } from "../../../../../api/api-contracts/user/responses/business.response";

export interface StoreListProps {
  data: BusinessRespDto[];
  userCoordinates: LatLng;
}
