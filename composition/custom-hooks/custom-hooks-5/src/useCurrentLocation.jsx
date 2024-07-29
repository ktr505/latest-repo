import { useState, useEffect, useCallback } from 'react';

const useCurrentLocation = (options = {}) => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    setLocation({ latitude, longitude });
    setError(null);
    setLoading(false);
  };

  const handleError = (error) => {
    setError(error.message);
    setLocation(null);
    setLoading(false);
  };

  const getCurrentLocation = useCallback(() => {
    setLoading(true);
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      setLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError, options);
  }, [options]);

  useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);

  return { location, error, loading, getCurrentLocation };
};

export default useCurrentLocation;
