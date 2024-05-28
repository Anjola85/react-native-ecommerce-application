

export interface BusinessDto {
  category: IdName;
  continent: IdName;
  country: ContinentDto;
  otherCountries: CountryDto[];
  countries: IdName[];
    reviewId: string;
    images: Images;
    googlePlaceId: string;
  name: string;
  description: string;
  address: BusinessAddress;
  email?: string;
  mobile?: Mobile;
  schedule?: Schedule;
  website?: string;
  rating: Number | 3.5;
  featuredImage: File;
  backgroundImage: File;
  logoImage: File;
  navigationUrl: string;
  geoLocation: GeoLocation;
  id: string;
  liked?: boolean; // might not need this, we're pulling all the businesses from the server
}

export interface Mobile {
    phoneNumber: string;
    countryCode: string; // +1
    isoType: string; // CA
}

export interface IdName {
    id: string;
    name: string;
}

export interface DaySchedule {
    open?: string;
    close?: string;
}

export interface Schedule {
    monday?: DaySchedule;
    tuesday?: DaySchedule;
    wednesday?: DaySchedule;
    thursday?: DaySchedule;
    friday?: DaySchedule;
    saturday?: DaySchedule;
    sunday?: DaySchedule;
}

export interface GeoLocation {
    type: string;
    coordinates: number[]; // [latitude, longitude]
}

export type BusinessAddress = {
    unit: string;
    street: string;
    city: string;
    province: string;
    country: string;
    postalCode: string;
};

export interface ContinentDto {
    name: string;
}

export interface CountryDto {
  name: string;
  Continent: ContinentDto;
}

export interface Images {
    featured?: string;
    background?: string;
}
