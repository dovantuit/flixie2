import React, { Component } from 'react'
import { Box } from 'bloomer';
import "./MovieCard.css";

class MovieCard extends Component {

    render() {
        return (

            <Box className="MovieCard-Box">
                <h1>{this.props.movie.title}</h1>
                <img src={`https://image.tmdb.org/t/p/w342${this.props.poster_path}`}
                    style={{ height: 300, objectFit: 'cover' }}
                    alt="Card image cap" />
                <h4 style={{backgroundColor:'gray'}}>{this.props.movie.overview}</h4>
            </Box>


        )
    }
}

export default MovieCard;