"use client";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

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
      zoom={12} 
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          <div className="text-center p-2 text-zinc-900">
            <strong className="text-amber-600 font-bold">AA GRAPHIC STUDIO</strong><br />
            <span className="text-xs text-zinc-600">Graphic Design &amp; Printing Hub</span><br />
            <span className="text-[10px] text-zinc-500">Islamabad, Pakistan</span>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;