import React from "react";
import "./row.css";

function Row({name, email, image, phone, dob}) {
    return (
        <table class="table table-striped">
            <tbody>
                <tr>
                    <th scope="row"></th>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{image}</td>
                    <td>{phone}</td>
                    <td>{dob}</td>=
                </tr>
            </tbody>
        </table>
    );
}

export default Row;