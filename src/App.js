import React from 'react';
import axios from 'axios';
import CityDisplay from './CityDisplay';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      locationData: [],
      error: false,
      errorMsg: ''
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

      this.setState({
        locationData: cityDataFromAxios.data[0],
        error: false, 
        errorMsg: '',
      })

    } catch (error) {
      this.setState({
        error: true,
        errorMsg: error.response.data.error
      })
    }
  }

  render() {
    return (
      <>
        <CityDisplay>
          <div className="search">
            <form onSubmit={this.handleGetCityInfo}>
                <input
                  type="text" 
                  onInput={this.handleCityInput} 
                  placeholder="Enter City"
                />
            </form>
          </div>
          { this.state.error 
            ? <p>{this.state.errorMsg}</p>
            : <>
                <p>{this.state.locationData.display_name}</p>
                <CityDisplay />
              </>
          }
        </CityDisplay>
      </>
    )
  }
}

export default App;

