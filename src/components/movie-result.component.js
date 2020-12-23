import React, { Component } from 'react';

// take in array of movies, render each one

const imageBasePath = 'http://image.tmdb.org/t/p/';
const imageWidth = 'w200';

function Movie(props) {

    const imgSrc = imageBasePath + imageWidth + props.movieInfo.poster_path;

    return (
        <div>
            <h1>{props.movieInfo.original_title}</h1>
            <h3>{props.movieInfo.release_date}</h3>
            <img src = {props.movieInfo.poster_path ? imgSrc : null} alt=""/>
        </div>
    )
}

export default function MovieResult(props){
    if(props.movieList.length === 0){
        return (
            <h1>Nothing to Show</h1>
        )
    }

    const movieArray = props.movieList.map(
        (movie, i) => <Movie key = {i}
                        movieInfo = {movie} />
    );

    return (
        <div> {movieArray} </div>
    );
}
