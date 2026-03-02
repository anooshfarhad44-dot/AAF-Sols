"use client";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

// Marker icon fix for Leaflet in Next.js
const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MapComponent = () => {
  const position: [number, number] = [33.6844, 73.0479]; // Islamabad Coordinates

  return (
    <MapContainer 
      center={position} 
      zoom={11} 
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          <div className="text-center p-2">
            <strong className="text-blue-600">AAF SOLUTIONS</strong><br />
            Digital Agency in Islamabad
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;