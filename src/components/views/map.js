import { APIProvider, Map } from '@vis.gl/react-google-maps'
import MarkerWithInfo from '../components/marker-with-info'

const places = [
  { label: 'Intendencia Fluvial', lat: 10.985564, lng: -74.776415 },
  {
    label: 'Museo del Carnaval de Barranquilla',
    lat: 10.992789,
    lng: -74.7903729,
  },
  {
    label: 'Catedral Metropolitana Maria Reina',
    lat: 10.9882416,
    lng: -74.7926504,
  },
  {
    label: 'Aduana Nacional',
    lat: 10.9883877,
    lng: -74.7814662,
  },
  {
    label: 'Paseo Bolivar',
    lat: 10.9829417,
    lng: -74.7802129,
  },
]

const MapView = () => {
  return (
    <section className="py-20 bg-gray-100" id="mapa">
      <h4 className="text-4xl font-bold text-center mb-11">Mapa</h4>
      <APIProvider apiKey="AIzaSyAg0qkRxv-OzxOdkmRZzFGWfeDPhIBgpwA">
        <Map
          defaultZoom={14.82}
          defaultCenter={{ lat: 10.990433,lng: -74.7850689 }}
          gestureHandling="cooperative"
          className="h-[500px] lg:h-[700px]"
          mapId="myMap"
        >
          {places.map((props, index) => (
            <MarkerWithInfo key={index} {...props} />
          ))}
        </Map>
      </APIProvider>
    </section>
  )
}

export default MapView
