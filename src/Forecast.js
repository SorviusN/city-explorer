import React from 'react';


class Forecast extends React.Component {
  render() {
    return (
      <>
      <h1>Forecast</h1>
      <p>{this.props.firstForecast}</p>
      </>
    )
  }
}

export default Forecast;
