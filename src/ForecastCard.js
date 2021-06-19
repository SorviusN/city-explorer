import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import './ForecastCard.css';

//Creating a movie card with the parameters of each movie in the movies array (taken from Movies.js)
class ForecastCard extends React.Component {
  render() {
      return (
          <ListGroup className="forecastDateTime" variant="flush">
            <ListGroup.Item variant="danger">{this.props.forecastDay.date} </ListGroup.Item>
            <ListGroup.Item variant="success">{this.props.forecastDay.description}</ListGroup.Item>
          </ListGroup>
      )  
  }
}

export default ForecastCard;
