import React from 'react';
import './App.css';
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import Helmet from "react-helmet";
import favicon from './favicon.ico';

function App() {
  return (
    <div className="app">
      <Helmet>
        <title>Netflix Clone</title>
        <meta 
        name="description"
        content="Netflix Clone created using ReactJS and Firebase, TMDB API"
        />
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      </Helmet>
      <Nav />
      <Banner />
      <Row title="NETFLIX Originals" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorroMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
