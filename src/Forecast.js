import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Forecast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <>
      <Card bg="dark" style={{ width: '18rem' }}>
        <ListGroup variant="flush">
          <h3>3 Day Forecast </h3>
          <ListGroup.Item>{`${this.props.firstForecast[0]} - ${this.props.firstForecast[1]}`}</ListGroup.Item>
          <ListGroup.Item>{`${this.props.secondForecast[0]} - ${this.props.secondForecast[1]}`}</ListGroup.Item>
          <ListGroup.Item>{`${this.props.thirdForecast[0]} - ${this.props.thirdForecast[1]}`}</ListGroup.Item>
        </ListGroup>
      </Card>
      </>
    );
  }

}

export default Forecast;
