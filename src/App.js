import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setIsLoading(false);
      }, (error) => {
        setIsLoading(false);
        alert(error);
      })
    } else {
      alert("Geolocation not supported!");
    }
  }, [])

  if (isLoading) {
    return <p>Retrieving position..</p>
  } else {
    return (
      <p>
        Position:
        {lat.toFixed(3)},
        {lng.toFixed(3)}
      </p>
    );
  }

  
}

export default App;
