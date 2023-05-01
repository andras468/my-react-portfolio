import React, { Component } from "react";
import WEATHER_CODES from '../data/weatherCodes';

class Weather extends Component {
  weatherApiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=54.72&longitude=-5.81&current_weather=true';
  state = { 
    currentWeather: {},
    citySearchOn: false,
    lastCity: '',
  };

  componentDidMount() {
    fetch(this.weatherApiUrl)
      .then(response => response.json())
      .then(json => this.setState({ currentWeather: json.current_weather }))
      .catch(error => alert(error.message));
  }

  openSearch = () => {
    this.setState({ citySearchOn: !this.state.citySearchOn })
  }

  onCitySearchChange = () => {
    this.setState({ citySearchOn: !this.state.citySearchOn })
  }

  render() {
    const { citySearchOn, lastCity } = this.state;
    const { temperature, weathercode } = this.state.currentWeather;

    return weathercode ? (
        <div className="float-right-top">
          <p>Temp: {temperature}</p>
          <p>Weather: {WEATHER_CODES[weathercode].description}</p>
          <button onClick={this.openSearch}>Select city</button>
          { this.state.citySearchOn ?
            (
              <div>
                <input 
                  type="text"
                  value={lastCity}
                  id='citySearchBox' />
              </div>
            ) : <></>}
        </div>
      ) : (
        <></>
      );
  }
}

export default Weather;