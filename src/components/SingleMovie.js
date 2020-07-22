import React from 'react'

function SingleMovie({movie}) {
   const {actor_1,actor_2,actor_3,director,
    locations,posterUri,production_company,release_year,title,writer} = movie;

    return (
        <div className="col col-3">
            <div className="card">
                {/* {posterUri} */}
                <div className="card-body">
                    <h6>{title}</h6>
                    <ul className="list-group list-group-flush movie-list">
                        <li className=" list-group-item">Actors:- {actor_1 + ", " + actor_2 + ", " + actor_3}</li>
                        <li className=" list-group-item">Director:- {director}</li>
                        {/* <li className=" list-group-item">Writer:- {writer}</li> */}
                        {/* <li className=" list-group-item">Production company:- {production_company}</li> */}
                        <li className=" list-group-item">Locations:- {locations}</li>
                        <li className=" list-group-item"><p className="card-text">Release year:- <small className="text-muted">{release_year}</small></p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SingleMovie
