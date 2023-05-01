import React, { Component } from "react";

const WEATHER_CODES = {
  0: { 'description': 'Clear sky' },
  1: { 'description': 'Mainly clear' },
  2: { 'description': 'Partly cloudy' },
  3: { 'description': 'Overcast' },
  45: { 'description': 'Fog' },
  48: { 'description': 'Depositing rime fog' },
  51: { 'description': 'Light drizzle' },
  53: { 'description': 'Moderate drizzle' },
  55: { 'description': 'Dense drizzle' },
  56: { 'description': 'Light freezing drizzle' },
  57: { 'description': 'Dense freezing drizzle' },
  61: { 'description': 'Light rain' },
  63: { 'description': 'Moderate rain' },
  65: { 'description': 'Heavy rain' },
  66: { 'description': 'Light freezin rain' },
  67: { 'description': 'Heavy freezing rain' },
  71: { 'description': 'Light snowfall' },
  73: { 'description': 'Moderate snowfall' },
  75: { 'description': 'Heavy snowfall' },
  77: { 'description': 'Snow grains' },
  80: { 'description': 'Light showers' },
  81: { 'description': 'Moderate showers' },
  82:	{ 'description': 'Heavy showers' },
  85: { 'description': 'Light snow showers' },
  86: { 'description': 'Heavy snow showers' },
  95: { 'description': 'Thunderstorm' },
  96: { 'description': 'Thunderstorm with light hail' },
  99: { 'description': 'Thunderstrom with heavy hail' },
};

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