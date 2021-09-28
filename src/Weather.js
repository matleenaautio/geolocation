import React, {useState, useEffect} from 'react';
import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather?';
const APIKEY = '';
const ICON_URL = 'http://openweathermap.org/img/wn/';

export default function Weather({lat, lon}) {
    const [temp, setTemp] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [direction, setDirection] = useState(0);
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState('');

    useEffect(() => {
        const address = URL + 
        'lat=' + lat +
        '&lon=' + lon +
        '&units=metric' +
        '&appid=' + APIKEY;

        axios.get(address)
            .then((response) => {
                console.log(response.data);
                setTemp(response.data.main.temp);
                setSpeed(response.data.wind.speed);
                setDirection(response.data.wind.deg);
                setDescription(response.data.weather[0].description);
                setIcon(ICON_URL + response.data.weather[0].icon + '@2x.png');
            }).catch(error => {
                alert(error);
            });
    }, [])

    return (
        <div>
            <h3>Weather on your location</h3>
            <p>{temp} C&#176;</p>
            <p>{speed}m/s {direction} degrees</p>
            <p>{description}</p>
            <img src={icon} alt="Weather icon"/>
        </div>
    )
}


