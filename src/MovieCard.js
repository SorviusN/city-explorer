import React from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

//Creating a movie card with the parameters of each movie in the movies array (taken from Movies.js)
class MovieCard extends React.Component {
  render() {
      return (
        <Card style={{ width: '15rem' }}>
        {this.props.movie.imageUrl !== null ? <Card.Img variant="top" src={this.props.movie.imageUrl}/> : <div></div>}
          <ListGroup>
            <ListGroup.Item variant="success">{this.props.movie.title} </ListGroup.Item>
            <ListGroup.Item variant="info">Overview: {this.props.movie.overview} </ListGroup.Item>
            <ListGroup.Item>Average Votes: {this.props.movie.averageVotes} </ListGroup.Item>
            <ListGroup.Item>Total Votes: {this.props.movie.totalVotes} </ListGroup.Item>
            <ListGroup.Item>Popularity: {this.props.movie.popularity}</ListGroup.Item>
            <ListGroup.Item>Released Date: {this.props.movie.releaseDate}</ListGroup.Item>
          </ListGroup>
        </Card>
      )  
  }
}

export default MovieCard;
