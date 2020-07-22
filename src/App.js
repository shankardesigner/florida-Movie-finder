import React, { useState, useEffect } from 'react';
import './App.css';
import movieBanner from './movieBanner.jpg';
import marker from './marker.png';

import Header from './components/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer';
import { getAllMovies, getMoviesWithPromoBanner, getMoviesLocations } from './Actions/MovieActions';
import FeaturedMovies from './components/FeaturedMovies';
import MapSection from './components/MapSection';
import Search from './components/Search';

function App() {
  const [moviesList, setMoviesList] = useState({
    loading: true,
    movies: []
  });
  const [filteredList, setFilteredList] = useState({
    loading: true,
    movies: []
  });
  const [locationLists, setLocationLists] = useState([]);
  const [moviesListWithBanner, setMoviesListWithBanner] = useState({
    loading: true,
    movies: []
  });

  useEffect(() => {
    const fetchAllMovies = async () => {
      setMoviesList({
        loading: false,
        movies: await getAllMovies()
      });
      setFilteredList({
        loading: false,
        movies: await getAllMovies()
      });
    }
    const fetchMoviesWithBanner = async () => {
      setMoviesListWithBanner({
        loading: false,
        movies: await getMoviesWithPromoBanner()
      });
    }

    const locationList = async () => {
      setLocationLists(await getMoviesLocations());
    }

    fetchMoviesWithBanner();
    fetchAllMovies();
    locationList();
  }, []);

  const searchHandler = (e, field) => {
    const searchTerms = e.target.value;
    let localMovies = moviesList.movies;

    let terms;

    let afterFilterList = localMovies.filter(mv => {
      if(mv[field] !== null && mv[field] !== undefined) {
        if(field == "release_year") {
          terms = (mv[field] == parseInt(searchTerms)) ? 0 : -1;
        } else {
          terms = mv[field].toLowerCase().indexOf(searchTerms.toLowerCase());
        }
      }

      if(terms != -1) {
        return mv
      }

      return;
    });

    if(searchTerms.length < 1) {
      afterFilterList = localMovies 
    }

    setFilteredList({
      loading: false,
      movies: afterFilterList
    })
    localMovies = moviesList.movies;
  }

  return (
    <>
      <Header />
      <Banner movieBanner={movieBanner}/>
      <FeaturedMovies moviesWithBanner={moviesListWithBanner}/>
      <Search locationList={locationLists} searchHandler={searchHandler}/>
      <MapSection zoomLevel={6} moviesList={filteredList} marker={marker}/>
      <Footer />
    </>
  );
}

export default App;
