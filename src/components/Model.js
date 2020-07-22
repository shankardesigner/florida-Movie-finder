import React from 'react'
import Spinner from './Spinner'

function Model({details:{movie,loading}}) {

    return (
        <>
          <div className="modal fade bd-example-modal-lg" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="mySmallModalLabel">{movie.title}</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    {
                         !loading ? (
                            <div className="row">
                                <div className="col image" ><img src={movie.posterUri.substr(10,120)} alt="" /></div>
                                <div className="col">
                                    <h3>Details</h3>
                                    <hr />
                                    <ul className="movie-details">
                                        <li>Actors:-  {movie.actor_1}, {movie.actor_2}, {movie.actor_3}</li>
                                        <li>Director:- {movie.director}</li>
                                        <li>writer:- {movie.writer}</li>
                                        <li>Production company:- {movie.production_company}</li>
                                        <li>Locations:- {movie.locations}</li>
                                        <li>Release year:- {movie.release_year}</li>
                                    </ul>
                                </div>
                            </div>
                         ): <Spinner />
                    }
                </div>
            </div>
            </div>  
        </>
    )
}

export default Model
