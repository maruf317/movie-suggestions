import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MovieResult from './movie-result.component';

export default class SearchMovies extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleChangedInputMovie = this.handleChangedInputMovie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchAsync = this.searchAsync.bind(this);

    this.state = {currMovie: "",
                  movies: [],
                  isFetching: false}
  }

   async searchAsync(movieTitle){

    this.setState({...this.state, isFetching: true});

    const uri = "https://api.themoviedb.org/3"
    const apiKey = "?api_key=e2f0ecaea4f6b74c81c6488cd6c40111";
    const queryType = "/search/movie";
    const jargon = "&language=en-US&";
    const endJargon = "&page=1&include_adult=false";
    const query = "query=" + movieTitle;

    let list = [];

    axios.get(uri + queryType + apiKey + jargon + query + endJargon)
        .then(response => {
            list = response.data.results;
            alert("fetching");
            this.setState({...this.state, movies: list, isFetching: false});
        })
        .catch(e => {
            alert("error");
            this.setState({...this.state, isFetching: false});
        });
  }

  search = this.searchAsync;

  handleChangedInputMovie(event){
    this.setState(
        {...this.state, currMovie: event.target.value}
    );
  }

  handleSubmit(event){
    this.search(this.state.currMovie);
  }

  render(){
    return(
        <div>
            <h3>Search for similar movies</h3>
            <h3>Curr Movie is: {this.state.currMovie}</h3>
            <form onSubmit={this.handleSubmit}>
                    <label>Search: </label>
                    <input type="text"
                        required
                        value={this.state.currMovie}
                        onChange={this.handleChangedInputMovie}/>
                    <input type="submit" value="Submit" />
            </form>
            <p>{this.state.isFetching ? 'Fetching movies...' : ''}</p>
            <MovieResult movieList={this.state.movies}/>
        </div>
    )
  }
}