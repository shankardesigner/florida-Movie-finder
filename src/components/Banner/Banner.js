import React from 'react'

function Banner({movieBanner}) {
    const style={
        backgroundImage: `url(${movieBanner})`
    }


    return (
        <div className="jumbotron jumbotron-fluid banner" style={style}>
            <div className="container text-white">
                <h1 className="display-4">Holla Viewers !!</h1>
                <p className="lead mb-8">Get the Movie hall near by you <span role="img" aria-label="smile">🙂</span></p>
            </div>
            </div>
    )
}

export default Banner
