import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import { Container } from 'bloomer';
import "bulma/css/bulma.css";
import MoviesList from "./MoviesList";
//import TEST_DATA from './test_json';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [],
      loading: true
    }
  }
// ham kiem cai dat thoi gian loading
  sleep(ms) {
    return new Promise(resolve =>setTimeout(resolve, ms))
  }
// ham tu dong loading du lieu
   async componentDidMount() {
    const results = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed');
    const data =  await results.json();
    this.movies = data.results;
    await this.sleep(1000);
    this.setState({
      movies: this.movies,
      loading: false
    });
  }

  render() {
    //let movies = TEST_DATA.results;
    let content;
    // kiem tra xem trang loading xong chua
    if( this.state.loading){
      content=<h1>I'm loading</h1>
    } else {
      content = <MoviesList movies={this.state.movies}/>
    }

    return (
      <Container>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to tommy</h1>
          </header>
          <Container>
            // noi dung hien thi lay tu render 
            {content}
          </Container>
        </div>
      </Container>
    );
  }
}

export default App;
