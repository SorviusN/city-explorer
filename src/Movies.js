import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Movies extends React.Component {
  render() { 
     return this.props.movies.map(movie => { 
      return (
        <Card bg="dark" style={{ width: '22rem' }}>
          <Card.Img variant="top" src={movie.imageUrl} />
          <ListGroup variant="flush">
            <ListGroup.Item variant="primary">Title - {movie.title} </ListGroup.Item>
            <ListGroup.Item>Overview - {movie.overview} </ListGroup.Item>
            <ListGroup.Item>Average votes - {movie.averageVotes} </ListGroup.Item>
            <ListGroup.Item>Total votes -{movie.totalVotes} </ListGroup.Item>
            <ListGroup.Item></ListGroup.Item>
            <ListGroup.Item></ListGroup.Item>
            <ListGroup.Item></ListGroup.Item>
          </ListGroup>
        </Card>
      )
    })
  }
}

export default Movies;
