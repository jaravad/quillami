import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'

const places = [
  { label: 'Intendencia Fluvial', lat: 10.985564, lng: -74.776415 },
]

const MapView = () => {
  return (
    <section className="py-20" id="mapa">
      <h4 className="text-4xl font-bold text-center mb-6">Mapa</h4>
      <APIProvider apiKey="AIzaSyAg0qkRxv-OzxOdkmRZzFGWfeDPhIBgpwA">
        <Map
          defaultZoom={13}
          defaultCenter={{ lat: 10.981604118070113, lng: -74.806465998393 }}
          gestureHandling="cooperative"
          disableDefaultUI={true}
          className="h-[700px]"
        >
          {places.map(({ label, lat, lng }, index) => (
            <Marker key={index} position={{ lat, lng }} />
          ))}
        </Map>
      </APIProvider>
    </section>
  )
}

export default MapView
