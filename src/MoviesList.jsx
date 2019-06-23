import React, { Component } from 'react'
import MovieCard from './MovieCard'


export default class MoviesList extends Component {
  render() {
    
    return (
      <div>
        {this.props.movies.map(name => <MovieCard stuff={name} key={name.id}/>)}
      </div>
    )
  }
}