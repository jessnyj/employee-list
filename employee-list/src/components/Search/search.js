import React from "react";
import "./search.css";

function Search() {
    return (
        <div className="col-md-4 mb-3 search">
            <label for="validationDefault01">Search for an Employee:</label>
            <input type="text" class="form-control" id="validationDefault01" placeholder="Search" required></input>
        </div>
    );
}

export default Search;