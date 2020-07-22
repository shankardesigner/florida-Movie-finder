import React from 'react'
import Banner from './components/Banner/Banner'
import FeaturedMovies from './components/FeaturedMovies'
import Search from './components/Search'
import MapSection from './components/MapSection'

function Home({movieBanner, moviesListWithBanner, locationLists, searchHandler, filteredList, marker, moviesLength}) {
    return (
        <>
            <Banner movieBanner={movieBanner}/>
            {/* <FeaturedMovies moviesWithBanner={moviesListWithBanner}/> */}
            <Search locationList={locationLists} searchHandler={searchHandler}/>
            <MapSection zoomLevel={6} moviesList={filteredList} marker={marker} moviesLength={moviesLength} />
        </>
    )
}

export default Home
