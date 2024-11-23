import { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import ReactGoogleAutocomplete from "react-google-autocomplete";

const PlacesAutocomplete = () => {
  const [mapCenter, setMapCenter] = useState({ lat: -33.8688, lng: 151.2195 });
  const [mapZoom, setMapZoom] = useState(13);

  const handlePlaceSelected = (place) => {
    if (place.geometry) {
      const { location } = place.geometry;
      setMapCenter({
        lat: location.lat(),
        lng: location.lng(),
      });
      setMapZoom(17); // Adjust zoom on selection
    } else {
      console.log("No details available for the selected place.");
    }
  };

  return (
    <div>
      <ReactGoogleAutocomplete
        apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        onPlaceSelected={handlePlaceSelected}
        options={{
          fields: ["geometry", "name"],
          types: ["establishment"],
        }}
        placeholder="Search for a place"
        style={{ width: "300px", padding: "10px", marginBottom: "10px" }}
      />
      <GoogleMap
        mapContainerStyle={{ height: "400px", width: "100%" }}
        center={mapCenter}
        zoom={mapZoom}
      />
    </div>
  );
};

export default PlacesAutocomplete;
