import React from 'react';
import axios from 'axios';
import AppHTML from './AppHTML';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      locationData: null,
      error: false,
      errorMsg: '',
      showCityMap: false,
      mapURL:'',
      displayWeather: false,
      weatherURL:'',
      weatherData: [],
    }
  }

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  handleGetCityInfo = async (event) => {
    event.preventDefault();

    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API}&q=${this.state.city}&format=json`
      console.log(url);
      let cityDataFromAxios = await axios.get(url);
      
      
      let weatherURL = `${process.env.REACT_APP_SERVER}/weather?lat=${cityDataFromAxios.data[0].lat}&lon=${cityDataFromAxios.data[0].lon}&searchQuery=${this.state.city}`;
      let weatherDataFromAxios = await axios.get(weatherURL)
      console.log(weatherDataFromAxios.data);

      this.setState({
        locationData: cityDataFromAxios.data[0],
        error: false, 
        errorMsg: '',
        displayMap: true,
        mapURL: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API}&center=${cityDataFromAxios.data[0].lat},${cityDataFromAxios.data[0].lon}&zoom=13`,
        weatherData: weatherDataFromAxios.data
      })
    } catch (error) {
      let errorMsg = error.message + ': ' + error.response.data;
      this.setState({
        error: true,
        errorMsg: errorMsg,
        displayMap: false,
        displayWeather: false,
      })
    }
  }

  render() {
    const form = (
      <form onSubmit={this.handleGetCityInfo}>
        <input
          type="text" 
          onInput={this.handleCityInput} 
          placeholder="Enter City"
        />
      </form>
    );
    console.log(this.state.mapURL);
    return (
      <>
        <AppHTML
          form={form}
          locationData={this.state.locationData}
          error={this.state.error}
          errorMsg={this.state.errorMsg}
          handleToggleCityMap={this.handleToggleCityMap}
          mapURL={this.state.mapURL}
          weatherData={this.state.weatherData}
        />



      </>
    );
  }
}

export default App;

