import React from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import "./Map.css";

const Map = (prop) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
  });

  if (!isLoaded) return null;

  return (
    <GoogleMap
      mapContainerClassName="map"
      center={prop.center}
      zoom={prop.zoom}
    >
      {<MarkerF position={prop.center} />}
    </GoogleMap>
  );
};

export default React.memo(Map);
