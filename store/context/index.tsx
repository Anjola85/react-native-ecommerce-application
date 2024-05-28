import React, { createContext, useContext, useState } from "react";
import { BusinessRespDto } from "../../api/api-contracts/user/responses/business.response";
import { FavouriteRespDto } from "../../api/api-contracts/user/responses/favourite.response";

export interface GlobalStateProps {
  region: string;
  country: string;
  favouriteStores: FavouriteRespDto[];
  businesses: BusinessRespDto[];
}
// Create Context
const GlobalStateContext = createContext({
  globalState: {
    region: "",
    country: "",
    favouriteStores: [] as FavouriteRespDto[],
    businesses: [] as BusinessRespDto[],
  },
  setGlobalState: (state: GlobalStateProps) => {},
});

// Provider Component
export const GlobalStateProvider = ({ children }: any) => {
  const [globalState, setGlobalState] = useState<GlobalStateProps>({
    region: "",
    country: "",
    favouriteStores: [] as FavouriteRespDto[],
    businesses: [] as BusinessRespDto[],
  });
  return (
    <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook to use the global state
export const useGlobalState = () => useContext(GlobalStateContext);
