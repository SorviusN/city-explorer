import './App.css';
import React from 'react';
import CityForm from './CityForm';
import Map from './Map';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <CityForm/>
        <Map/>
      </div>
    )
  }
}
export default App;
