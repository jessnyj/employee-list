import React from "react";
import "./search.css";

function Search(props) {
    return (
        <div className="col-md-4 mb-3 search">
            <label>Search for an Employee:</label>
            <input 
            value={props.search}
            onChange={props.handleInputChange}
            type="text" 
            className="form-control" 
            placeholder="Search"></input>
        </div>
    );
}

export default Search;