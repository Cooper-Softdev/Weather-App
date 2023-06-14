
import React from 'react';
import './App.css';
function CityDisplay(props) {
  return (
    <div className="App">
      <div>{props.CityDisplay}</div>
      <div className="container">
        <div className="top">
          <div className="location">
            <h1>Location</h1>
          </div>
          <div className="latlong">
            <p>65 degrees North</p>
          </div>
          <div className="temp">
            <p>Temperature</p>
          </div>
          <div className="cloudcover">
            <p>Cloud Cover</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feelslike">
            <p className='bold'>60</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className='bold'>90%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className='bold'>10mph</p>
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CityDisplay;
