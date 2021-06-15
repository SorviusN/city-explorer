import './App.css';
import React from 'react';

import CityForm from './CityForm';
import Header from './Header';

class App extends React.Component {

  render() { 
    return (
      <div className="App">
        <Header className="head" />
        <CityForm className="body" />
      </div>
    )
  }
}
export default App;
