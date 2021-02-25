import React from "react";
import "./row.css";

function Row({ name, email, image, phone, dob }) {
    return (
        <tr>
            <td>{image}</td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{dob}</td>
        </tr>
    );
}

export default Row;