import React from 'react';
import './App.css';
import CityMap from './CityMap';
import MovieInfo from './MovieInfo';
import { //getCloudDescription, 
          roundInt, 
          //convertToCelsius, 
          calculateHeatIndex, 
          getHumidityDescription} 
          from './calcConvrt';

function AppHTML(props) {
  const { form, locationData, error, errorMsg, mapURL, weatherData, movieData } = props;
  const lat = locationData ? locationData.lat : '';
  const lon = locationData ? locationData.lon : '';
  const wx = weatherData[0];
  

  // class Forecast {
  // constructor(cityObj) {
  //   this.date = cityObj.datatime;
  //   this.description = cityObj.weather.description;
  //   this.temp = cityObj.temp;
  //   this.highTemp = cityObj.high_temp;
  //   this.lowTemp = cityObj.low_temp;
  //   this.precip = cityObj.precip;
  //   this.cloudCover = cityObj.clouds;
  //   this.feelsLike = cityObj.app_temp;
  //   this.humidity = cityObj.dewpt;
  //   this.windSpeed = cityObj.wind_spd;
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
            <p>{wx ? roundInt(wx.temp) + '°' : 'Temp'}</p>
          </div>
          <div className="cloudcover">
            <p>{wx ? (wx.description) : 'Cloud Cover'}</p>
          </div>
          {error && (
            <div className="error">
              <p>{errorMsg}</p>
              <p></p>
            </div>
          )}
          <div className="cityMap">
          {<CityMap mapURL={mapURL} cityName={locationData ? locationData.display_name.split(',')[0] + ' Map' : 'City Map'} />}
          </div>
        </div>
        <div className="bottom">
          <div className="movieInfoContainer">
            <h2>Movies set in {locationData ? locationData.display_name.split(',')[0] : ''}</h2>
            <MovieInfo data={movieData} />
          </div>
        <div className="WXContainer">
          <div className="feelslike">
            <p className="bold">{wx ? calculateHeatIndex(roundInt(wx.temp), wx.humidity) + '°' : 'Feels Like'} </p>
            <p><i className="bi bi-brightness-high"></i></p>
          </div>
          <div className="humidity">
            <p className="bold">{wx ? getHumidityDescription(wx.humidity) : 'Humidity'}</p>
            <p><i className="bi bi-moisture"></i></p>
          </div>
          <div className="wind">
            <p className="bold">{wx ? wx.windSpeed + ' mph' : 'Wind'}</p>
            <p><i className="bi bi-wind"></i></p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppHTML;
