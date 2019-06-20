import React, { Component } from 'react'
import MovieCard from './MovieCard'


export default class MoviesList extends Component {
  render() {
    console.log('movie list');
    console.log(this.props.movies);
    

    return (
      <div>
        {this.props.movies.map(movie => <MovieCard movies={movie} key={movie.id}/>)}
      </div>
    )
  }
}