import React, { useState } from 'react'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet'
import { LatLng, LeafletMouseEvent } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import '@/styles/map-styles.css'

interface LocationMarkerProps {
  setLocation: React.Dispatch<React.SetStateAction<LatLng | null>>
}

export function LocationMarker({ setLocation }: LocationMarkerProps) {
  const [position, setPosition] = useState<LatLng | null>(null)

  useMapEvents({
    click(e: LeafletMouseEvent) {
      setPosition(e.latlng)
      setLocation(e.latlng)
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>
        Latitude: {position.lat}, Longitude: {position.lng}
      </Popup>
    </Marker>
  )
}

export function MapComponent({ setLocation }: LocationMarkerProps) {
  return (
    <div>
      <MapContainer
        center={[-27.2158, -49.6465]}
        zoom={13}
        className="h-[400px] w-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker setLocation={setLocation} />
      </MapContainer>
    </div>
  )
}
