// components/Map.js
import { useEffect } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmhla2ljb2RlcyIsImEiOiJjbTFuZm52eDkwcjEwMmtxdmdvcmoyOWRuIn0.Oz4Tft_dCFTiMswpegMwjQ"; // Replace with your access token

const Map = ({ coordinates }) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: coordinates,
      zoom: 15,
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-left");

    // Add a marker at the specified coordinates
    new mapboxgl.Marker()
      .setLngLat([31.045191662035894, -17.780518893240387]) // [lng, lat]-17.780323572702155, 31.045191662035894
      .addTo(map);

    return () => map.remove();
  }, [coordinates]);

  return <div id="map" className="w-full h-60" />;
};

export default Map;
