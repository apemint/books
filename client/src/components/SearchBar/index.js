import React from "react";

function Searchbar() {
    return (
        <div>
            <form id="searchBook">
                <input className="form-control form-control-lg" type="text" placeholder="Search for a book!"/>
        </form>
                <button type="submit" className="btn btn-dark">Search </button>
        </div>
    )
}

export default Searchbar;