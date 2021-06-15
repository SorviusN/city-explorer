import './App.css';
import React from 'react';

import CityForm from './CityForm';
import Header from './Header';

class App extends React.Component {

  render() { 
    return (
      <div className="App">
        <Header/>
        <CityForm/>
      </div>
    )
  }
}
export default App;
