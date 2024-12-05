// src/components/Map.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ latitude, longitude, bairro }) => {
  return (
    <div className="map-container">
      <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[latitude, longitude]}>
          <Popup>{bairro}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
