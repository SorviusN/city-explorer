import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Movies extends React.Component {
  render() {
    return (
      <Card bg="dark" style={{ width: '22rem' }}>
        <ListGroup variant="flush">
        <h3>Movies</h3>
      <ListGroup.Item>Sleepless in Seattle</ListGroup.Item>
        </ListGroup>
      </Card>
    )
  }
}

export default Movies;
