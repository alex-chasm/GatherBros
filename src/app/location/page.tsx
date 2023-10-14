'use client'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useEffect, useState } from 'react'
import ReactMapGL, { GeolocateControl, Marker } from 'react-map-gl'
import { usePublicClient } from 'wagmi'

export default function Location() {
  const [userLocation, setUserLocation] = useState<null | {
    latitude: number
    longitude: number
  }>(null)
  const [viewport, setViewport] = useState<{
    latitude: number
    longitude: number
    zoom: number
    // width: string | number
    // height: string | number
  }>({
    latitude: 40.73061,
    longitude: -73.935242,
    zoom: 10,
    // width: '100%',
    // height: '100vh',
  })
  const [error, setError] = useState<null | string>(null)
  const client = usePublicClient()

  useEffect(() => {
    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords
            setUserLocation({ latitude, longitude })
            setViewport((vp) => ({
              ...vp,
              latitude,
              longitude,
              zoom: 14,
            }))
          },
          (error) => {
            setError(error.message)
          },
        )
      } else {
        setError('Geolocation is not supported by this browser.')
      }
    }
    fetchLocation()
  }, [])

  const refreshLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setUserLocation({ latitude, longitude })
          setViewport((vp) => ({
            ...vp,
            latitude,
            longitude,
            zoom: 14,
          }))
        },
        (error) => {
          setError(error.message)
        },
      )
    } else {
      setError('Geolocation is not supported by this browser.')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        onClick={refreshLocation}
        className="p-2 bg-blue-600 text-white rounded"
      >
        Get Location
      </button>

      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        onMove={(evt) => setViewport(evt.viewState)}
        style={{ width: 400, height: 400 }}
      >
        <Marker
          latitude={userLocation?.latitude ?? 0}
          longitude={userLocation?.longitude ?? 0}
          anchor="bottom"
          color="red"
        >
          <svg height="30" width="30" viewBox="0 0 24 24">
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
              fill="#D00"
            />
          </svg>
        </Marker>
      </ReactMapGL>
      {error && <p className="mt-4 text-red-500">Error: {error}</p>}
    </div>
  )
}
