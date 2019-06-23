import React, { Component } from 'react'
import ModalImage from 'react-modal-image'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
export default class MovieCard extends Component {
    render() {
        
        return (
            <div className='cardContainer'>
                <div className='cardImage'>
                    <ModalImage
                        small={`https://image.tmdb.org/t/p/w342${this.props.stuff.poster_path}`}
                        large={`https://image.tmdb.org/t/p/original${this.props.stuff.poster_path}`}
                        alt={this.props.stuff.title}
                    />
                </div>
                <div className='cardText'>
                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#3C3C3C' }}>
                        <CardBody>
                            <CardTitle>{this.props.stuff.title}</CardTitle>
                            <CardSubtitle>{this.props.stuff.release_date}</CardSubtitle><br />
                            <CardText>{this.props.stuff.overview}<br /><br />Rating: {this.props.stuff.vote_average}</CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}