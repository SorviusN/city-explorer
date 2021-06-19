import React from 'react';

import MovieCard from './MovieCard';

class Movies extends React.Component {

// for each movie in the prop movies, we assign a prop to the child element.
  render() { 
     return this.props.movies.map(movie => { 
       return (
          <MovieCard movie={movie}/>
       )
     });
  }
}

export default Movies;
