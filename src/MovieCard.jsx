import React, { Component } from 'react'
import ModalImage from 'react-modal-image'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
export default class MovieCard extends Component {
    render() {
        console.log('moviecard');
        console.log(this.props);
        
   

        return (
            <div className='cardContainer'>
                <div className='cardImage'>
                    <ModalImage
                        small={`https://image.tmdb.org/t/p/w342${this.props.movies.poster_path}`}
                        large={`https://image.tmdb.org/t/p/original${this.props.movies.poster_path}`}
                        alt={this.props.movies.title}
                    />
                </div>
                <div className='cardText'>
                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#3C3C3C' }}>
                        <CardBody>
                            <CardTitle>{this.props.movies.title}</CardTitle>
                            <CardSubtitle>{this.props.movies.release_date}</CardSubtitle><br />
                            <CardText>{this.props.movies.overview}<br /><br />Rating: {this.props.movies.vote_average}</CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}