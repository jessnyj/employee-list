import React from "react";
import "./row.css";

function Row() {
    return (
        <table class="table table-striped">
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Row;