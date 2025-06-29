// lib/validateAddress.js

const GEOCODE_API_KEY = process.env.NEXT_PUBLIC_OPENCAGE_KEY;

export async function validateAddress(address) {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${GEOCODE_API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.results.length === 0) {
      return { valid: false };
    }

    return {
      valid: true,
      lat: data.results[0].geometry.lat,
      lng: data.results[0].geometry.lng,
      formatted: data.results[0].formatted,
    };
  } catch (err) {
    console.error("Geocoding error:", err);
    return { valid: false, error: err };
  }
}
