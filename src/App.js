import './App.css';
import React from 'react';

import CityForm from './CityForm';
import Header from './Header';
import Forecast from './Forecast';
import Footer from './Footer';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstForecast: ['Day', '1'],
      secondForecast: ['Day', '2'],
      thirdForecast: ['Day', '3'],
    }
  }

  setFirstForecast = (data) => {
    this.setState({
      firstForecast: data
    });
  }

  setSecondForecast = (data) => {
    this.setState({
      secondForecast: data
    });
  }

  setThirdForecast = (data) => {
    this.setState({
      thirdForecast: data
    });
  }

  render() { 
    return (
      <div className="App">
        <Header className="head" />
        <CityForm className="body" setFirstForecast={this.setFirstForecast} setSecondForecast={this.setSecondForecast} setThirdForecast={this.setThirdForecast} />
        <Forecast firstForecast={this.state.firstForecast} secondForecast={this.state.secondForecast} thirdForecast={this.state.thirdForecast}/>
        <Footer/>
      </div>
    )
  }
}
export default App;
