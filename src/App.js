import './App.css';
import axios from 'axios';

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-dom';

import SearchMovies from "./components/search-movies.component";

function App() {

    //const token = getToken();

    return(
          <div className="container">
            <SearchMovies />
          </div>
    )
}

async function getToken(){

    const uri = "https://api.themoviedb.org/3"
    const apiKey = "?api_key=e2f0ecaea4f6b74c81c6488cd6c40111";
    const query = "/authentication/token/new";

    try{
        const response =  await axios(uri + query + apiKey);
        const token = response.data.request_token;
        console.log(token);
        return token;
    }
    catch(error){
        alert(error);
    }
}

export default App;
