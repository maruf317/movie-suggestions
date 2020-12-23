import React, { Component } from 'react';

// take in array of movies, render each one

function Movie(props) {
    return (
        <div>
            <h1>{props.movieInfo.original_title}</h1>
            <h3>{props.movieInfo.release_date}</h3>
        </div>
    )
}

export default function MovieResult(props){
    if(props.movieList.length === 0){
        return (
            <h1>Nothing to Show</h1>
        )
    }

    alert(props.movieList[0].original_title);

    const movieArray = props.movieList.map(
        (movie, i) => <Movie key = {i}
                        movieInfo = {movie} />
    );

    return (
        <div> {movieArray} </div>
    );
}
