import React from 'react'
import SingleMovie from './SingleMovie'
import Spinner from './Spinner';

function FeaturedMovies({moviesWithBanner}) {
    const {loading, movies} = moviesWithBanner;
    let featuredMovies;

    if(movies!= undefined && movies.length > 0) {
        featuredMovies = movies.map((movie,i) => (<SingleMovie key={i} movie={movie}/>))
    }

    return (
        <div className="container featured-list mb-5">
            <h4 className="mb-3">Featured Movies</h4>
            <div className="row">
                {loading ? <Spinner /> : featuredMovies}
            </div>
        </div>
    )
}

export default FeaturedMovies
