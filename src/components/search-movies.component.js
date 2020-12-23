import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MovieResult from './movie-result.component';

function SearchMovies() {

    const [currMovie, setCurrMovie] = useState("");
    const [movies, setMovies] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

   const search = async (movieTitle) => {

    const uri = "https://api.themoviedb.org/3";
    const apiKey = "?api_key=e2f0ecaea4f6b74c81c6488cd6c40111";
    const queryType = "/search/movie";
    const jargon = "&language=en-US&";
    const endJargon = "&page=1&include_adult=false";
    const query = "query=" + movieTitle;

    try{
        setIsFetching(true);
        const response = await axios.get(uri + queryType + apiKey + jargon + query + endJargon);
        return response;
    }
    catch(e){
        alert(e);
        setIsFetching(false);
    }
  }

  const handleChangedInputMovie = event => {
    setCurrMovie(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();

    search(currMovie).then(response => {
        console.log(response);
        setMovies(response.data.results);
        setIsFetching(false);
    });
  }

    return(
        <div>
            <h3>Search for similar movies</h3>
            <h3>Curr Movie is: {currMovie}</h3>
            <form onSubmit={handleSubmit}>
                    <label>Search: </label>
                    <input type="text"
                        required
                        value={currMovie}
                        onChange={handleChangedInputMovie}/>
                    <input type="submit" value="Submit" />
            </form>
            <p>{isFetching ? 'Fetching movies...' : ''}</p>
            <MovieResult movieList={movies}/>
        </div>
    )
}

export default SearchMovies;