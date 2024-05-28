import { useContext, createContext } from "react";
import { BusinessRespDto } from "../../../api/api-contracts/user/responses/business.response";

interface StoreMapContextType {
    selectedStore: BusinessRespDto | null;
    userCity: string | null;

    setSelectedStore: (store: BusinessRespDto | null) => void;
    setUserCity: (city: string) => void;

}

export const StoreMapContext = createContext<StoreMapContextType>({
    selectedStore: null,
    userCity: null,
    setSelectedStore: () => {},
    setUserCity: () => {},
});

export const useStoreMapContext = () => useContext(StoreMapContext);
