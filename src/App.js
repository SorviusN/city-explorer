import './App.css';
import React from 'react';

import CityForm from './CityForm';
import Header from './Header';
import Forecast from './Forecast';
import Footer from './Footer';
import Movies from './Movies';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      forecast: '',
      movies: '',
    }
  }

  setForecast = (data) => {
    this.setState({
      forecast: data,
    });
  }

  setMovies = (data) => {
    this.setState({
      movies: data,
    })
  }

  render() { 
    return (
      <div className="App">
        <Header className="head" />
        <CityForm className="body" setForecast={this.setForecast} setMovies={this.setMovies} />
        {
        this.state.forecast === '' ? 
          <div></div>
        :
          <div className="MoviesAndForecastContainer">
            <Forecast classname="Forecast" forecast={this.state.forecast}/>
            <Movies className="Movies" movies={this.state.movies}/>
          </div>
        }
        <Footer/>
      </div>
    )
  }
}
export default App;

        //<Forecast forecast={this.state.forecast}/>
