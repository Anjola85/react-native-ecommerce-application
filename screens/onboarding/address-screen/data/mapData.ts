import { getDeltaFromKilometers } from "../../../../utils/map/mapUtils"

export const initialRegion = {
    latitude: 43.728576551969574, 
    longitude: -79.42554837092757,
    ...getDeltaFromKilometers(10),
}
