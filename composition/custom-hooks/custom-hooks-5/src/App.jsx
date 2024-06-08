import React from 'react';
import { useCurrentLocation } from './useCurrentLocation';

function App() {
  const { location, loading, error, getLocation } = useCurrentLocation();

  return (
    <div>
      <h1>Current Location</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {location && (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}
      <button onClick={getLocation}>Get Current Location</button>
    </div>
  );
}

export default App;
