import React from 'react';

import Card from 'react-bootstrap/Card';

import ForecastCard from './ForecastCard';

class Forecast extends React.Component {
  render() {
    return(
      <>
      <Card bg="dark" style={{ width: '22rem'}}>
      <h2>16-Day Forecast</h2>
        {this.props.forecast.map(forecastDay => {
          return (
            <ForecastCard forecastDay={forecastDay}></ForecastCard>
          )}
        )}
      </Card>
      </>
    )
  }
}

export default Forecast;
