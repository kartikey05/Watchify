import React from 'react'
import "./HomeScreen.css"
import Nav from '../Nav';
import Banner from '../Banner';
import requests from '../Request';
import Row from '../Row';
function HomeScreen() {
    return (
      <div className="homeScreen">
        <Nav />
        <Banner />
        <Row key="trending" title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
        <Row key="top-rated" title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row key="action-movies" title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row key="comedy-movies" title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row key="horror-movies" title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row key="romance-movies" title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row key="documentaries" title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    );
  }
  
export default HomeScreen;