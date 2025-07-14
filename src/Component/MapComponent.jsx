
import { APIProvider, Map } from '@vis.gl/react-google-maps';

const API_KEY = 'AIzaSyDQknBs9q22lfeO6nvPaVDvU0N7aBzduxg'; // Replace with your API key



const MapComponent = () => {


  return (
    <APIProvider apiKey={API_KEY}>
    <Map
      style={{width: '100vw', height: '100vh'}}
      defaultCenter={{lat: 22.54992, lng: 0}}
      defaultZoom={3}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    />
  </APIProvider>
  );
};

export default MapComponent;
