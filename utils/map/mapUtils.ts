export function getDeltaFromKilometers(kilometers: number): { latitudeDelta: number; longitudeDelta: number } {
    // Approximate conversions for latitude and longitude degrees per kilometer
    const degreesPerKilometer = {
        latitude: 0.009,
        longitude: 0.009,
    };

    const latitudeDelta = kilometers * degreesPerKilometer.latitude;
    const longitudeDelta = kilometers * degreesPerKilometer.longitude;

    return {
        latitudeDelta,
        longitudeDelta,
    };
}
