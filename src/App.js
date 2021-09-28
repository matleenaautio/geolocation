import './App.css';
import { useState, useEffect } from 'react';
import Weather from './Weather';

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
      <div style={{margin: '50px'}}>
        <p>
          Position:
          {lat.toFixed(3)},
          {lng.toFixed(3)}
        </p>
        <Weather lat={lat} lon={lng}/>
      </div>
    );
  }

  
}

export default App;
