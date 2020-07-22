import React, {useState, useEffect} from 'react'

function Search({searchHandler}) {
    const [searchCat, setSearchCat] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        searchCat.length < 1 ? setSearchCat('title'): setSearchCat(searchCat);
    }, []);

    const onChangeHander = e => {
        setSearchCat(e.target.value)
    }

    return (
        <div className="container">
            <form className="search-form" onSubmit={(e) => submitHandler(e)}>
            <select className="form-control" id="exampleFormControlSelect1" onChange={(e) => onChangeHander(e)}>
                <option value="title">Search by Movie Name</option>
                <option value="locations">Search by location</option>
                </select>
                <input type="search" className="form-control" placeholder="Please type movie name, places and so on..." onChange={(e) => searchHandler(e,searchCat)}/>
            </form>
        </div>
    )
}

export default Search
