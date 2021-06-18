import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Movies extends React.Component {
  render() { 
     return this.props.movies.map(movie => { 
      return (
        <Card bg="dark" style={{ width: '22rem' }}>
        {movie.imageUrl !== null ? <Card.Img variant="top" src={movie.imageUrl}/> : <div></div>}
          <ListGroup variant="flush">
            <ListGroup.Item variant="success">{movie.title} </ListGroup.Item>
            <ListGroup.Item variant="info">Overview: {movie.overview} </ListGroup.Item>
            <ListGroup.Item>Average Votes: {movie.averageVotes} </ListGroup.Item>
            <ListGroup.Item>Total Votes: {movie.totalVotes} </ListGroup.Item>
            <ListGroup.Item>Popularity: {movie.popularity}</ListGroup.Item>
            <ListGroup.Item>Released Date: {movie.releaseDate}</ListGroup.Item>
          </ListGroup>
        </Card>
      )
    })
  }
}

export default Movies;
