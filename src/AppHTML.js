import React from 'react';
import './App.css';
import CityMap from './CityMap';

function AppHTML(props) {
  const { form, locationData, error, errorMsg, handleToggleCityMap, mapURL, weatherData } = props;
  const lat = locationData ? locationData.lat : '';
  const lon = locationData ? locationData.lon : '';

  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div>{form}</div>
          <div className="location">
            <h1>{locationData ? locationData.display_name.split(',')[0] : 'Location'}</h1>
          </div>
          <div className="latlong">
            <p>{lat && lon ? `${Number.parseFloat(lat).toFixed(3)}° N, ${Number.parseFloat(lon).toFixed(3)}° E` : 'Lat / Lon'}</p>
          </div>
          <div className="temp">
            <p>Temperature</p>
          </div>
          <div className="cloudcover">
            <p>Cloud Cover</p>
          </div>
          {error && (
            <div className="error">
              <p>{errorMsg}</p>
            </div>
          )}
          <div className="cityMap">
          {<CityMap mapURL={mapURL} cityName={locationData ? locationData.display_name.split(',')[0] + ' Map' : 'City Map'} />}
          </div>
        </div>
        <div className="bottom">
          <div className="feelslike">
            <p className="bold">60°</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">90%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">10mph</p>
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppHTML;



