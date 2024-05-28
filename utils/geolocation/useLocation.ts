import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { LocationObject } from 'expo-location';

type LocationResult = {
  location: LocationObject | null;
  errorMsg: string | null;
};

export const useLocationService = (): LocationResult => {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  return { location, errorMsg };
};

export const requestLocation = async (): Promise<LocationResult> => {
    let locationResult: LocationResult = { location: null, errorMsg: null };
  
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      locationResult.errorMsg = 'Permission to access location was denied';
      return locationResult;
    }
  
    try {
      let currentLocation = await Location.getCurrentPositionAsync({});
      locationResult.location = currentLocation;
    } catch (error) {
      locationResult.errorMsg = 'Error getting location';
    }
  
    return locationResult;
};
