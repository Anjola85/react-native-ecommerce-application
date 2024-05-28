export interface LoadingBarProps {
  progress: number;
}

export interface RegionCardsProps {
  options: any[];
  selection: (name: string) => void;
}

export interface SelectCountryButtonProps {
  imageUri?: any;
  country: string;
  selectCountryFunction: (country: string) => void;
  selectedCountry: string | undefined;
}

export type Country = {
  id: number;
  region: string;
  countryName: string;
  flag: any;
};

export type Region = {
  id: number;
  regionName: string;
};
