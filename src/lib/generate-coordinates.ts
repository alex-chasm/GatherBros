export function generateNearbyCoordinates(lat:number, lon:number) {
    const nearbyCoordinates = [];
    const numberOfCoordinates = 10;
    
    // Roughly, 1 degree latitude is approximately 111km
    // So, for 1km, it's roughly 0.009 degrees (this is a rough estimate and can vary based on location)
    const maxDistance = 0.009; // Adjust as needed

    for (let i = 0; i < numberOfCoordinates; i++) {
        const randomLatOffset = (Math.random() - 0.5) * 2 * maxDistance;
        const randomLonOffset = (Math.random() - 0.5) * 2 * maxDistance;

        const newLat = lat + randomLatOffset;
        const newLon = lon + randomLonOffset;

        nearbyCoordinates.push({ latitude: newLat, longitude: newLon });
    }

    return nearbyCoordinates;
}

