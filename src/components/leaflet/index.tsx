import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react'
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const AP_k = `?token=AAPK256b807cc69a42e29b4d1b4907655537WkeCzhD_JFKgUWz8zbIYnRkE-4otnQ9kCvNEAsrokT8-e_HQKzBIxrDpHj4n4zW0`
const ArcGisRoot = `https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}`
const baseEnum = `?basemapStyle=ArcGIS:NavigationNight`
let centerD = [31.225, 121.5] as any

export default function leaflet() {
  const [draggable, setDraggable] = useState(false)
  const [position, setPosition] = useState(centerD)
  const markerRef = useRef(null) as any
  const eventHandler = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) setPosition(marker?.getLatLng())
      }
    }),
    []
  )
  const toggleDraggable = useCallback(() => {
    setDraggable(d => !d)
  }, [])

  useEffect(() => {
    const tm = document.querySelector('.leaflet-control-attribution')
    if (tm?.parentNode) tm.parentNode.removeChild(tm)
  }, [])

  return (
    <MapContainer id="map" className="w-full h-full" center={centerD} zoom={12} scrollWheelZoom={true}>
      <TileLayer url={ArcGisRoot + baseEnum + AP_k} />
      <LayersControl position="topright">
        <LayersControl.Overlay checked name="Marker with popup">
          <Marker ref={markerRef} draggable={draggable} eventHandlers={eventHandler} position={position}>
            <Popup minWidth={80}>
              <span onClick={toggleDraggable}>A pretty CSS3 popup. Just try it.</span>
            </Popup>
          </Marker>
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  )
}
