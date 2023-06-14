import React from 'react';
import './App.css';
import CityMap from './CityMap';

function AppHTML(props) {
  const { form, locationData, error, errorMsg, handleToggleCityMap } = props;
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
            <p>{lat && lon ? `${lat}° N, ${lon}° E` : 'Lat / Long'}</p>
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
            <button onClick={handleToggleCityMap}>City Map</button>
          </div>
        </div>
        <div className="bottom">
          <div className="feelslike">
            <p className="bold">60</p>
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
      {props.showCityMap && <CityMap mapURL={props.mapURL} />}
    </div>
  );
}

export default AppHTML;



