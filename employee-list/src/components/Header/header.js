import React from "react";
import "./header.css";

function Header() {
    return (
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            </table>
    );
}

export default Header;