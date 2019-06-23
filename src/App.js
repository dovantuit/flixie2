import React, { Component } from 'react';
import './App.css';
import { Container } from 'bloomer';
import "bulma/css/bulma.css";
import MoviesList from "./MoviesList";
import { InputGroup, Input } from 'reactstrap';
//import TEST_DATA from './test_json';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            filteredMovie: [],
            loading: true
        }
    }
    // ham kiem cai dat thoi gian loading
    sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
    // ham tu dong loading du lieu 
    async componentDidMount() {
        const results = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed');
        const data = await results.json();
        this.movies = data.results;
        await this.sleep(1000);
        await this.setState({
            movies: this.movies,
            filteredMovie: this.movies,
            loading: false
        });
    }
    // ham loc du lieu
    filterMovies = (textMovie) => {
        let moviesCopy = this.state.movies;
        let results = moviesCopy.filter(movie => movie.title.toLowerCase().includes(textMovie.toLowerCase()));
        this.setState({ filteredMovie: results });
    };

    render() {
        //let movies = TEST_DATA.results;
        let content;
        // kiem tra xem trang loading xong chua
        if (this.state.loading) {
            content=<h1>i'm loading please wait a bit</h1>
        } else {
            content=<MoviesList movies={this.state.filteredMovie} />
        }

        return (
            <Container style={{ background: 'gray' }}>
                <div className="App">
                    <InputGroup className="Search">
                        <Input
                            type='phim'
                            onChange={(phim) => this.filterMovies(phim.target.value)}
                            placeholder='search here'
                        />
                    </InputGroup>
                    <Container>
                       {content}
                    </Container>
                </div>
            </Container>
        );
    }
}

export default App;
