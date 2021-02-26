import React from "react";
import "./row.css";

function Row({ name, email, image, phone, dob }) {
    return (
        <tr>
            <td><img src={image}></img></td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{dob}</td>
        </tr>
    );
}

export default Row;