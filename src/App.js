import './App.css';
import React from 'react';

import CityForm from './CityForm';
import Header from './Header';
import Forecast from './Forecast';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstForecast: {},
      secondForecast: {},
      thirdForecast: {},
    }
  }

  setForecast = (data) => {
    this.setState({
      forecast: data
    });
  }


  render() { 
    console.log(this.state.forecast);
    return (
      <div className="App">
        <Header className="head" />
        <CityForm className="body" setForecast={this.setForecast}/>
      <Forecast firstForecast={this.state.forecast} secondForecast={this.state.secondForecast} thirdForecast={this.state.thirdForecast}/>
      </div>
    )
  }
}
export default App;
