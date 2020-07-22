import React from 'react'

function Header() {

    const scrollToMap = (e) => {
        e.preventDefault();
        const searchForm = document.querySelector(".search-form");
        const top = searchForm.offsetTop - searchForm.clientHeight;
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top
        })
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container text-white">
                <b className="navbar-brand">Florida Movie App</b>
                {/* <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    </ul> */}

                    <button className="btn btn-success" onClick={(e) => scrollToMap(e)}>Search movies on Map</button>
            </div>
        </nav>
    )
}

export default Header
