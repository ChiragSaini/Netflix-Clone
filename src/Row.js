import React, { useState, useEffect } from 'react';
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(fetchUrl);
                setMovies(res.data.results);
                return res;
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [fetchUrl]);
    
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }

    const handleClick = (movie) => {
        if (trailerUrl){
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            })
            .catch(error => console.log(error))
        }
    }

    return (
        <div className="row" >
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        onClick={() => handleClick(movie)}
                        key={movie.id}
                        src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        className={`row__poster ${isLargeRow && 'row__poster__large'}`}
                    />
                ))}
            </div>
            <div>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
        </div>
    );
}

export default Row;