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
      mapURL: '',
      weatherData: [],
      movieData: [],
      movieError: false,
      movieErrMsg: '',
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
      const url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API}&q=${this.state.city}&format=json`
      const cityDataFromAxios = await axios.get(url);
      console.log(cityDataFromAxios);

      const weatherURL = `${process.env.REACT_APP_LIVE_SERVER}/weather?lat=${cityDataFromAxios.data[0].lat}&lon=${cityDataFromAxios.data[0].lon}&searchQuery=${this.state.city}`;

      // const weatherURL = `${process.env.REACT_APP_SERVER}/weather?lat=${cityDataFromAxios.data[0].lat}&lon=${cityDataFromAxios.data[0].lon}&searchQuery=${this.state.city}`;
      
      const weatherDataFromAxios = await axios.get(weatherURL);

      this.setState({
        locationData: cityDataFromAxios.data[0],
        error: false, 
        errorMsg: '',
        mapURL: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API}&center=${cityDataFromAxios.data[0].lat},${cityDataFromAxios.data[0].lon}&zoom=13`,
        weatherData: weatherDataFromAxios.data,
      });
    } catch (error) {
      // console.log(error);
      let errorMsg = '';
      if (error.response && error.response.data) {
        errorMsg = error.message + ': ' + error.response.data;
      } else {
        errorMsg = error.message;
      }
      this.setState({
        error: true,
        errorMsg: errorMsg,
        displayMap: false,
      });
    }

    try {
      const movieURL = `${process.env.REACT_APP_LIVE_SERVER}/movies?searchQuery=${this.state.city}`
      // const movieURL = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.city}`

      const movieDataFromAxios = await axios.get(movieURL);

      this.setState({
        movieData: movieDataFromAxios.data,
      });
    } catch (error) {
      // console.log(error);
      let errorMsg = '';
      if (error.response && error.response.data) {
        errorMsg = error.message + ': ' + error.response.data;
      } else {
        errorMsg = error.message;
      }
      this.setState({
        error: true,
        errorMsg: errorMsg,
        displayMap: false,
      });
    }
    const stateCopy = { ...this.state };
    delete stateCopy.mapURL;
    console.log(stateCopy);
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

    return (
      <>
      <AppHTML
        form={form}
        locationData={this.state.locationData}
        error={this.state.error}
        errorMsg={this.state.errorMsg}
        mapURL={this.state.mapURL}
        weatherData={this.state.weatherData}
        movieData={this.state.movieData}
      />
      </>
    );
  }
}

export default App;


// handleGetCityInfo = async (event) => {
//   event.preventDefault();

//   try {
//     let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API}&q=${this.state.city}&format=json`
//     console.log(url);
//     let cityDataFromAxios = await axios.get(url);
    
    
//     let weatherURL = `${process.env.REACT_APP_SERVER}/weather?lat=${cityDataFromAxios.data[0].lat}&lon=${cityDataFromAxios.data[0].lon}&searchQuery=${this.state.city}`;
    
//     let weatherDataFromAxios = await axios.get(weatherURL)
//     console.log(weatherDataFromAxios.data);

//     let movieURL = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.city}`
//     let movieDataFromAxios = await axios.get(movieURL);
//     console.log(movieDataFromAxios.data);

//     this.setState({
//       locationData: cityDataFromAxios.data[0],
//       error: false, 
//       errorMsg: '',
//       displayMap: true,
//       mapURL: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API}&center=${cityDataFromAxios.data[0].lat},${cityDataFromAxios.data[0].lon}&zoom=13`,
//       weatherData: weatherDataFromAxios.data,
//       movieData: movieDataFromAxios.data,
//     })
//   } catch (error) {
//     let errorMsg = error.message + ': ' + error.response.data;
//     this.setState({
//       error: true,
//       errorMsg: errorMsg,
//       displayMap: false,
//       displayWeather: false,
//     })
//   }  
