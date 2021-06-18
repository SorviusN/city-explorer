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
      <Card style={{ width: '22rem' }}>
        <ListGroup variant="flush">
          <h3>16 Day Forecast </h3>
          {this.props.forecast.map(day => <ListGroup.Item key={day.key}>{day.date}, {day.description}</ListGroup.Item>)}
        </ListGroup>
      </Card>
      </>
    );
  }

}

export default Forecast;
