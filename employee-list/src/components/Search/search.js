import React from "react";
import "./search.css";

function Search() {
    return (
        <div className="col-md-4 mb-3 search">
            <label>Search for an Employee:</label>
            <input 
            type="text" 
            className="form-control" 
            id="validationDefault01" 
            placeholder="Search"></input>
        </div>
    );
}

export default Search;